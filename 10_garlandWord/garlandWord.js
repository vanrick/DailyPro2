//https://github.com/gSchool/DailyProgrammer
//10 Garland Word

// garland('programmer') //0
// garland('ceramic') //1
// garland('onion') //2
// garland('alfalfa') //4
// garland('hotshots') //4
// garland('abracadabra') //4
// garland('couscous') //4

function garland(input) {
    for (var i = input.length - 1; i > -1; i--) {
        if (input.substring(input.length - i) === input.substring(0, i)) {
            console.log(i);
            return i
        }
    }
}

garland('alfalfa')