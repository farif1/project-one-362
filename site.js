(function(){
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  function eq(value,condition) {
    return value === condition;
  }
