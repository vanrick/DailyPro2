What is a closure?
Code out an example

//JS variables can belong to the local or global scopes. Global variables can be made local (private) with closures.
i.e.
function localVariable(){
    let counter = 0;
    return counter++
} << the counter in this values in this function is private and will only return 0 if invoked multiple times.

//A closure is a function that has access to the "global" or parent scope even after the parent function has closed and it has access to all variables and parameters. 

const globalVariable = 'global var';

function outterFunc(param1){ //this is the closure
    const variable1 = 'var one';
    function innerFunc(param2){
        const variable = 'var two';
        console.log('globalVariable: ',globalVariable);
        console.log('variable1: ',variable1);
        console.log('variable2: ',variable2);
        console.log('param1: ',param1);
        console.log('param2: ',param2);
        
    }
    innerFunc('param one');
}

outterFunc('param two')