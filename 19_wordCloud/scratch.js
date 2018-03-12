let nonJson = {
    "Ila Huels": [
        "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
        "brand sexy channels",
        "ENVISIONEER ROBUST E-COMMERCE",
        "TRANSFORM WIRELESS ARCHITECTURES",
        "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
    ],
    "Cristopher Feest": [
        "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
        "brand sexy channels",
        "BENCHMARK 24/7 PARADIGMS"
    ]
}

function jSonConverter(nonJson) {
    let result = {}
    let keyz = Object.keys(nonJson)
        // console.log(Object.keys(nonJson));

    for (let i = 0; i < keyz.length; i++) {
        // console.log(nonJson[keyz[i]]);
        let wordArrays = nonJson[keyz[i]];
        for (let j = 0; j < wordArrays.length; j++) {
            // console.log(wordArrays[j].split(' '));
            let individualsWords = wordArrays[j].split(' ');
            for (let k = 0; k < individualsWords.length; k++) {
                if (result[individualsWords[k]] && result[individualsWords[k]].people.indexOf() < 0) {
                    result[individualsWords[k]].count++
                        result[individualsWords[k]].people.push(keyz[i])
                } else {
                    result[individualsWords[k]] = {
                        count: 1,
                        people: [keyz[i]]
                    }
                }

            }
        }
    }
    console.log(result);

    return result

}

jSonConverter(nonJson)