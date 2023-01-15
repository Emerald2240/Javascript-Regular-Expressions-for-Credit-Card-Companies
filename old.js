var screenDisplay = document.getElementById('screen');
var cardNumberInput = document.getElementById('cardNumber');
// screenDisplay.innerHTML = 'Lets Go.';

//This functions switch statement isnt working for some reason
function showCardType(cardNumber) {
    let cardType = "Unknown"
    // cardType = cardNumber % 7
    // screenDisplay.innerHTML = cardNumber;

    // switch (cardNumber) {
    //     case (cardNumber % 2) == 0:
    //         cardType = "Verve";
    //         break;
    //     case (cardNumber % 3) == 0:
    //         cardType = "Visa";
    //         break;
    //     case (cardNumber % 5) == 0:
    //         cardType = "Africard";
    //         break;
    //     case (cardNumber % 7) == 0:
    //         cardType = "Mastercard";
    //         break;

    //     default:
    //         console.log('inside switch. No match found');
    //         break;
    // }

   
        if ((cardNumber % 2) == 0){
            cardType = "Verve";
        }
        if ((cardNumber % 3) == 0){
            cardType = "Visa";
        }
        if ((cardNumber % 5) == 0){
            cardType = "Africard";
        }
        if((cardNumber % 7) == 0){
            cardType = "Mastercard";
        }

    screenDisplay.innerHTML = cardType;

}