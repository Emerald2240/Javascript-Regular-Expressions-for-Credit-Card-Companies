// This program checks for the 10 most popular credit card companies and matches their card numbers
// Visa, Mastercard, Verve, Citi, Chase, American Express, Capital One, Bank of America, Wells Fargo, Barclays

var screenDisplay = document.getElementById('screen');
var cardNumberInput = document.getElementById('cardNumber');

//Below are the regex patterns. Their explanations can be found in the readme file
const regexMasterCard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/g;

const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/g;

const regexVerve = /^((506(0|1))|(507(8|9))|(6500))[0-9]{12,15}$/g;

const regexDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}$/g;

const regexAmericanExpress = /^3[47][0-9]{13}$/g;

// This function takes the users input then tests it through the 5 regex patterns. If it finds a match it returns the card company name to the screen.
function showCardType(cardNumber) {
    let cardType = "Unknown"

    if (regexMasterCard.test(cardNumber)) {
        cardType = "Master Card";
        screenDisplay.innerHTML = cardType;
        return true;
    }
    if (regexVisa.test(cardNumber)) {
        cardType = "VISA Card";
        screenDisplay.innerHTML = cardType;
        return true;
    }
    if (regexVerve.test(cardNumber)) {
        cardType = "Verve Card";
        screenDisplay.innerHTML = cardType;
        return true;
    }
    if (regexDiscover.test(cardNumber)) {
        cardType = "Discover Card";
        screenDisplay.innerHTML = cardType;
        return true;
    }

    if (regexAmericanExpress.test(cardNumber)) {
        cardType = "American Express Card";
        screenDisplay.innerHTML = cardType;
        return true;
    }

    screenDisplay.innerHTML = cardType;
}



