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

  function validate_email(value) {
    var email = whitespace(value);
    return validate(email,/^[^@\s]+@[^@\s]+$/g);
  }

  submit.setAttribute('disabled','disabled');

  document.addEventListener('DOMContentLoaded',function() {
    var form = document.querySelector('#form');
    var submit = document.querySelector('#submit');
    var input_email = document.querySelector('#email');

    form.addEventListener('keyup',function() {
      if (validate_email(input_email.value)) {
        submit.removeAttribute('disabled');
      } else {
        submit.setAttribute('disabled','disabled');
      }
    });
  });

}());
