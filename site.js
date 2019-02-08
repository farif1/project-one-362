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
  tel_input.addEventListener('keyup', function(){
    console.log('The value of #telephone is', this.value);
    var clean_number = this.value.replace(/\D/g,'');
    var actual_number = clean_number.replace(/^1/,'');
    
  });

}());
