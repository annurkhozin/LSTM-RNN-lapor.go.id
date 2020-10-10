var current_page = null
var sammyApp = $.sammy(function() {
    
    function view(data){
        document.title = stripHtmlTags(data['title'])
        $('body').html(data['html'])
        $('.current-page h4').html(data['title'])
        
    }

    this.get('#/', function(context) {
        context.redirect('#/apps?page=beranda');
    });
    this.notFound = function(context){
        $.ajax({
            url: "error",
            method:"GET",
            cache:false,
            success:function(resp){
                view(resp)
            }, error: function (err) {
                
            }
        })
    }

    this.get('#/apps', function(context) {
        var page = this.params['page'];
        current_page = page
        $.ajax({
            url: page,
            method:"GET",
            cache:false,
            success:function(resp){
                view(resp)
            }, error: function (err) {
                message("error","Pastikan koneksi internet anda terhubung")
            }
        })
    });

  });

$(function() {
    sammyApp.run('#/')
});

function stripHtmlTags(str){
   if ((str===null) || (str==='')){
       return false;
    }else{
        str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }
}

function downloadJsonFile(model,nameFile){
    var date = new Date()
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", nameFile+"-"+date.getTime() + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function jsonToExcel(xlsRows,fileName){

    var date = new Date()
    var createXLSLFormatObj = [];
    var xlsHeader = ["No", "Kelas Target","Kelas Prediksi","Nilai Prediksi", "Isi Laporan"];
    createXLSLFormatObj.push(xlsHeader);
    $.each(xlsRows, function(index, value) {
        var innerRowData = [];
        $(".tbl-download tbody").append('<tr><td>' + value.no + '</td><td>' + value.kelas_target + '</td><td>' + value.kelas_prediksi + '</td><td>' + value.nilai_prediksi + '</td><td>' + value.isi_laporan + '</td></tr>');
        $.each(value, function(ind, val) {
            innerRowData.push(val);
        });
        createXLSLFormatObj.push(innerRowData);
    });


    /* File Name */
    var filename = fileName+"-"+date.getTime()+".xlsx";

    /* Sheet Name */
    var ws_name = "Data Testing";

    // if (typeof console !== 'undefined') console.log(new Date());
    var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

    /* Add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);

    /* Write workbook and Download */
    // if (typeof console !== 'undefined') console.log(new Date());
    XLSX.writeFile(wb, filename);
    // if (typeof console !== 'undefined') console.log(new Date());
    $('.tbl-download').html("")
}

localStorage.setItem("callServerStatus",false)
var meta = document.createElement('meta');
    meta.name = "referrer";
    meta.content = "no-referrer";
    document.getElementsByTagName('head')[0].appendChild(meta);
    window.onbeforeunload = function() {
        return "";
     };
     