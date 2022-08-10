export class Quiz{
    constructor(listQuestion){
        // console.log(listQuestion);
        this.listQuestion = listQuestion;
        this.amountQuestion = listQuestion.length;
        document.getElementById('totalAmount').innerHTML = this.listQuestion.length;
        this.currentElement = document.getElementById('current');
        this.questionElement = document.getElementById('question');
        this.rowAnswerElement = document.getElementById('rowAnswer');
        this.nextBtn = document.getElementById('next');
        this.tryAgain = document.getElementById('tryBtn');
        this.score = 0 ;
        this.currentQuestion = 0 ;
        this.nextBtn.addEventListener('click' , this.checkAnswer.bind(this));
        this.showQuestion();
    }
    checkAnswer(){
        let correctAnswer = this.listQuestion[this.currentQuestion].correct_answer;
        let allanswers =Array.from(document.getElementsByName('answers'));
        let userAnswer = allanswers.filter(el=>el.checked)[0].value;
        console.log(userAnswer);
        if(userAnswer == correctAnswer){
            $('#Correct').fadeIn(700 , function(){
                $('#Correct').fadeOut(700)
            })
            this.score++;
        }else{
            $('#inCorrect').fadeIn(700 , function(){
                $('#inCorrect').fadeOut(700)
            })
        }
        this.currentQuestion++;
        if(this.currentQuestion >= this.amountQuestion)
        {
            $('#quiz').slideUp(1000 , function(){
                $('#finish').fadeIn(1000);
            });
            let h = document.getElementById('totalAmount').innerHTML = this.listQuestion.length;
            document.getElementById('score').innerHTML = this.score + ' From ' + h;
        }
        else
        {
            this.showQuestion();
        }
        this.tryAgain.addEventListener('click',function(){
            $('#finish').fadeOut(1000 , function(){
                $('#setting').fadeIn(1000);
            });
        })
    }
    showQuestion(){
        this.currentElement.innerHTML = this.currentQuestion+1;
        this.questionElement.innerHTML = this.listQuestion[this.currentQuestion].question;
        let allAnswers = [this.listQuestion[this.currentQuestion].correct_answer , ...this.listQuestion[this.currentQuestion].incorrect_answers];
        // console.log(allAnswers);
         allAnswers = this.shuffle(allAnswers);
         let cartona = '';
         for (let i = 0; i < allAnswers.length; i++) {
           cartona += `
                    <div class="form-check">
                            <input type="radio" name="answers" value="${allAnswers[i]}" class="form-check-input" />
                            <label class="form-check-label">${allAnswers[i]}</label>
                     </div>
           `
         }
         this.rowAnswerElement.innerHTML = cartona;
    }
    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }

}
