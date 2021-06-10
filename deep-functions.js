function A() {
    try {
        throw new Error("Woopsie!");
    } catch(e) {}

    return 1;
}

function B() {
    return A();
}

function C() {
    return B();
}

function D() {
    return C();
}

const result = D();

console.log(result);