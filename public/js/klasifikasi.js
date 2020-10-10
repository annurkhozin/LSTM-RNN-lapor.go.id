(function() {
    var Klasifikasi = (function() {
      var Klasifikasi = function() {
        var words = [];
        var dataset;
        var delay = 0;
        var word;
        var kelas = [];
        var word_sorting = [];
        var kelas_sorting = [];

        this.preDatasetSequence = (input)=>{
            dataset = input
            let length = dataset.length
            var length_words = []
            dataset.forEach(text => {
                setTimeout(function(){
                    length--
                    var dataset_text = text.teks
                    length_words.push(dataset_text.length)

                    var dataset_word = words.concat(dataset_text);
                    words = dataset_word
                    
                    var dataset_kelas = text.kelas
                    var dataset_class = kelas.concat(dataset_kelas);
                    kelas = dataset_class
                    
                    if(length==0){
                        dataset_max_length = Math.max(...length_words)
                        wordGroup()
                    }
                },delay)
            });
        }

        function wordGroup(){
            var word_s = {}
            var length = words.length
            words.forEach(element => {
                setTimeout(function(){
                    length--
                    var word_i = element
                    if(word_i in word_s) {
                        word_s[word_i] += 1;
                    }else {
                        word_s[word_i] = 1;
                    }
                    if(length==0){
                        word = word_s
                        wordSorting()
                    }
                },1)
            });
        }

        function wordSorting(){
            const objectArray = Object.entries(word);
            var length = objectArray.length
            let i = 0
            objectArray.forEach(([key, value]) => {
                setTimeout(function(){
                    word_sorting.push({
                        word: key,
                        jumlah: value
                    })
                    i++
                    if(length==i){
                        word_sorting.sort(function(a, b) {
                            return parseFloat(b.jumlah) - parseFloat(a.jumlah);
                        })
                        // word_sorting = word_sorting.slice(0,maks_kamus);
                        wordResponse()
                    }
                },delay)
            })
        }

        function wordResponse(){
            const word_sequence = []
            const word_frequency = []
            let word_sorting_length = word_sorting.length
            word_sorting.forEach(key => {
                setTimeout(()=>{
                    word_sorting_length--
                    word_sequence.push(key.word)
                    word_frequency.push(key.jumlah)
                    if(word_sorting_length==0){
                        generateSequenceTable(words,word_sequence,word_frequency)
                    }
                },delay)
            });      
        }

        this.kelasGroup=()=>{
            var kelas_s = {}
            var length = kelas.length
            kelas.forEach(element => {
                setTimeout(function(){
                    length--
                    var kelas_i = element
                    if(kelas_i in kelas_s) {
                        kelas_s[kelas_i] += 1;
                    }else {
                        kelas_s[kelas_i] = 1;
                    }
                    if(length==0){
                        kelas = kelas_s
                        kelasSorting()
                    }
                },1)
            });
        }

        function kelasSorting(){
            const objectArray = Object.entries(kelas);
            var length = objectArray.length
            objectArray.forEach(([key, value]) => {
                setTimeout(function(){
                    length--
                    kelas_sorting.push({
                        kelas: key,
                        jumlah: value
                    })
                    if(length==0){
                        kelas_sorting.sort(function(a, b) {
                            return parseFloat(b.jumlah) - parseFloat(a.jumlah);
                        })
                        kelasResponse()
                    }
                },delay)
            })
        }

        function kelasResponse(){
            const kelas_sequence = []
            const kelas_frequency = []
            let kelas_sorting_length = kelas_sorting.length
            kelas_sorting.forEach(key => {
                setTimeout(()=>{
                    kelas_sorting_length--
                    kelas_sequence.push(key.kelas)
                    kelas_frequency.push(key.jumlah)
                    if(kelas_sorting_length==0){
                        generateSequenceKelasTable(kelas,kelas_sequence,kelas_frequency)
                    }
                },delay)
            });      
        }
    
        this.splitDataset = (dataset,N_kflod)=>{
            function randomIndex(min, max) {  
                var random = Math.floor(
                    Math.random() * (max - min) + min
                )
                return random
            }

            var indexArray = []
            var label = []
            for (let i = 0; i < dataset.length; i++) {
                var loop = true
                while (loop) {
                    var index = randomIndex(0, dataset.length)
                    if(!indexArray.includes(index)){
                        indexArray.push(index)
                        let x = (dataset[index].kelas)-1
                        if(!label[x]){
                            label[x] = []
                        }
                        label[x].push(index)
                        loop = false
                    }
                }
            }
            
            var kfold = [];
            for (let k = 0; k < N_kflod; k++) {
                var kfold_i = []
                for (let i = 0; i < label.length; i++) {
                    const label_i = label[i];
                    var count_training_data = Math.round(((100/N_kflod)/100) * label_i.length)
                    var kfold_train_label = [];
                    var test_data = label_i.slice((count_training_data*k), (count_training_data*k)+count_training_data)
                    for (let y = 0; y < label_i.length; y++) {
                        if(!test_data.includes(label_i[y])){
                            kfold_train_label.push(label_i[y]);
                        }
                        
                    }
                    kfold_i.push([kfold_train_label,test_data])
                }
                kfold.push(kfold_i)
            }
            return kfold
        }
          
      };
      return Klasifikasi;
    })();
  
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
      module.exports = Klasifikasi;
    else
      window.Klasifikasi = Klasifikasi;
  })();
  