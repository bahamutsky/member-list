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
		 Date : '25-08-2015 09:00:00'
	 }
];
var IdNumber = 1;	 

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

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
		Date: created.getDate() + "-" 
			+ addZero((created.getMonth() + 1)) + "-" 
			+ created.getFullYear() + " "
			+ addZero(created.getHours()) + ":"
			+ addZero(created.getMinutes()) + ":"
			+ addZero(created.getSeconds())
		};
		//bio.push(data);
		bio.splice(0,0,data);
		this.profile = {};
	};
	
	this.deleteMember = function(delMember){
		 bio.splice(delMember,1);	
	}
	
});




})();