
describe('array.prototype.toStringNew()', function () {
  var test_array = [0, 1, function(){}, "a", ];
  //var arext = toString(test_array);
  var result = arext;
  var arext= test_array.toStringNew();
  it("This method must take the contents of the Array and return a string of the contents of that array but should check for functions and null and exclude them from the returned value.", function() {
   expect(true).to.be(true);
    expect(arext).to.not.be.a(null);
    expect(arext).to.not.be.a('function');
    expect(arext).to.equal.a("01a");

  });
/*describe('array.prototype.forEach()', function () {
  var test_array = [1,4,5,6,8,9];
  var arpfe = test_array.forEach();
  it("This method must take a function as an argument and call that function against each element in the Array.", function() {
    expect(arpfe).to.be('function');
    expect(arpfe).to.be.a.instanceof(true);
  });
  it("taken your array functions that you wrote in ArrayFun and add them to the Array.prototype", function() {
   expect().to.be.equal();
  });
 });*/
});
//});
//toString - 

//forEach - 

//EXTRA -
