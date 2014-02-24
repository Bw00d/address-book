describe('Contact', function() {
  describe('fullName', function() {
    it('combines first and last names separated by a space', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Bruce";
      testContact.lastName = "Springsteen";
      testContact.fullName().should.equal("Bruce Springsteen");
    });
  });
});
  
