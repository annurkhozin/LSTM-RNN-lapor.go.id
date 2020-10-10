(function() {
    var Preprocessing = (function() {
      var Preprocessing = function() {

        this.parseHtmlEnteties = function(str) {
            return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
                var num = parseInt(numStr, 10);
                return String.fromCharCode(num);
            });
        }

        this.caseFolding = function(teks) {
            const respon = teks.toLowerCase();
            return respon;
        }
             
        this.tokenizing = function (teks){
            const token = teks.split(/\s+/).filter(item => item);
            return token;   
        }

        this.stemming = function (kamus,kata){
            var respon = []
            var stemmer = new Stemmer(kamus)
            kata.forEach(kata => {
                respon.push(stemmer.stem(kata));        
            })
            return respon
        }

        function checkDomain(kata){
            var resp = kata
            const domain = ['.com','.id','.org','.me','.net','.tv','.info','.tv','.edu','.sch','.gov']
            domain.forEach(key => {
                if(kata.includes(key)){
                    resp = ""
                }
            });
            return resp
        }

        this.filteringWord =  function (slangword,kata_ganti, stopwords,teks){
            var respon = []
            teks.forEach(kata => {
                var kata = this.parseHtmlEnteties(kata);
                kata = kata.replace(/(www\.|http?|s?ftp)\S+/g,"");
                kata = checkDomain(kata);
                kata = kata.replace(/\S+@\S+/g,"");
                kata = kata.replace(/(@|#)\S+/g,"");
                kata = kata.replace(/&.*;/g,"");
                kata = kata.replace(/[^a-z\s]/g," ");
                kata = kata.replace(/\s+/g," ");
                kata = kata.trim().replace(/&nbsp;/g, '').replace(/<[^\/>][^>]*><\/[^>]+>/g, "");                
                if(kata){
                    kata = kata.split(" ");
                    kata.forEach(word => {
                        let indexOf = slangword.indexOf(word)
                        if( (indexOf>=0) && word){
                            word = kata_ganti[indexOf]
                        }
                        if(!stopwords.includes(word) && word){
                            respon.push(word)
                        }
                    });
                }
            });
            return respon
        }
        
      };
      return Preprocessing;
    })();
  
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
      module.exports = Preprocessing;
    else
      window.Preprocessing = Preprocessing;
  })();
