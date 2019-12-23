//Lecture 56. Using const with Arrays

// The array can be changed as long as the reference is the same.
// We can changed because we're not updating or altering this
// reference.
const myEggs = ['brown','brown'];
myEggs[0] = 'amazing';
myEggs.push('nice!');

// We cant changed the reference, like this:
/*
    myEggs = ['brown','pink']; (ERRO)

*/