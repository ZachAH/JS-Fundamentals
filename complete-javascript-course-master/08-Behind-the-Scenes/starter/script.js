'use strict';

// arrow functions

var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        //console.log(this);
        console.log(2037- this.year);

        const self = this; // self or thatgit
        const isMillenial = function() {
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();
