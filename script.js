var textarea = document.querySelector('textarea');
var text = textarea.value;

document.querySelector('#saveButton').addEventListener('click', function() {
 localStorage.setItem('text', textarea.value);  
});  

if (localStorage.getItem('text')) {
 textarea.value = localStorage.getItem('text');   
}

document.querySelector('#clearButton').addEventListener('click', function() {
 localStorage.removeItem('text');  
 textarea.value = '';    
});

var textarea = document.querySelector('textarea');

window.onload = function() {
  textarea.focus();
  textarea.selectionStart = 0;
  textarea.selectionEnd = 0; 
}