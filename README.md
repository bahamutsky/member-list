#ST Dev KL's Member List
The quick way for us to evaluate your AngularJS skill

## Requirements
- Github Account
- [Node.js](https://nodejs.org/download/)
- [bower](http://bower.io/)

## Instructions
- Ensure that npm and bower are installed.
- Fork this repository and clone your fork into your local environment.
- Run the following commands to install all the dependencies:

```sh
npm install
bower install
```

## Dependencies
- [AngularJS](https://angularjs.org/)
- [Grunt](http://gruntjs.com/)
- [Karma](http://karma-runner.github.io/)

## User Stories

### Add member information
```
As a user
I want to add member information
So that the table will have the list of all members.
I will specify required information of their name, email, and telephone number
And those infomation will appear on the first row
along with unique ID number, current date, and time.
```

### Remove member information
```
AS a user
I want to remove member information
So that the member will be removed from the table
I will click on DELETE button at selected row
And the row will be removed from the table.
```

## Implementation

### Files
- [index.html](index.html)
- [src/script.js](./src/script.js)
- [src/styles.css](./src/styles.css)
- Feel free to add more files if necessary.

### Automated unit test
- Implement automated unit test in [src/test/script.spec.js](./src/test/script.spec.js)
- If you have more than one Javascript files please add `.spec.js` for it as well.

### Executing the test
Run `grunt test`.

### Libraries
- You are allowed to add more libraries to have a working application and a more presentable layout.
- Install respective library with bower:

```
bower install <library-name> --save
```

## Submit Your Work
Please submit through Github Pull Request.
