(function(){
var app = angular.module('app.memberList', []);

app.controller('KlDevMembers', function(){
	 this.profiles = bio;
 });

var bio = [
	 {
		 Id: '1',
		 Name: 'Gin',
		 Email: 'gin@mail.com',
		 Phone: '012-2911560',
		 Date : '25-8-2015'
	 }
];
var IdNumber = 1;	 


app.controller("MemberController", function(){
	this.profile = {};
	
	this.addMember = function(){
		var created = new Date();
		IdNumber++;
		var data = {
		Id : IdNumber,
		Name : this.profile.Name,
		Email : this.profile.Email,
		Phone: this.profile.Phone,
		Date: created.getDate() + "-" + (created.getMonth() + 1) + "-" + created.getFullYear()
		};
		bio.push(data);
		this.profile = {};
	};
	
	this.deleteMember = function(delMember){
		 bio.splice(delMember,1);	
	}
	
});




})();