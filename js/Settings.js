import { Quiz } from './Quiz.js';


export class Settings{
    constructor(){
        this.categoryElement = document.getElementById('category');
        this.difficultyElement = Array.from(document.getElementsByName('difficulty'));
        this.NumberElement = document.getElementById('numOfQuestions');
        this.startBtn = document.getElementById('startBtn');
        this.startBtn.addEventListener('click' , this.getData.bind(this)); // .bind(this) يعني استني لما زيس يتنفذ وبعد كده نفذ الفنكشن
    }
    async getData(){
        if(this.NumberElement.value >= 0 && this.NumberElement.value != ''){
            let category = this.categoryElement.value;
            let NumberElement = this.NumberElement.value;
            let difficulty = this.difficultyElement.filter(function(e){return e.checked == true})[0].value;
    
            let urlApi = `https://opentdb.com/api.php?amount=${NumberElement}&category=${category}&difficulty=${difficulty}`;
    
            let myResults = await this.fetchApi(urlApi);
            // console.log(myResults);
            $('#formAlert').fadeOut(1000);
            $('#setting').slideUp(1000 , function(){
                $('#quiz').slideDown(1000);
            });
            
           new Quiz(myResults);

        }else{
            $('#formAlert').fadeIn(1000);
        }
     
        
    }
    async fetchApi(url){
        let responseData = await fetch(url);
        let myResult = await responseData.json();
        // console.log(myResult.results);
        return myResult.results;
    }
}

