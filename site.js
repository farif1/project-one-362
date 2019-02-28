(function(){
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  function eq(value,condition) {
    return value === condition;
  }

  function whitespace(value) {
    return value.replace(/\s/g,'');
  }

  function validate(value,check,condition) {
    if (eq(typeof(check.test),'function')) {
      return check.test(value);
    } else if (eq(typeof(check),'function')) {
        return check(value,condition);
    } else {
        return false;
    }
  }
