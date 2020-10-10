'use strict'
const Db = use('Database')
const Env = use('Env')
const axios = use("axios")
const cheerio = use("cheerio")


class ScrapingDatasetController {

    async index({view,response}){
        const resp = {
            status  : true,
            title   : "<i>Scraping Dataset</i>",
            html   : view.render('scraping_dataset.index')
        }
        return response.json(resp)
    }

    async status({response}){
        const resp = await this.cekStatus()
        return response.json(resp)
    }

    async cekStatus(){
        const config = await Db.table(Env.get('tbl_config')).first()
        const resp = {
            status  : config['scraping_status'],
            page  : config['scraping_page']
        }
        return resp
    }

    async getData({response,request}){
        const req = request.get()
        var search = req.search.value
        let start = parseInt(req.start)
        let limit = parseInt(req.length)
        let count_all = await Db.table(Env.get('tbl_scraping_dataset')).getCount()
        let count_flter
        var laporan
        const select = ["_id","lapor_id","user_pelapor","judul_laporan","instansi_laporan","url_laporan","tgl_laporan","isi_laporan"]
        if(search){            
            count_flter = await Db.table(Env.get('tbl_scraping_dataset'))
                .where('lapor_id', 'LIKE', '%'+search+'%')
                .orWhere('judul_laporan', 'LIKE', '%'+search+'%')
                .orWhere('instansi_laporan', 'LIKE', '%'+search+'%')
                .orWhere('isi_laporan', 'LIKE', '%'+search+'%')
                .orWhere('tgl_laporan', 'LIKE', '%'+search+'%')
                .getCount()

            laporan = await Db.select(select).table(Env.get('tbl_scraping_dataset'))
                .where('lapor_id', 'LIKE', '%'+search+'%')
                .orWhere('judul_laporan', 'LIKE', '%'+search+'%')
                .orWhere('instansi_laporan', 'LIKE', '%'+search+'%')
                .orWhere('isi_laporan', 'LIKE', '%'+search+'%')
                .orWhere('tgl_laporan', 'LIKE', '%'+search+'%')
                .orderBy('lapor_id', 'desc')
                .offset(start).limit(limit)
        }else{
            count_flter =  count_all
            laporan = await Db.select(select).table(Env.get('tbl_scraping_dataset')).orderBy('lapor_id', 'desc').offset(start).limit(limit)
        }
        const data = []
        for (let i=0; i<laporan.length; i++) {
            const element = laporan[i];
            let isDataset = await Db.table(Env.get('tbl_dataset')).where({scraping_id: element._id}).getCount()
            
            data.push({
                _id: element._id, 
                lapor_id: element.lapor_id, 
                user_pelapor: element.user_pelapor,
                judul_laporan: element.judul_laporan,
                isi_laporan: element.isi_laporan, 
                instansi_laporan: element.instansi_laporan,
                url_laporan: element.url_laporan,
                tgl_laporan: element.tgl_laporan,
                dataset: isDataset
            })
        }
        return response.json({
            recordsTotal: count_all,
            recordsFiltered : count_flter,
            data : data
        })
    }

    async actionScraping({request,response}){
        const req = request.get()
        let scraping_status = req['scraping_status']
        await Db.table(Env.get('tbl_config')).update({'scraping_status': scraping_status})
        this.scraping()
        const resp = {
            status  : scraping_status
        }
        return response.json(resp)
    }

    async scraping(){
        let loop_laporan = true
        let page = 1
        while (loop_laporan) {
            const status = await this.cekStatus()
            loop_laporan = status['status']
            if(page<status['page']){
                page = status['page']
            }
            if(loop_laporan==true){
                var url = "https://www.lapor.go.id/laporan?page="+page
                const html = await axios.get(url, {
                    headers: {
                        Cookie: "user_auth=eyJpdiI6IjZLVVF1aVlldkNRVmRwYnh4RU9aQmc9PSIsInZhbHVlIjoiS2VDdzB0ZDlOWTJUYVZJeTJTY0VVcVNqbEYrc2VsMWpMMkZ1b0p3d3pQOEFHNGpWd3ViXC9QK05TU2I4YnJzNG9OMDVLRmRXd0NZQUZ5c21IUVZ1c1VubFhHbmp4TGJaOFcrZlJhSlREaGc0U0FTeWRUVXE0TE9uQ1B3bnlUV1NOIiwibWFjIjoiZDdlMTg0OGUyYzZkNmE2ZTZlYTBjODhlMmU5MmRhNjkzZTA1YTI3ODFlZjcxNjdhZmI4NmI2OGJhN2RkYWQ4NSJ9;"
                    }
                }).then(html => {
                    page ++
                    return html
                })
                
                await Db.table(Env.get('tbl_config')).update({'scraping_page': page})
        
                const $ = await cheerio.load(html.data);
                const data_laporan = [];
        
                $('.infinite-item').each((i, elem) => {
                    data_laporan.push({
                        lapor_id: ($(elem).find('.complaint-meta .info-id').text()).trim(),
                        user_pelapor: ($(elem).find('.text-user').text()).trim(),
                        instansi_laporan: ($(elem).find('.complaint-track-body a').text()).trim(),
                        channel_laporan: ($(elem).find('.text-channel').text()).trim(),
                        judul_laporan: ($(elem).find('.complaint-title').text()).trim(),
                        isi_laporan: ($(elem).find('.complaint-excerpt .readmore').text()).trim(),
                        url_laporan: ($(elem).find('.complaint-title a').attr('href')).trim(),
                        tgl_laporan: ($(elem).find('.meta-date').text()).trim()
                    })
                })

                if(data_laporan.length>0){
                    for (let i = 0; i < data_laporan.length; i++) {
                        const laporan = data_laporan[i];
                        var tgl_laporan = laporan.tgl_laporan
                        if(tgl_laporan.includes("2019") || tgl_laporan.includes("2018") || tgl_laporan.includes("2017") || tgl_laporan.includes("2016") || tgl_laporan.includes("2015")){
                            let isAvailable = await Db.table(Env.get('tbl_scraping_dataset')).where({lapor_id: laporan.lapor_id}).getCount()
                            if(isAvailable==0){
                                await Db.table(Env.get('tbl_scraping_dataset')).insert(laporan)
                            }
                        }
                    }
                }else{
                    await Db.table(Env.get('tbl_config')).update({'scraping_status': false})
                }
            } 
        }
    }

    async remove({response,request}){
        const req = request.all()
        
        const where = {
            _id    : req['_id']
        }
        await Db.table(Env.get('tbl_scraping_dataset')).where(where).delete()
        const resp = {
            status  : true,
            message : "Berhasil menghapus data"
        }
        return response.json(resp)
    }

}

module.exports = ScrapingDatasetController
