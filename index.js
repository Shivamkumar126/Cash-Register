var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message")
var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes=[2000, 500, 100, 20 , 10, 5, 1]

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}
function calculateChange(amountToBeReturned){
    for(let i = 0; i < availableNotes.length; i++){
        var numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function validateBillAmountAndCashAmount(){
     message.getElementsByClassName.display = "none";

    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)
        }
        else{
            showMessage("the cash provided should be atleast equal to the bill amount");
    }
    
    }else{
        showMessage("Invalid bill amount")
    }
} 



checkButton.addEventListener("click", validateBillAmountAndCashAmount)