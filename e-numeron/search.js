function increaseQuery(t){
 var tr = document.createElement('tr');
 var td1 = document.createElement('td');
 var in1 = document.createElement('input');
 in1.type = "text"; in1.size = "4";
 td1.appendChild(in1);
 tr.appendChild(td1);
 var td2 = document.createElement('td');
 var in2 = document.createElement('input');
 in2.type = "text"; in2.size = "1";
 td2.appendChild(in2);
 tr.appendChild(td2);
 var td3 = document.createElement('td');
 var in3 = document.createElement('input');
 in3.type = "text"; in3.size = "1";
 td3.appendChild(in3);
 tr.appendChild(td3);
 var td4 = document.createElement('td');
 var btn1 = document.createElement('button');
 btn1.type = "button";
 btn1.innerText = "+";
 btn1.onclick = function(){ increaseQuery(btn1) };
 td4.appendChild(btn1);
 tr.appendChild(td4);
 var td5 = document.createElement('td');
 var btn2 = document.createElement('button');
 btn2.type = "button";
 btn2.innerText = "-";
 btn2.onclick = function() { decreaseQuery(btn2) };
 td5.appendChild(btn2);
 tr.appendChild(td5);
 var this_tr = t.parentNode.parentNode;
 this_tr.parentNode.insertBefore(tr, this_tr.nextSibling);

 var buttons = this_tr.parentNode.getElementsByTagName('button');
 for(var i = 0; i < buttons.length; i++){
  buttons[i].disabled = false;
 }
}

function decreaseQuery(t){
 var this_tr = t.parentNode.parentNode;
 var buttons = this_tr.parentNode.getElementsByTagName('button');
 if( buttons.length == 4 ){
  buttons[1].disabled = true;
  buttons[3].disabled = true;
 }
 this_tr.parentNode.removeChild(this_tr);
 updateConsole();
}

function queries(){
 var inputs = document.getElementById('query').getElementsByTagName('input');
 var result = [];
 var error = [];
 for (var i = 0; i < inputs.length; i += 3){
  var word = inputs[i].value;
  if(eNumeron.valid(word) !== true){ error.push(i); }
/*  if(! /^[A-Za-z]{4}/.test(word) ){
   error.push(i);
  } else {
   for(var j = 0; j < 4; j++){
    for(var k = 0; k < j; k++){
     if( word[k] == word[j] ){ error.push(i); j = 4; break; }
    }
   }
  }
*/
  var eat = inputs[i+1].value;
  if(! /^[0-4]$/.test(eat) ){ error.push(i+1); }
  var bite = inputs[i+2].value;
  if(! /^[0-4]$/.test(bite) ){ error.push(i+2); }
  if( error.length == 0){
   result.push([word.toLowerCase(), parseInt(eat), parseInt(bite)]);
  }
 }
 if( error.length == 0){
  return result;
 } else {
  error.unshift("error"); return error;
 }
}

function runSearch(dict, query){
 var a = dict;
  for(i = 0; i < query.length; i++){
   var q = eNumeron.pack(query[i][0]);
   var b = (query[i][1]<<4)|(query[i][2]);
   a = a.filter(word => eNumeron.eatbite(q, eNumeron.pack(word)) == b);
 }
 return a;
}

function alphabetTable(words){
 var d = []; var w = [];
 for(i = 0; i < 4; i++){
  d[i] = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,
            n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
  w[i] = words.forEach(x => d[i][x[i]] += 1);
 }
 return d;
}
function formatTable(d, a){
 var table = document.createElement('table');
 table.className = "stat";
 var header = document.createElement('tr');
 var th1 = document.createElement('td'); header.appendChild(th1);
 var th2 = document.createElement('td');
 th2.innerText = "1st"; header.appendChild(th2);
 var th3 = document.createElement('td');
 th3.innerText = "2nd"; header.appendChild(th3);
 var th4 = document.createElement('td');
 th4.innerText = "3rd"; header.appendChild(th4);
 var th5 = document.createElement('td');
 th5.innerText = "4th"; header.appendChild(th5);
 var th6 = document.createElement('td');
 th6.innerText = "sum"; header.appendChild(th6);
 table.appendChild(header);
 for(var i = 0; i < a.length; i++){
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  td1.innerText = a[i]; tr.appendChild(td1);
  for(var j = 0; j < 4; j++){
   var td = document.createElement('td');
   td.innerText = d[j][a[i]]; tr.appendChild(td);
  }
  var sum = document.createElement('td');
  sum.innerText = d[0][a[i]] + d[1][a[i]] + d[2][a[i]] + d[3][a[i]];
  tr.appendChild(sum);
  table.appendChild(tr);
 }
 return table;
}

function updateConsole(){
 var query = queries();
 if( query[0] != "error" ){
  var a = runSearch(dictCEFRJ, query);
  var console1 = document.getElementById('console1');
  var pl1 = (a.length > 1) ? "s" : "";
  console1.innerText = "> Usual: " + a.length + " word" + pl1;
  if (a.length <= 500){
   var list1 = document.createElement('p');
   list1.className = "list";
   list1.innerText = a.join(" ");
   console1.appendChild(list1);
  }
  var table_a = alphabetTable(a);
  var stat1 = document.createElement('div');
  stat1.id = "stat1";
  stat1.appendChild(formatTable(table_a, "abcdefg"));
  stat1.appendChild(formatTable(table_a, "hijklmn"));
  stat1.appendChild(formatTable(table_a, "opqrstu"));
  stat1.appendChild(formatTable(table_a, "vwxyz"));
  console1.appendChild(stat1);

  var b = runSearch(dictAll, query);
  var console2 = document.getElementById('console2');
  var pl2 = (b.length > 1) ? "s" : "";
  console2.innerText = "> All: " + b.length + " word" + pl2;
  if (b.length <= 500){
   var list2 = document.createElement('p');
   list2.className = "list";
   list2.innerText = b.join(" ");
   console2.appendChild(list2);
  }
  var table_b = alphabetTable(b);
  var stat2 = document.createElement('div');
  stat2.id = "stat2";
  stat2.appendChild(formatTable(table_b, "abcdefg"));
  stat2.appendChild(formatTable(table_b, "hijklmn"));
  stat2.appendChild(formatTable(table_b, "opqrstu"));
  stat2.appendChild(formatTable(table_b, "vwxyz"));
  console2.appendChild(stat2);

 } else {
  /* queries are not valid, do nothing */
 }
}

function initConsole(){
  var console1 = document.getElementById('console1');
  console1.innerText = "> Usual: " + dictCEFRJ.length + " words";
  /* console1.innerText += "\n" + dictCEFRJ.join(" "); */
  var table_a = alphabetTable(dictCEFRJ);
  var stat1 = document.createElement('div');
  stat1.id = "stat1";
  stat1.appendChild(formatTable(table_a, "abcdefg"));
  stat1.appendChild(formatTable(table_a, "hijklmn"));
  stat1.appendChild(formatTable(table_a, "opqrstu"));
  stat1.appendChild(formatTable(table_a, "vwxyz"));
  console1.appendChild(stat1);

  var console2 = document.getElementById('console2');
  console2.innerText = "> All: " + dictAll.length + " words";
  /* console2.innerText += "\n" + dictAll.join(" "); */
  var table_b = alphabetTable(dictAll);
  var stat2 = document.createElement('div');
  stat2.id = "stat2";
  stat2.appendChild(formatTable(table_b, "abcdefg"));
  stat2.appendChild(formatTable(table_b, "hijklmn"));
  stat2.appendChild(formatTable(table_b, "opqrstu"));
  stat2.appendChild(formatTable(table_b, "vwxyz"));
  console2.appendChild(stat2);
}

window.oninput = function(e){
 updateConsole();
}

window.onload = function(e){
 initConsole();
}