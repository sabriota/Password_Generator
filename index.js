let password1 = document.getElementById("pw1-el");
let password2 = document.getElementById("pw2-el");
let buttonGen = document.getElementById("generate-el");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



buttonGen.addEventListener("click", function() {
    let pw1 = generatePW ();
    let pw2 = generatePW ();
    password1.textContent = pw1;
    password2.textContent = pw2;
});


function generatePW (){
    let password = ""
     for(let i = 0; i < 16;i++) {
        let randomNumber = Math.floor(Math.random()*characters.length)
        password +=characters[randomNumber];
      
     }
     return password
}

console.log(generatePW())