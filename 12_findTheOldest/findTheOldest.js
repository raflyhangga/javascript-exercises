const findTheOldest = function(people) {
    let age = people.sort((personBefore,personAfter) => {
        if(!personBefore.yearOfDeath) {
            personBefore.yearOfDeath = new Date().getFullYear();
        }
        if(!personAfter.yearOfDeath) {
            personAfter.yearOfDeath = new Date().getFullYear();
        }


        let ageBefore = personBefore.yearOfDeath - personBefore.yearOfBirth;
        let ageAfter = personAfter.yearOfDeath - personAfter.yearOfBirth;

        if (ageBefore > ageAfter) {
            return -1;
        } else {
            return 1;
        }
    })

    return age[0];
};

// Do not edit below this line
module.exports = findTheOldest;
