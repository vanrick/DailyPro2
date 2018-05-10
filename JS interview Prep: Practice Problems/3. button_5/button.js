console.log('im here');

function createButtons() {
    for (var i = 1; i <= 5; i++) {
        const body = document.getElementsByTagName("BODY")[0];
        const button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        (function(num) {
            button.onclick = function() {
                alert('This is button ' + i);
            }
        })(i); //perserves the I in the scope of the iffe
        body.appendChild(button);
    }
}
createButtons();


// or add a seperate functions and add into the creatButtons
// function

// function createButtons() {
//     for (let i = 1; i <= 5; i++) {
//         const body = document.getElementsByTagName("BODY")[0];
//         const button = document.createElement("BUTTON");
//         button.innerHTML = 'Button ' + i;
//         addClickFunctionality(button, i)
//         body.appendChild(button);
//     }
// }

// function addClickFunctionality(button, num) {
//     button.onclick = function() {
//         alert('This is button ', +num);
//     }
// }




//using the ES6 let keyword. Let keyword is blocked scoped instead of function scoped
// function createButtons() {
//     for (let i = 1; i <= 5; i++) {
//         const body = document.getElementsByTagName("BODY")[0];
//         const button = document.createElement("BUTTON");
//         button.innerHTML = 'Button ' + i;
//         button.onclick = function() {
//             alert('This is button ' + i);
//         }
//         body.appendChild(button);
//     }
// }
// createButtons();