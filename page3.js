


function page3(){

background(23,106,102);

rectMode(CORNER);fill(20,90,110);
rect(0,0,230,height);
up.Draw();
down.Draw();
realTime.Draw();

if(ypos1 != lastYpos1){
for(var h= 0; h< num.length;h++){
num[h] ="";
}

//$("canvas")[0].getContext('2d').clearRect(0,0,width,height);
lastYpos1= ypos1;}

 voting = firebase.database().ref('voting');
voting.on('value',input,errData);

 function input(data){
   if (dataIn == false){
    votingDay = data.val();
  votingKeys = Object.keys(votingDay);
  console.log(votingKeys);
//textloc =  Keys.length -5;

  for(let i = 0 ; i < votingKeys.length;i++){

    var kk = votingKeys[i];
kalfiData[i] = votingDay[kk].kalfi;
number[i] = votingDay[kk].number;

console.log(kalfiData);
}}dataIn = true;

};


function errData(err){
  console.log(err);
}



if(countbzb == true){
   for(let i = 0; i< keys.length; i++){
     if(statuss[i]=="תומך" || statuss[i]== "מתנדב"){
     var d = Kalfi[i]/10;
         bzbcount[d]++;
      }  countbzb = false;

}
}
textSize(26);
if(realTime_data== true){
for(let i = 0 ; i < votingKeys.length;i++){
for(let j = 0 ; j < getKalfi.length;j++){
    if(kalfiData[i]== getKalfi[j]){votingCount[j]++;}

}}

}realTime_data = false;


fill(250,40,25);//strokeWeight(2);
for(let t= 0; t< votingKeys.length; t++){
stroke(10);
text(votingCount[t],width- 220,110+(t*40)-(ypos1*40));
}


fill(217,179,16);textAlign(RIGHT);stroke(217,179,16);
for(let i= 1; i< 48;i++){
text( bzbcount[i] +"             " +i*10 ,width - 30 ,70  + (i*40)-(ypos1*40));
}
fill(45);
rect(300,80,500,400);
//fill(217,179,16);
for(let i = 0; i< keys.length; i++){
for(let j = 0; j< 4; j++){
  if(Kalfi[i]== getKalfi[ypos1]){
  if(statuss[i]=="תומך" || statuss[i]== "מתנדב"){
   num[i]  = Serial[i];
//append(num, Serial[i]);
text(Family[i] + "   "+Name[i]+"      "+ Phone[i],width-580,110);

   }
}}
}

textAlign(RIGHT);
for(let r = 0; r< num.length;r++){
for(let j = 0; j< 4; j++){
  if(num[r] != "!"){
setPosY++;
text(getKalfi[ypos1],width-1000,110);
text(num[r],width-920,110+(setPosY*40));}
//text(getKalfi[ypos1],600,200);
text(setPosY,600,300);
if(r == 1){ setPosY = 0;}
}}setPosY = 0;

fill(120,10,10);rect(230,0,width-230,60);
fill(255);
 text("קלפי",width-25,40);
 text("מספר\n תומכים",width-95,30);
 text("כמה\n הצביעו",width-200,30);

//console.log(voting);

}
