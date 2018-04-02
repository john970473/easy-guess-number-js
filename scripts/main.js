window.onload = function(){
    var el = document.querySelector('h1');
    el.textContent = 'Guess Number Javascript';
}
window.onload = function(){
    var ans = Math.floor((Math.random() * 1000) + 1);;
    do{
        var num = Number(prompt('Please Guess a number from 1 to 1000'));
        if (num < ans){
            alert('It is too small');
        }
        else if (num > ans){
            alert('It is too big');
        }
        else{
          var el = document.querySelector('h1');
          el.textContent = 'Bingo!!';
        }
    }while (ans != num);
}
