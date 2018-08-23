var found = false;

function Search(){


  var str = "radheShyam";


if(keyIsDown(DOWN_ARROW) && roll < index){roll+=5;}
if(keyIsDown(UP_ARROW) && roll > 1){roll-=5;}
if(keyIsDown(BACKSPACE)){message[6]="";}
//console.log(newStr);

if(clear.MouseIsOver()){if(mouseIsPressed){run = 0; index = 0;
  message[6] = "";show = false;Results[roll] = 0;roll = 0;}}

 if(message[6].length == 0){run = 0; index = 0;
  Results[roll] = 0;roll = 0;show = false;}

  for(var i = 0;i< 18;i++){
    fill(65);
    rect(500,80+(i*60),width-500,30);
  }

  //if(searchFeild == 'סטטוס'){  text(searchFeild,400,200);}

   if(message[6] != ""){

  for(let x = 0; x < keys.length;x++){
      if(searchFeild == 'קלפי'){container1[x]= Kalfi[x];  bzb = x;}
else  if(searchFeild == 'סטטוס'){container1[x]= statuss[x];}
else  if(searchFeild == 'רחוב'){ container1[x]= Street[x];}
else  if(searchFeild == 'כתובת_מלאה'){ container1[x]= fullAdd[x];}
else  if(searchFeild == 'משפחה'){ container1[x]= Family[x];}
else  if(searchFeild == 'שם'){container1[x]= Name[x];}


 textSize(22);fill(217,179,16);
 fill(35);rect(500,140  ,width-500,30);



//text(container1[x],300,300+ (x*30));
//console.log("in    "+container1[x]);

  if(container1[x] == message[6] ){

if(run < 1){index++;}
Results[index]=parseInt(raw[x]);

}
}
}
if(limit == 1){if(index> 10){ limit1 = index - 10;}else limit1 = 0;}
else if(limit == 2){if(index> 50){limit1 = index - 50;}else limit1 = 0;}
else if(limit == 3){limit1 = 0;}
textAlign(RIGHT); textSize(24); fill(217,179,16);
for(var i = 1; i< index- limit1; i++){
//  console.log(i+":   "+Results[i]);}

text(i,width-20,155+(i*30)+(-roll*30));
text(Id[Results[i]],width-50,155+(i*30)+(-roll*30));
text(Family[Results[i]],width-160,155+(i*30)+(-roll*30));
text(Name[Results[i]],width-260,155+(i*30)+(-roll*30));
text(fullAdd[Results[i]],width-370,155+(i*30)+(-roll*30));
text(Phone[Results[i]],width-530,155+(i*30)+(-roll*30));
text(Kalfi[Results[i]],width-670,155+(i*30)+(-roll*30));
text(statuss[Results[i]],width-750,155+(i*30)+(-roll*30));

if(mouseX > 500 && mouseY > 140 && mouseY< 170){
if(mouseIsPressed){
inputData[0]= Id[Results[roll]];
inputData[1]= Family[Results[roll]];
inputData[2]= Name[Results[roll]];
inputData[3]= Street[Results[roll]];
inputData[4]= Kalfi[Results[roll]];
inputData[5]= Phone[Results[roll]];
inputData[6]= Age[Results[roll]];
inputData[7]= statuss[Results[roll]];
inputData[8]= Gender[Results[roll]];
inputData[9]= contactMen[Results[roll]];
inputData[10]= when[Results[roll]];
inputData[11]= transporting[Results[roll]];
inputData[12]= innerCircul[Results[roll]];
inputData[13]= actions[Results[roll]];
inputData[14]= email[Results[roll]];

page = 1;

 }}
//text(raw[x],width-700,120+(x*30));
  run =1;
}
if(roll<1 ){roll = 1;}
//text(Family[Results[roll]],300,50+(roll*30));
fill(120,40,70);
rect(231,0,width-231,60);
textSize(60);fill(217,179,16);textAlign(CENTER);

}
