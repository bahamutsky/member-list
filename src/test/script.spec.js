describe('script.js Tests', function() {
    it('should be able to run with \'karma run\'', function() {
        expect(true).toBeTruthy();
    });
});

describe('KlDevMembersController Test', function() {
	beforeEach(module('app.memberList'));
	
	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	describe('read global array', function(){
		it('read the global array to store member list', function(){
			var controller = $controller('KlDevMembers', {});
			expect(controller.profiles[0].Name).toEqual('Gin');
		});
	});
});

describe('MemberController Test', function(){
	beforeEach(module('app.memberList'));
	
	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	var testData = {
				Name: 'Test',
				Email: 'test@mail.com',
				Phone: '012-3456789',
				};
	
	describe('Adding data into the array Test', function(){
		it('Append the array', function(){
			var controllerRead = $controller('KlDevMembers', {});
			var controllerAdd = $controller('MemberController', {});
			controllerAdd.profile = testData;
			controllerAdd.addMember();
			expect(controllerRead.profiles[0].Name).toEqual('Test');
		});
	});
	
	describe('Remove data from the array Test', function(){
		it('Delete the array', function(){
			var controllerRead = $controller('KlDevMembers', {});
			var controllerDel = $controller('MemberController', {});
			controllerDel.deleteMember(controllerRead.profiles[0]);
			expect(controllerRead.profiles.length).toEqual(1);
			expect(controllerRead.profiles[0].Name).toEqual('Gin');
		});
	});
});