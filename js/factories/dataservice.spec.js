describe('DataService factory', function() {
  var dataObj;

  // Load our api.users module
  beforeEach(angular.mock.module('turtleFacts'));

  // Set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_DataService_) {
    dataObj = _DataService_;
  }));

  // A simple test to verify the Users service exists
  it('should exist', function() {
    expect(dataObj).toBeDefined();
  });

  // A set of tests for our Users.all() method
  describe('quizQuestions()', function() {
    // A simple test to verify the method all exists
    it('should exist', function() {
      expect(dataObj.quizQuestions).toBeDefined();
    });
	
	// A test to verify that calling all() returns the array of users we hard-coded above
    it('should return a hard-coded list of api', function() {
      expect(dataObj.quizQuestions()).toEqual(quizQuestions);
    });
  });
  
});