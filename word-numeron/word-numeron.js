/*
 global variables
 */
var packed_answer = [0,0];
var attack_counter = 0;
var attack_button = undefined;
var board = undefined;
var next_button = undefined;
var field = [];

function init(){
 attack_button = document.getElementById('attack');
 attack_button.addEventListener("click", attack);
 board = document.getElementById('board');
 next_button = document.getElementById('next');
 next_button.addEventListener("click", start_new_game);
 field = [
  document.getElementById('in0'),
  document.getElementById('in1'),
  document.getElementById('in2'),
  document.getElementById('in3')];
 field[0].addEventListener("keydown",function(e){
  keydown(e, field[1], field[3]);
 });
 field[1].addEventListener("keydown",function(e){
  keydown(e, field[2], field[0]);
 });
 field[2].addEventListener("keydown",function(e){
  keydown(e, field[3], field[1]);
 });
 field[3].addEventListener("keydown",function(e){
  keydown(e, field[0], field[2]);
 });
}

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
  case "Tab":
   if(e.shiftKey){
    prev.focus();
   } else {
    next.focus();
   }
   break;
  case "ArrowLeft":
   prev.focus();
   break;
  case "ArrowRight":
   next.focus();
   break;
  case "Backspace":
   e.target.value = "";
   prev.focus();
   break;
  case "Enter":
   var i = is_ready();
   if( i != 0 ){
    field[i-1].focus();
    break;
   }
   attack();
   break;
  default:
   if( /^[A-Za-z]$/.test(e.key) ){
    e.target.value = e.key;
    next.focus();
    break;
   }
   return;
 }
 if(is_ready() == 0){
  attack_button.disabled = false;
 } else {
  attack_button.disabled = true;
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
 var char = [
  field[0].value,
  field[1].value,
  field[2].value,
  field[3].value
 ];
 for(var i = 0; i < 4; i++){
  if(! /^[A-Za-z]$/.test(char[i]) ){
   return i+1; /* field[i] is not ready */
  }
  for(var j = 0; j < i; j++){
   if( char[j] == char[i] ){
    return i+1; /* field[i] is not ready */
   }
  }
 }
 return 0; /* ready */
}

function attack(){
 attack_counter += 1;
 var word = [
  field[0].value,
  field[1].value,
  field[2].value,
  field[3].value ].join("").toLowerCase();
 var [eat, bite] = eat_bite(word);
 board.innerText = attack_counter + ':"' + word + '" ' + eat + 'eat ' + bite + 'bite\n' + board.innerText;
 if (eat == 4) {
  window.getSelection().removeAllRanges();
  attack_button.style.display = "none";
  for(var i = 0; i < 4; i++){
   field[i].blur();
   field[i].disabled = true;
  }
  next_button.style.display = "block";
 } else {
  field[0].focus();
 }
 return;
}

function start_new_game(){
 packed_answer = pack(dict[Math.floor(Math.random() * dict.length)]);
 attack_counter = 0;
 attack_button.disabled = true;
 attack_button.style.display = "inherit";
 for(var i = 0; i < 4; i++){
  field[i].value = "";
  field[i].disabled = false;
 }
 board.innerText = "";
 next_button.style.display = "none";
 field[0].focus();
}

window.onload = function(){
 init();
 start_new_game();
}
