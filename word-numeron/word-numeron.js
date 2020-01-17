/*
 global variables
 */
var packed_answer = [0,0];
var attack_counter = 0;
var field = [
 document.getElementById('in0'),
 document.getElementById('in1'),
 document.getElementById('in2'),
 document.getElementById('in3')
];

var attack_button = document.getElementById('attack');
var board = document.getElementById('board');

attack_button.addEventListener("click", attack);

/*
 eat&bite calculator
 */
function bitcounter(b){
 var c = (b&0x55555555)+((b&0xAAAAAAAA)>>1);
 c = (c&0x33333333)+((c&0xCCCCCCCC)>>2);
 c = (c&0x0F0F0F0F)+((c&0xF0F0F0F0)>>4);
 c = (c&0x00FF00FF)+((c&0xFF00FF00)>>8);
 c = (c&0x0000FFFF)+((c&0xFFFF0000)>>16);
 return c;
}

function pack(word){
 const a = "a".charCodeAt();
 var b_eat = word.charCodeAt(0)<<24|word.charCodeAt(1)<<16|word.charCodeAt(2)<<8|word.charCodeAt(3);
 var b_bite = 1<<(word.charCodeAt(0)-a)|1<<(word.charCodeAt(1)-a)|1<<(word.charCodeAt(2)-a)|1<<(word.charCodeAt(3)-a);
 return [b_eat, b_bite];
}

function eat_bite(word){
 var a = pack(word);
 var p = packed_answer;
 var x = a[0]^p[0];
 var eat = ((x&0xff)?0:1) + (((x>>8)&0xff)?0:1) + (((x>>16)&0xff)?0:1) + (((x>>24)&0xff)?0:1);
 var bite = bitcounter(a[1]&p[1]) - eat;
 return [eat, bite];
}

/*
 input behavior
 */

function keydown(e, next, prev){
 switch(e.code){
  case "Enter":
   var i = is_ready();
   if( i != 0 ){
    field[i-1].focus();
    break;
   }
   attack();
   break;
  case "ArrowLeft":
   document.getElementById(prev).focus();
   break;
  case "ArrowRight":
   document.getElementById(next).focus();
   break;
  case "Backspace":
   e.target.value = "";
   document.getElementById(prev).focus();
   break;
  case "Tab":
   if(e.shiftKey){
    document.getElementById(prev).focus();
   } else {
    document.getElementById(next).focus();
   }
   break;
  default:
   if(/^[A-Za-z]$/.test(e.key)){
    e.target.value = e.key;
    document.getElementById(next).focus();
    if(is_ready() == 0){
     attack_button.disabled = false;
    }
    else {
     attack_button.disabled = true;
    }
    break;
   }
   return;
 }
 e.preventDefault();
 return;
}

function focus_to(id){
 document.getElementById(id).focus();
}

/*
 game procedure
 */
function is_ready(){
 /*  0 : ready
   >0 : not ready */
 var char = [
  field[0].value,
  field[1].value,
  field[2].value,
  field[3].value
 ];
 for(var i = 0; i < 4; i++){
  if(! /^[A-Za-z]$/.test(char[i])){
   return i+1;
  }
  for(var j = 0; j < i; j++){
   if(char[j] == char[i]){
    return i+1;
   }
  }
 }
 return 0;
}

function get_word(){
 return [
  field[0].value,
  field[1].value,
  field[2].value,
  field[3].value
 ].join("").toLowerCase();
}

function attack(){
 attack_counter += 1;
 var word = get_word();
 var [eat, bite] = eat_bite(word);
 board.innerText = attack_counter + ':"' + word + '" ' + eat + 'eat ' + bite + 'bite\n' + board.innerText;
 if (eat == 4) {
  window.getSelection().removeAllRanges();
  attack_button.style.display = "none";
  for(var i = 0; i < 4; i++){
   field[i].disabled = true;
  }
  create_next_button();
 } else {
  field[0].focus();
 }
 return;
}

function create_next_button(){
 var next = document.createElement("button");
 next.id = "next";
 next.type = "button";
 next.innerText = "next game";
 next.addEventListener("click", start_new_game);
 board.parentNode.insertBefore(next, board.nextSibling);
}

function remove_next_button(){
 var next_button = document.getElementById("next");
 if(next_button != null){
  next_button.parentNode.removeChild(next_button);
 }
}

function start_new_game(){
 packed_answer = pack(dict[Math.floor(Math.random() * dict.length)]);
 attack_counter = 0;
 attack_button.style.display = "inherit";
 for(var i = 0; i < 4; i++){
  field[i].value = "";
  field[i].disabled = false;
 }
 board.innerText = "";
 remove_next_button();
 field[0].focus();
}

start_new_game();
