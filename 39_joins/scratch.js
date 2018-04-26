var cities = [
    { id: 1, name: "Denver", state_id: 1 },
    { id: 2, name: "Milwaukee", state_id: 3 },
    { id: 9, name: "Pella", state_id: 9 },
    { id: 4, name: "Jasper", state_id: 7 },
    { id: 11, name: "Greenville", state_id: 10 },
    { id: 8, name: "West Lafayette", state_id: 7 },
    { id: 45, name: "Chicago", state_id: 22 }
]

var states = [
    { id: 1, name: "Colorado" },
    { id: 3, name: "Wisconsin" },
    { id: 9, name: "Iowa" },
    { id: 7, name: "Indiana" },
    { id: 22, name: "Illinois" },
    { id: 10, name: "South Carolina" }
]

function fk(fk) {
    let result;
    let keysOnly = Object.keys(fk);
    for (let i = 0; i < fk.length; i++) {
        const val = Object.keys(fk[i]);
        console.log(fk[i].id);
        result = fk[i]
    }
    console.log(result);

    return result
}
fk(states)

function join(left, right, fk, pk, newKey) {

}

join(cities, states, fk, )