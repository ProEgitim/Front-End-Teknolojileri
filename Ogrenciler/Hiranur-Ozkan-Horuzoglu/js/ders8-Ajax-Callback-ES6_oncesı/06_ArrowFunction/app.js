const person = {
    age: 25,
    // tellAge: function () {
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)
    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }// arrowfunction otomatik bind ediyor
}

person.tellAge();