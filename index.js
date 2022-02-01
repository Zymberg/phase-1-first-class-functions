
const chai = require("chai");


function receivesAFunction(callback){
    return callback()
}

receivesAFunction(spy);




function returnsANamedFunction(){
    return receivesAFunction;
}


function returnsAnAnonymousFunction(){
    return function(){
        console.log('no name')
    }
}



