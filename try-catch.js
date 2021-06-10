function doSomething(x) {
    try {
        return new x();
    } catch(e) {
        return 20;
    }
}


const result = doSomething(function(){});

console.log(result);