function multiplyByTwo(x) {
    if (x > 100) {
        // skapa eget error
        throw new Error("Sorry x cannot be greater than 100.");
    }

    return x * 2;
}

// fanga varat egna error.
try {
    const result = multiplyByTwo(101);
} catch(e) {
    console.log("could not run multiplyByTwo.");
}