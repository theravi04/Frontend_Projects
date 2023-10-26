'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
//Math.random will generate the number between 0 and 1 when multiplied with 20 will generate number between [1.00,19.999] when trunc function is used it will remove decimals and +1 will include 20 in it
let score=20;
let HighScore=0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    //the value of guess is initially string so we convert it to perform calculations on it
    //here addEventListner is used for what function should be executed if click event occurs 
    
     
    //when there is no input
    if(!guess){
        //i.e. if the no value passed it is considered to be zero so we do not want it like this way so we do
       // document.querySelector('.message').textContent='no number ⛔' ;  to make it dry we use displayMessage function everywhere in code

       displayMessage('no number! ⛔');
    }

    //when player wins
    else if(guess===secretNumber){
        displayMessage('🎉 correct number')
        document.querySelector('.number').textContent= secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347' ;
        document.querySelector('.number').style.width = '30rem';
        if(score>HighScore){
            HighScore=score;
            document.querySelector('.highscore').textContent = HighScore;
        }
    }

    //when guess is too high
 /*   else if(guess>secretNumber){
        if(guess>1){
           document.querySelector('.message').textContent='📈 too high';
           score--;
           document.querySelector('.score').textContent= score;
        }
        else{
            document.querySelector('.message').textContent='😥 you lose';
            document.querySelector('.score').textContent= 0;
        }
    }

    //when guess is too low
    else if(guess<secretNumber){
        if(guess>1){
            document.querySelector('.message').textContent='📉 too low';
            score--;
            document.querySelector('.score').textContent= score;
         }
         else{
             document.querySelector('.message').textContent='😥 you lose';
             document.querySelector('.score').textContent= 0;
         }
    }
*/


//the above two codes are almost same except too high or too low which voilates the dry code principle

//lets make it more efficient
    else if(guess !== secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ? '📈 too high' : '📉 too low')
            score--;
            document.querySelector('.score').textContent= score;
        }
       else{
        displayMessage('😥 you lose');
        document.querySelector('.score').textContent= 0;

       }
    }
 });

//setting functionality of again button
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.score').textContent=score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent= '?';
    document.querySelector('body').style.backgroundColor = '#222' ;
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = '';
})