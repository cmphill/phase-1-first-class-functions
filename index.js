
function receivesAFunction(callback) {
    callback();
    return callback;
}
function returnsANamedFunction() {
    function nameful() {
        console.log("I got a name.")
    }
    return nameful
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('nemo')
    }
    
}