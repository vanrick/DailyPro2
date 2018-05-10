function createButtons() {
    for (let i = 1; i < 5; i++) {
        const element = document.getElementsByTagName('BODY')[0];
        const button = document.createElement('BUTTON');
        button.innerHTML = 'Button ' + i;
        button.onclick = function() {
            alert('This is button ' + i);
        }
        body.appendchild(button);
    }
}
createButtons();

what happens when you click button 5.
examine the function above and figure out the answer.