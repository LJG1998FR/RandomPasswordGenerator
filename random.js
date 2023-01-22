var button = document.getElementById('randomPassButton')
var randomPass = document.getElementById('randomPass')
var lowercase_letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
var uppercase_letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
var numbers_limiters = [...Array(10).keys()].map(i => i);
var special_characters = ['?','!',',',';','%','^','<','>','+','-','=','*',"#","&"]
var limitersObj = [
    lowercase_letters,
    uppercase_letters,
    numbers_limiters,
    special_characters
]
button.addEventListener('click', function(){
    randomPass.innerHTML = "";
    for (let index = 0; index < 16; index++) {
        var choice = limitersObj[Math.floor(limitersObj.length*Math.random())]
        randomPass.innerHTML+=choice[Math.floor(choice.length*Math.random())]
    }
})