var eNumeron = {
 valid: function(word){
  var err = new Set([]);
  for(var i = 0; i < 4; i++){
   if(! /^[A-Za-z]$/.test(word[i]) ){ err.add(i); }
  }
  for(var i = 0; i < 4; i++){
   for(var j = 0; j < i; j++){
    if(word[j] == word[i]){ err.add(j); }
   }
  }
  if(! /^[A-Za-z]{4}$/.test(word) ){ err.add(false); }
  if(err.size == 0){
   return true;
  } else {
   return err;
  }
 },
 pack: function(word){
  const a = "a".charCodeAt();
  var w = word.split("").map(c => c.charCodeAt() - a);
  var eat = w[0]<<24 | w[1]<<16 | w[2]<<8  | w[3];
  var bite = 1<<w[0] | 1<<w[1] | 1<<w[2] | 1<<w[3];
  return [eat, bite];
 },
 eatbite: function(a, b){
  var x = a[0]^b[0];
      x = x&0x0F0F0F0F | (x&0xF0F0F0F0)>>4;
      x = x&0x03030303 | (x&0x0C0C0C0C)>>2;
      x = x&0x01010101 | (x&0x02020202)>>1;
  var eat = 4 - ((x>>24&1) + (x>>16&1) + (x>>8&1) + (x&1));
  var y = a[1]&b[1];
      y = (y&0x55555555) + ((y&0xAAAAAAAA)>>1);
      y = (y&0x33333333) + ((y&0xCCCCCCCC)>>2);
      y = (y&0x0F0F0F0F) + ((y&0xF0F0F0F0)>>4);
      y = (y&0x00FF00FF) + ((y&0xFF00FF00)>>8);
      y = (y&0x0000FFFF) + ((y&0xFFFF0000)>>16);
  var bite = y - eat;
  return (eat<<4)|bite;
 }
}