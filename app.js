
let chek = document.querySelector("#yes");
chek.addEventListener("click", function (evennt) {
    evennt.preventDefault();
    let val = document.querySelector("#name_input").value;
    let lasst = document.querySelector("#last_input").value;
    let agge = document.querySelector("#age_input").value;
    let passports = document.querySelector("#passport_input").value;
    let exchange = document.querySelector("#ex_input").value;
    let exchanged = exchange * 11000;
    if (val != null && lasst !=null && agge !=null && passports !=null && exchange !=null) {
        document.querySelector("#namee").innerHTML = "User first name: " +  val;
        document.querySelector("#last").innerHTML = "User last name: " + " " +  lasst;
        document.querySelector("#age").innerHTML = "User age: " + " " +  agge;
        document.querySelector("#passport").innerHTML = "User passport series: " + " " +  passports;
        document.querySelector("#ex").innerHTML = "User exchange: " + " " +  exchanged;
    }
}
)


// //number input && select && output
// var start = document.querySelector(".start"); 
// start.addEventListener("click", function(eve) {
//     eve.preventDefault();
//     var alisher = parseInt(prompt("Salom Alisher! Sarmoyangiz miqdorini kiriting: "));
//     var airTicket = 500;
//     var hotel = 250;
//     var relax = 120;

//     var airTicketSum = 500 * 10918; //5.459.000 so'm
//     var hotelSum = 250 * 10918; //2.729.000 so'm
//     var relaxSum = 120 * 10935; //1.312.200 so'm
//     var sum = airTicketSum + hotelSum + relaxSum;

//     if (alisher >= sum) {
//         console.log("Oq yo'l Alisher!\n\nSayohatga ketadigan umumiy harajatlar: \n" + "Samolyot bileti (borish/kelish): " + airTicketSum + " so'm" +   "\nMehmonxona harajatlari: " + hotelSum + " so'm" + "\nKo'chaga ketadigan harajat: " + relaxSum + " so'm\nJami: " + sum + "so'm");
//     } else {
//         console.log("Alisher, ozgina sab qilish kerak bo'lar ekan.\nSizning pul miqdoringiz: " + alisher + " so'm ekan.\n" +  "Samolyot bileti uchun(borish/kelish): " + airTicketSum + " so'm" + "\nMehmonxona harajatlari uchun: " + hotelSum + " so'm" + "\nKo'chaga ketadigan harajat uchun: " + relaxSum + " so'm\nJami: " + sum + " so'm kerak bo'ladi." );
//     }

// })


var elForm = document.querySelector("#form");
var elInput = document.querySelector("#exchange");
var elSelect = document.querySelector("#select");
var fromSelect = document.querySelector("#fromselect");
var text = document.querySelector(".ressult");
elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var elInputValue = parseInt(elInput.value);
    var elFromSelectValue = parseInt(fromSelect.value);
    var elSelectValue = parseInt(elSelect.value);
    var firstSelect = fromSelect.options[fromSelect.selectedIndex].text;
    var secondSelect = elSelect.options[elSelect.selectedIndex].text;
    var elResult = (elInputValue * elSelectValue) / elFromSelectValue;
    text.textContent = elResult.toFixed(2) + " " + firstSelect;
    var elResultt = (elInputValue * elFromSelectValue) /elSelectValue;
    text.textContent = elResultt.split(" ").toFixed(2) + secondSelect;
})



var game = document.querySelector(".game");
var shans = 6;

var random = Math.floor(Math.random() * 101)
game.addEventListener("click", function(evtt) {
    evtt.preventDefault();
    
    while (shans != 0) { 
        var num = Number(prompt("Enter random number: "));
        if (num == random) {
            alert(`Ura! Siz topdingiz. Qidirilayotgan son - ${random}`);
            break;
        } else if (num > random ) {
            shans -=1;
            alert("Kiritgan soningiz, taxminiy sondan katta\n Sizda " + shans + " ta urinish qoldi.");
        } else if ((num - 5) == random || (num + 5) == random){
            shans -=1
            alert("Yaqinlashvossiz... Shunday davom eting :) \nSizda " + shans + "ta urinish qoldi.")
        } else {
            shans -=1;
            alert("Kiritgan soningiz, taxminiy sondan kichkina\nSizda " + shans + "ta urinish qoldi.");
            
        }
        if (shans == 0) {
            alert("Oooops! Sizning urinishlariz tugadi.")
        }
    }
})
