function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
}
function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}

function Peporoni() {
    var Peporoni= 0;
    var addPeporoni = document.getElementById("toppingone");
    if (addPeporoni.checked === true) {
        Peporoni = 140;
    }
    return parseInt(sausage);
}
function OnionsAndTomato() {
    var OnionsAndTomato = 0;
    var addOnionsAndTomato = document.getElementById("toppingone");
    if (addOnionsAndTomato.checked === true) {
        OnionsAndTomato = 130;
    }
    return parseInt(OnionsAndTomato);
}
function BarbaqueSauce() {
    var BarbaqueSauce = 0;
    var addBarbaqueSauce = document.getElementById("toppingone");
    if (addBarbaqueSauce.checked === true) {
        BarbaqueSauce = 120;
    }
    return parseInt(BarbaqueSauce);
}
function MeltedCheese() {
    var MeltedCheese = 0;
    var addMeltedCheese = document.getElementById("toppingone");
    if (addMeltedCheese.checked === true) {
        MeltedCheese = 110;
    }
    return parseInt(MeltedCheese);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}



// Delivery form inputs and alerts



$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria.");
        // $(this).get(0).reset();
        //  event.preventDefault();
    });
 });
