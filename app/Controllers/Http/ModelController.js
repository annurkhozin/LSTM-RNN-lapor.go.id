'use strict'
const unzipper = use('unzipper')
var fs = use('fs-extra')
const Klasifikasi = use('App/Controllers/Http/KlasifikasiController')

class ModelController {

    async index({view,response}){
        const resp = {
            status  : true,
            title   : "Model Klasifikasi",
            html   : view.render('klasifikasi.model')
        }
        return response.json(resp)
    }

    async upload({request,response}){  
        const fileModel = request.file('file', {
            types: ['zip'],
            // size: '2mb'
          })
          await fileModel.move('./public/tmp-model', {
            name: 'upload-model.zip'
          })
        
          if (!fileModel.moved()) {
            return fileModel.error()
          }else{
            try {
                await fs.createReadStream('./public/tmp-model/upload-model.zip').pipe(unzipper.Extract({ path: './public/tmp-model/training-model' }));
                await fs.unlink('./public/tmp-model/upload-model.zip', (err) => {
                    if (err) throw err;
                })
                try {
                    return response.json({status:true})
                } catch(err) {
                    return err
                }
            } catch (err) {
                await fs.unlink('./public/tmp-model/upload-model.zip', (err) => {
                    if (err) throw err;
                });
                return response.status(504).json(err.message)
            }
        }
    }

    async setAsCurrentModel({response}){
        await fs.copy('./public/tmp-model/training-model', './public/model/current-model', fs.copy('./public/tmp-model/training-model', './public/model/current-model', console.error ));
        await Klasifikasi.setAsCurrentModel()
        const resp = {
            status:true
        }
        return response.json(resp)
    }

}

module.exports = ModelController
