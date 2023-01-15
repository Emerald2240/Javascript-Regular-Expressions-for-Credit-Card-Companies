# javascript regex for the five top credit card companies


## Regular Expressions
A regular expression (shortened as regex or regexp; sometimes referred to as rational expression) is a sequence of characters that specifies a search pattern in text. Usually such patterns are used by string-searching algorithms for "find" or "find and replace" operations on strings, or for input validation.


# Credit Card Numbers and Their Regex Descriptions

## 1) MasterCard: ^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/g

* ^ represents the starting of the string.
* 5[1-5] represents the first two-digit number may range from 51 to 55.
* [0-9]{14} represents the next fourteen digits should be any between 0-9.
* | represents the or.
* ( represents the start of the group.
* 222[1-9] represents the first four-digit number may range from 2221 to 2229.
* | represents the or.
* 22[3-9]\\d represents the first four-digit number that may range from 2230 to 2299.
* | represents the or.
* 2[3-6]\\d{2} represents the first four-digit number may range from 2300 to 2699.
* | represents the or.
* 27[0-1]\\d represents the first four-digit number may range from 2700 to 2719.
* | represents the or.
* 2720 represents the first four-digit may start with 2720.
* ) represents the ending of the group.
* [0-9]{12} represents the next twelve digits should be any between 0-9.
* $ represents the ending of the string.


## Visa: ^4[0-9]{12}(?:[0-9]{3})?$

* 