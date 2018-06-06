const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
// sort the array without the the an or a in front of the names
function bandSorter(array) {
    const bandz = array.ignore('The'.* ? 'An'.* ? 'A');
    const result = [];
    console.log(bandz);


    return result;
}
bandSorter(bands);