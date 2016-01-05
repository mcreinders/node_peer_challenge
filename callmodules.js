/**
 * Created by user on 1/5/16.
 */
var random_number = require('./random_number');
var makedollars = require('./makedollars');

var randomToDollars = function(min, max){
    return makedollars(random_number(min, max));
};

var accountBalDisp = function(){
    return "Account Balance: ";
};

exports.randomDollars = randomToDollars;
exports.acctBalDisplay = accountBalDisp;
