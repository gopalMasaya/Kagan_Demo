
  var getData = false;
  var Keys=[];
  var textloc = 0;
  var pos = 1;

function page2(){

  if(keyIsDown(DOWN_ARROW)){pos+=1;console.log(pos);}
  if(keyIsDown(UP_ARROW)){pos-=1;console.log(pos);}
  if(pos < -5){pos =-5;}
  if(pos > Keys.length-5){pos = Keys.length - 5;}


  background(23,106,102);
  fill(20,90,110); rect(0,0,230,height);
  fill(120,40,70);
  rect(231,0,width-231,70);
  textSize(40);fill(217,179,16);
  text("גרפים",width/2+115,35);



      up.Draw();
      down.Draw();
    //  update_support.Draw();
     fill(120,50,70);
     line(500,300,500,200);
     line(400,500,800,500);



  if(update.MouseIsOver()){if(mouseIsPressed){saving = false;
  if(countbzb == true){
     for(let i = 0; i< keys.length; i++){
       if(statuss[i]=="תומך" || statuss[i]== "מתנדב"){  voteForUs ++;}
      else if(statuss[i]=="מתנגד"){  oppose ++;} else floating++;

}
}countbzb = false;
}
}
fill(120,40,70);stroke(217,179,16);
rect(width-205,150,190,350);
  fill(217,179,16);textSize(24);
text("בעד:    "+voteForUs+"  קולות", width- 115,350);
text("צפים:   "+floating+"  קולות", width-110,400);

//text("oppose  "+oppose, 400,400);
//text("floating  "+floating, 400,500);
  var  precnt = (voteForUs*100)/totalbzb;
  var Fprecent = (floating*100)/totalbzb;
     time = day()+"/"+month();
    // timepoint = append(timepoint,time);
var database = firebase.database();
var ref = database.ref('supportGraph');
var data ={
  time : time,
  support: voteForUs,
  oppose : oppose,
  floating: floating,
  precent : precnt
}

  if(save.MouseIsOver()){if(mouseIsPressed){
    if(saving == false){
     text("נתוני זמן אמת נשמרו", width - 150,230);
     ref.push(data);saving = true; getData = false;}}}


ref.on('value',Input,err);

 function Input(data){
   if (getData == false){
    graphData = data.val();

   Keys = Object.keys(graphData);
//  console.log(keys);
textloc =  Keys.length -5;

  for(let i = 0 ; i < Keys.length;i++){

    var k = Keys[i];
Time[i] = graphData[k].time;
pro[i] = graphData[k].support;
Floating[i]= graphData[k].floating;
Against[i]= graphData[k].oppose;
//last_p[i] =  graphData[k].precent;
//console.log(pro[k]);
}}getData = true;
};

function err(err){
  console.log(err);
}


  fill(200);
  rect(350,150,800,350);
for(var i = 150;i< 550;i+=50){

  stroke(45);line(350,i,1150,i);
}
     stroke(120,50,70);
     line(350,150,350,500);
     line(1150,150,1150,500);

     if(getData == true){

     for (let i =  Keys.length-1; i > Keys.length-7;i--){

     var t =  Keys.length;
     fill(255); textSize(16);

     var color1 = map(pro[i],0,30160,0,300);
     var color2 = map(Floating[i],0,30160,0,300);
     var color3 = map(Against[i],0,30160,0,300);
     textSize(18);
     text(Time[i],1130+(i*120)- (t*120),530);
     fill(50,color1/2,0);text(pro[i],1100+(i*120)-(t*120),480-color1);
    fill(color2/2,color3/2,0);text(Floating[i],1150+(i*120)-(t*120),480-color2);
     fill(color3/2,40,color1/2);text(Against[i],1180+(i*120)-(t*120),480-color3);

    fill(0,125,0); rect(1100+(i*120)-(t*120),500,30,-color1);
    fill(125,125,0); rect(1130+(i*120)-(t*120),500,30,-color2);
    fill(125,45,0); rect(1160+(i*120)-(t*120),500,30,-color3);

  }}



    textAlign(CENTER);
    fill(255);textSize(40);
     //text("גרף התקדמות ",width/2+80,40);



  // textFont(titleFont);
   text("מספר תומכים", width/2+105,80);
     fill(17,249,16); textSize(24);
   text("%"+nfc(precnt,2)+"  תמיכה",width-115,250);
      text("קולות צפים" +"  %"+nfc(Fprecent,2),width-110,300);



  update.Draw();save.Draw();


}
