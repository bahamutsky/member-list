xdescribe('script.js Tests', function() {
    it('should be able to run with \'karma run\'', function() {
        expect(true).toBeTruthy();
    });
});

xdescribe('KlDevMembersController Test', function() {
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
	
	describe('Adding data into the array Test', function(){
		it('Append the array', function(){
			var controllerRead = $controller('KlDevMembers', {});
			var controllerAdd = $controller('MemberController', {});
			var data = {
				Name: 'Test',
				Email: 'test@mail.com',
				Phone: '012-3456789',
				};
			controllerAdd.profile = data;
			controllerAdd.addMember();
			expect(controllerRead.profiles[1].Name).toEqual('Test');
		});
	});
	
	describe('Remove data from the array Test', function(){
		it('Delete the array', function(){
			var controllerRead = $controller('KlDevMembers', {});
			var controllerDel = $controller('MemberController', {});
			var data = 
			{
				Name: 'Test',
				Email: 'test@mail.com',
				Phone: '012-3456789',
			 }
			 controllerDel.deleteMember();
			 expect(controllerRead.profiles.length).toEqual(1);
		});
	});
});