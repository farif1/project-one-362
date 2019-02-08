(function(){
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){

  });

  var tel_input = document.querySelector('#telephone');
  tel_input.addEventListener('focus', function(){
    console.log('The label is in focus');
  });

}());
