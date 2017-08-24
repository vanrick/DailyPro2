function regexPWValidation(password){
  if (password.length < 6) {
    console.log('password must be more then 6 characters');
  }else if (Number.isInteger(Number(password.split('').join(''))) === true) {
    console.log('password must have at least 1 number');
  }

  
}

regexPWValidation('asfewvas eg1')
