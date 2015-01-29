//1 . Write a series of functions on the this.prototype that implement the following functionality.
Array.prototype.toStringNew = function () {
  var retthis = [];
  var catres = "";
  for(i = 0; i < this.length; i++)
    if (this[i] !== typeof 'function' || this[i] !== typeof null){
      retthis.push(this[i]);
      catres = catres.concat(retthis);
    }
    return catres;
};
//toString - This method must take the contents of the array and return a string of the contents of that this but should check for functions and null and exclude them from the returned value.

//forEach - This method must take a function as an argument and call that function against each element in the this.

//EXTRA - Take your this functions that you wrote in thisFun and add them to the this.prototype.





//4 . EXPLORE!! WRITE 3 OF YOUR OWN PROTOTYPE FUNCTIONS THAT ARE TESTABLE AND FUNCTIONAL. ALSO, CHALLENGE YOURSELF. DON'T DO SOMETHING TO JUST GET IT DONE.
