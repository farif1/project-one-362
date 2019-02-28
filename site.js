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
