var button = document.getElementById('randomPassButton')
var randomPass = document.getElementById('randomPass')
var copytoclipboard = document.getElementById('copyToClipboard')
var lowercase_letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
var uppercase_letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
var numbers_limiters = [...Array(10).keys()].map(i => i);
var special_characters = ['?','!',',',';','%','^','<','>','+','-','=','*',"#","&",'.','@','$','£']
var limitersObj = [
    lowercase_letters,
    uppercase_letters,
    numbers_limiters,
    special_characters
]

function generateRandomPassword() {
    const lowercaseRegex = new RegExp("[a-z]", 'g');
    const uppercaseRegex = new RegExp("[A-Z]", 'g');
    const specialRegex = new RegExp("\\W", "g");
    const numberRegex = new RegExp("[0-9]", 'g')

    var passwordLength = parseInt(document.getElementById('password_length').value)
    var password_min_numbers = parseInt(document.getElementById('min_number_amount').value)
    var password_min_lowercase_characters = parseInt(document.getElementById('min_lowercase_character_amount').value)
    var password_min_uppercase_characters = parseInt(document.getElementById('min_uppercase_character_amount').value)
    var password_min_special_characters = parseInt(document.getElementById('min_special_character_amount').value)
    var isPasswordValid = false

    var sum = password_min_numbers+password_min_lowercase_characters+password_min_special_characters+password_min_uppercase_characters
    randomPass.innerHTML = "";
    if (sum > passwordLength) {
        alert("Minimum amounts exceed password length. Please retry.")
    }else{
        while(!isPasswordValid){
            var randomPassStr = ""
            for (let index = 0; index < passwordLength; index++) {
                var choice = limitersObj[Math.floor(limitersObj.length*Math.random())]
                randomPassStr+=choice[Math.floor(choice.length*Math.random())]
            }
            if(randomPassStr.match(numberRegex) && randomPassStr.match(lowercaseRegex) && randomPassStr.match(uppercaseRegex) && randomPassStr.match(specialRegex)){
                var nb_count = randomPassStr.match(numberRegex).length;
                var low_count = randomPassStr.match(lowercaseRegex).length;
                var upp_count = randomPassStr.match(uppercaseRegex).length;
                var spe_count = randomPassStr.match(specialRegex).length;
                if(nb_count >= password_min_numbers && low_count >= password_min_lowercase_characters && upp_count >= password_min_uppercase_characters && spe_count >= password_min_special_characters){
                    isPasswordValid = true
                    randomPass.innerHTML+=randomPassStr
                    copytoclipboard.style.display = 'block'
                }
            }
        }
    }
}

function copyToClipboard() {
    var r = document.createRange();
    r.selectNode(randomPass);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    navigator.clipboard.writeText(randomPass.innerHTML);
    window.getSelection().removeAllRanges();
    copytoclipboard.innerHTML = "Copied!"
    setTimeout(() => {
        copytoclipboard.innerHTML = "Copy To Clipboard"
    }, 1000);
}