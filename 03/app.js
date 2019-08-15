var person = {
    firstname : 'Abdi',
    lastname : 'Sami',

    greet : function () {
        console.log('Hello ' + this.firstname + '  ' + this.lastname);
    }

};

person.greet();

//console.log(person['firstname']);
