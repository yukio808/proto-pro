
describe('array.prototype.toStringNew()', function () {
  it("This method must take the contents of the Array and return a string of the contents of that array but should check for functions and null and exclude them from the returned value.", function() {
    var test_array = [0, 1, function(){}, "a",null ];
    //var arext = toString(test_array);
    var result = arext;
    var arext = test_array.toStringNew();

    console.log(arext);
    expect(true).to.be.equal(true);
    // expect(arext).to.not.be.a(null);
    expect(arext).to.not.be.a('function');
    expect(arext).to.be.equal("01a");

  });
  describe('array.prototype.forEach()', function () {
    it("This method must take a function as an argument and call that function against each element in the Array.", function() {
      var test_array = [1,4,5,6,8,9,""];
      var result = [];
  
      test_array.forEach(function(value){
        console.log("ITS A FUNCTION OMG!!!!!!");
        result.push(value);
      });
    
      expect(Array.prototype.forEach).to.be.a('function');
      //expect(Array.prototype.forEach).to.be("ITS A FUNCTION OMG!!!!!!");
      expect(test_array).to.be.eql(result);
    });

  //  it("taken your array functions that you wrote in ArrayFun and add them to the Array.prototype", function() {
  //   expect().to.be.equal();
  //  });
  });
});
//toString - 

//forEach - 

//EXTRA -
