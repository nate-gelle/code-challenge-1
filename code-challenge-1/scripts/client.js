console.log('JS');

$(document).ready(onReady);

elements = [];

function onReady(){
  console.log('JQ');
  $('#generateButton').on('click', makeDiv);
}

let i=0;
function makeDiv(){
  console.log('generate button clicked');
  i++;
  // add a div to the array to be appended to DOM later
  elements.push('<div><button class="swap" id= swap"' +i+ '"' +' '+ '>Swap</button><button class="delete" id= delete"' +i+ '"' +' '+ '>Delete</button><p>' +i+ '</p></div>');
  // create a variable to target output element
  let interface = $('#interface');
  // empty output element
  interface.empty();
  //
  // for (i=0; i<elements.length; i++){
  //
  // }
  interface.append(elements);
  $('.delete').on('click', removeDiv);
  $('.swap').on('click', changeColor);
}

function removeDiv(){
  $(this).parents('div').first().remove();
}

function changeColor(){
  console.log('in change color');
  $(this).parents('div').toggleClass("yellow");
}
