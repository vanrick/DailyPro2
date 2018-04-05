function millenialBob(convo) {
    let response = ''
        // for (let i = 0; i < convo.length; i++) {
    if (convo[convo.length - 1] === '!') {
        response += 'Whoa, chill out!'
    } else if (convo[convo.length - 1] === '?') {
        response += 'Sure.'
    } else {
        response += 'Whatever.'
    }
    // }
    console.log(response);
    return response
}

millenialBob('hi bobby! how are you.')