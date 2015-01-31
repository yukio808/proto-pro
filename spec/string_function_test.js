describe('array.prototype.wtf to have', function () {
  it("This method must return the value 'wtf' for any given context.", function() {
    var test = "I see you";

    expect(test.wtf()).to.be.a('string');
    expect(test.wtf()).to.be.equal("wtf");
  });
  describe('array.prototype.scramble', function (){
    it("This method must return the contents of the string in the current context in a mixed up order.", function() {
      var test2 = "yah no this is going to be more scrambled than my overeasy eggs over rice in the morning";
      var result = test2.scramble();

      expect(result).to.be.a('string');
    });
    describe('array.prototype.trim', function(){
      it("This method must return the contents of the string with no leading or trailing spaces.", function() {
        expect().to.be.equal([]);

      });    
    });
  });
});