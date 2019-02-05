(function(){
if (!('querySelector' in document && 'addEventListener' in document)) {
  return;
}

document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is loaded');
  var heading_text = document.querySelector('#content h1').innerText
  console.log('The heading text is:' heading_text);
});
}());
