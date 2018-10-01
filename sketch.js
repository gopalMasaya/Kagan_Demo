
// hosting url
//https://kagandb-fa427.firebaseapp.com/

//deploying command
// C:\Users\gopal\AppData\Roaming\npm\firebase init

//github
//‏

var button;
var bg;
var table;
var col;


var loc1 = 0;
var isOn1 =false;
var loc = 0;
var time;
var searchFeild={} ;
var searchFeild1 ;
var message = new Array(20)  ;


var num = 0;
var columCount = 0;
var textPos = 0;
var Wheel = 0;
var wheelPos = 0;
var wheelPos1 = 0;
var Cells = 0;
var supportnum = 0;
var Time = new Array(20);
var loaded = false;
var recive = false;
var show = false;
 var isOn = false;
 var countbzb = false;
 var Asending = false;


var count = 0;
 var x1,y1,w1,h1;
 var ypos =0;
 var mIndex = 0;
// color c= color(90);
 var wheel = 0;
  var Idr= 0;
 var lastId = 0;
 var page = 0;
 var rawCount = 0;
 var textPos1 = 0;
 var currentBzb = 0;
 var run = 0;
 var bzbIndex = new Array (30);
 var messagelength = 0;
  var inputData = new Array(30);
 var limit = 0;


var timepoint ={};
var positionX = 0;
var positionY = 0;

var lastId = 0;
var droplength = 0;
var index = 0;
var rawnum = 0;
var  names;
var run = 0;


var statuss_list = [["סטטוס"],["לא מזוהה"],[ "טלפון לא תקין"],["מתנדב" ],
["תומך" ],["מתלבט" ],["תומך באחר" ],["לא מצביע" ]];

var gen = [["ז"],["נ"]];
var keys = new Array (800);
var supporters = new Array (4000);

var Search = new Array (27000);
 var email = new Array(800);//0
 var Phone = new Array(800);//1
 var Id        = new Array(800);//2
 var Family    = new Array(800);//3
 var Name      = new Array(800);//4
 var Kalfi     = new Array(800);//5
 var Street    = new Array(800);//6
 var voteTo    = new Array(800);//7
 var toHelp    = new Array(800);//8
 var when = new Array(800);//9
 var rawNum    = new Array(800);//10
 var Age       = new Array(800);//11
 var innerCircul = new Array(800);//12
 var transporting = new Array(800);//13
 var Gender    = new Array(800);//14
 var contactMen = new Array(800);//15
 var actions = new Array(800);//16
 var statuss = new Array(800);//17
 var fullAdd = new Array(800);//17

  var container1 = new Array(800);
 var container2 = new Array(800);
 var raw = new Array(800);
var Results = new Array(800);
var pro= new Array(200);
var  Time = new Array(200);
var Floating= new Array(200);
var  Against = new Array(200);
var stringer = new Array(20);
var match = new Array(20);
var last_p = new Array(800);

var searching = new Array(5);
for(let x = 0; x< searching.length; x++){
  searching[x]= "";
}


var kalfiData = new Array(2000);//page3
var number = new Array(2000);//page3
var votingCount = new Array(2000);//page3
var num = new Array(2000);//page3
//var num = [];
//for(let p= 0;p< 2000; p++){  num[p]="";}//page3

for(let u= 0;u< 2000; u++){//page3
  kalfiData[u]="";
  number[u]="";
  votingCount[u]= 0;
  num[u]="";
}


var getKalfi=["10","20","30","40","50","60","70","80","90","100",
          "110","120","130","140","150","160","170","180","190","200",
          "210","220","230","240","250","260","270","280","290","300",
          "310","320","330","340","350","360","370","380","390","400",
          "410","420","430","440","450","460","470"
] ;
var setPosY = 0;// page3
var realTime_data = false;//page3
var ypos1 = 0;//page3
var votingDay="";//page3
var votingKeys="";//page3
var lastYpos1 = 0;




var  searchFeild2 ="";
var myFont1;
var table1;
var results;
var keys ;
var roll = 1;
var voteForUs = 0;
var oppose = 0;
var floating = 0;
var helper = 0;
var totalbzb =30160;
var saving = false;
var pass = "base 22";var pass1 = "be center";var pass2 = "full open";
var passMode = 0;limit1 = 0; limit2 = 0;
 var dis = "";
var Password = false;
var In ="";
var graphData;
var cnv;
var getStatuss = "";
var Dropid = 0;
var dropdown;
var  fileVal ="";

var SaveTable = false;
var fileData ="";
 var inp ;
 var android_search;
 var android_phone;
 var android_stass;
 var android_circuil;
  var android_ride;
 var android_contact;
 var android_pass;

 var test="";


for(var i = 0; i< 800; i++){
  keys[i]=[];
}


//window.onbeforeunload = function() { return true };




function preload() {
  names = loadStrings('data/Columns.txt');
  table = loadTable('data/bzb.csv', 'csv', 'header');

}



function setup(){
  var canvas = createCanvas(displayWidth, displayHeight);
  canvas.drop(gotFile);



//   canvasElt.style.width = '100%', canvasElt.style.height = '100%';
 //centerCanvas();
 frameRate(90);


 for(var i =0; i< 800;i++){

    Family[i]="";Id[i]="";Street[i]="";Name[i]="";Kalfi[i]="";when[i] = "";
    rawNum[i] = ""; Phone[i]="";voteTo[i]="";Name[i]="";toHelp[i]="";email[i]="";
    Age[i] = ""; innerCircul[i] = "";transporting[i] = "";Gender[i] = "";actions[i] ="";
    contactMen[i] = "";container1[i]="";statuss[i]="";raw[i]="";Results[i]=[];fullAdd[i]="";
    container2[i]="";
  }




 // var config = {
 //    apiKey: "AIzaSyAGaGhkUODWYbyTlEaVmKbL2s9WGSZBvC8",
 //    authDomain: "kagandb-fa427.firebaseapp.com",
 //    databaseURL: "https://kagandb-fa427.firebaseio.com",
 //    projectId: "kagandb-fa427",
 //    storageBucket: "kagandb-fa427.appspot.com",
 //    messagingSenderId: "189986469822"
 //  };
 //   firebase.initializeApp(config);


var config = {
    apiKey: "AIzaSyAGaGhkUODWYbyTlEaVmKbL2s9WGSZBvC8",
    authDomain: "kagandb-fa427.firebaseapp.com",
    databaseURL: "https://kagandb-fa427.firebaseio.com",
    projectId: "kagandb-fa427",
    storageBucket: "kagandb-fa427.appspot.com",
    messagingSenderId: "189986469822"
  };
   firebase.initializeApp(config);
 

console.log(firebase);



var database = firebase.database();
var ref = database.ref('kaganDB');
console.log(firebase);
ref.on('value',gotData,errData);

function gotData(data){

  console.log(data.val());
    table1 = data.val();
//    console.log(table1);
   keys = Object.keys(table1);
//  console.log(keys);
//console.log(keys.length);
  for(let i = 1 ; i < keys.length-1;i++){
  var s = 'raw';
    var k = keys[i];
    Id[k] = table1[k].תעודת_זהות;
    Family[k] = table1[k].משפחה;
    Name[k] = table1[k].שם;
    Street[k] = table1[k].רחוב;
    fullAdd[k]= table1[k].כתובת_מלאה; //fullAdd[k]= trim(fullAdd[k]);
    Kalfi[k] = table1[k].קלפי;
    raw[k] = table1[k].שורה;
    contactmen[k] = table1[k].איש_קשר;  //contactmen[k] =  trim(contactmen[k]);
    Gender[k] = table1[k].מין;
    Phone[k] = table1[k].סלולרי;
    email[k] = table1[k].אימייל;
    statuss[k] = table1[k].סטטוס;
    when[k] = table1[k].תאריך;
    innerCircul[k] = table1[k].מעגל;
    transporting[k]= table1[k].הסעה;

  //  console.log(i +"  "+Name[i]);
  //transporting[i] = trim(transporting[i]);
  Family[i] =  trim(Family[i]);
  Name[k]   =  trim(Name[k]);
  Street[k] =  trim(Street[k]);
  Kalfi[k] = Kalfi[k].toString(); Kalfi[k] =  trim(Kalfi[k]);
  statuss[k] =  trim(statuss[k]);
  innerCircul[k] = trim(innerCircul[k]);
  }

}
function errData(err){
console.log(err);
}


//window.onbeforeunload = function() { return true }


 img = loadImage('data/button1.png');
 myFont1 = loadFont('data/Assistant-ExtraLight.ttf');

  droplength = names.length;
  //ref.setData("data/phone", 1111);

  for(var i = 0; i< names.length;i++){
  names[i] = trim(names[i]);}
 textFont('Assistant');
 //textAlign(RIGHT);

 submit = new Button ("עדכן",550,height-160,120,30);
 realTime = new Button ("זמן אמת",30,120,70,60);


  android_send = new Button("עדכן",20,200,150,50);
  android_Search = new Button("חיפוש",200,200,150,50);
  save = new Button ("שמירה",width-198,502,185,40);
  update = new Button ("ניתוח",width-198,150,185,40);
  down = new Button ("הקודם",30,230-ypos,70,60);
  clear = new Button ("נקה",30,150-ypos,70,60);
  maps = new Button ( "מפות",30,310,70,60);
  graphs = new Button ("גרפים",120,310,70,60);
  reports = new Button ( "שמור כטקסט",30,390,160,60);
  Tabels = new Button ("שמור כטבלה",30,470,160,60);

  go = new Button ("חיפוש",120,150-ypos,70,60);
  up = new Button ("הבא",120,230-ypos,70,60);
  android = new Button("אנדרואיד",width/2-20,height/1.5,80,60);



  Sinput1 =  new Input("",10,30,90-ypos,170,30);
  Sinput    =  new Input("",6,30,40-ypos,170,30);
 phone = new Input  ("טלפון:",1, width - 400,150,200,25);
 email = new Input  ("אימייל:",2,width - 400,210,200,25);
// statuss = new Input("סטטוס:",3, width - 400,270,200,25);
 age =   new Input  ("גיל:",4, width - 400,270,200,25);
 gender = new Input ("מין",5,  width - 400,330,200,25);

 circul =  new Input    ("מעגל שיוך" ,7,width - 830,150,200,25);
 contactmen =  new Input("איש קשר"   ,8,width - 830,210,200,25);
 needAride =   new Input("הסעה"     ,9,width - 830,270,200,25);
// Actions =     new Input("פעולות המשך"     ,11,width - 400,450,200,25);
  volenteer =     new Input("התנדבות"     ,12,width - 830,330,200,25);
  tableName =     new Input("",13,30,550,150,25);


 search  = new dropDown("1שדות",names,120,30,230,40,droplength,5,1);
 stass  = new dropDown("סטטוס",statuss_list,150,40,width-800,330,statuss_list.length,7,2);
search2  = new dropDown1("2שדות",names,120,30,230,95,droplength,5);

for (var i = 0; i < 30;i++){inputData[i]=""; bzbIndex[i]=""; }
for (var i = 0; i < 27000;i++){Search[i]="";}
 for(var i =0; i< 20;i++){ message[i] ="";stringer[i]="";Time[i]=""; }
for(var i =0; i< 4000;i++){ supporters[i] =""; }
for (var i = 0; i < pro.length; i++){
   pro[i]=0;Time[i]="";Floating[i]=0;Against[i]= 0;}

android_pass = createInput('סיסמא');
android_pass.size(120,62);
android_pass.style('background-color', color(90,90,110));
android_pass.style('color', color(217,179,16));
android_pass.style('font-size','30px');
android_pass.style('border-color', color(217,179,16));
android_pass.position(width/2+60,height/1.5-2);
android_pass.input(myInput);

}



function draw(){

background(23,106,102);
 textFont('Assistant');


 if(Password == false){
     textSize(18);
     android.Draw();
     if(android.MouseIsOver() && mouseIsPressed && android_pass.value() == 'Get in' ){
       page = 4;console.log(4);Password= true;}
//      text("Demo version v1 password 1234",width/2,50);
     rectMode(CENTER); fill(80,40,40);rect(width/2+70,height/2-100,300,150);
     fill(92,120,252,150);rect(width/2+70,height/2-155,300,40);

   if(In.length> dis.length && In.length< 10){
    dis = dis+"*";}
   textSize(24); textAlign(CENTER);fill(217,179,16);
   text("הכנס סיסמא",width/2+70,height/2-150);
   text("/ "+dis +" /" ,width/2+70,height/2-80);

   }


 rectMode(CORNER); fill(20,90,110); rect(0,0,width/3.4,height);

if(Password == true){
android_pass.remove();
  var stri= ["hello golan","go","gollo","dello","car"];
  var regexp = "gol";
  for(var b = 0; b< stri.length;b++){
 searching[b]  =  matchAll(stri[b], regexp);
if( matchAll( regexp,stri[b])){
//text(b +" "+searching[b],450,120+(b*30));
}
}

fill(120,40,70);rect(401,0,width-231,60);
textAlign(RIGHT);
fill(217,179,16); if(Id[50] != "" ){text("...אפשר להתחיל", width-80,30);}

if(page == 0){// searching


//=========================================================
  noFill();stroke(217,179,16); rect(230,150,150,60);
if(fileData.length< 1){
  textAlign(CENTER);stroke(255);textSize(20);
  text("הכנס קובץ", 305,180);
}else{  text(fileData,370,180);}

//=========================================================
if(test.length> 3){
var a = test[8];

text(a[0],800,150);}

   countbzb = true;
 textSize(18); textAlign(RIGHT);
if(table1 != null){

if(go.MouseIsOver()){
  if(mouseIsPressed){show = true;}}
  // if buuton is pressed show result and collect data
  if(show == true){  Search();}
}
go.Draw();  Sinput.display();Sinput1.display();tableName.display();
clear.Draw();maps.Draw();graphs.Draw();
reports.Draw();Tabels.Draw();
up.Draw();
down.Draw();
textAlign(CENTER);
search2.Show();
search.show();
fill(255);
text("הכנס שם קובץ",100,590);
}


  if(page == 1){  page1();}//saving to data base}
  if(page == 2){  page2();}// graphs}
  if(page == 3){  page3();}
  if(page == 4){  page4();}
}
textAlign(CENTER,CENTER);


}

function gotFile(file) {
textSize(30);

fileData = file.name + "\n" +" קב"+ file.size/1000;
//  var img = createImg(file.data);
//  img.size(100, 100);

 test = splitTokens(file.data," ",",");


//console.log(s[1]);
//var test = fileVal.getString(3,3);

//http://p5js.org/reference/assets/mammals.csv", "csv", "header"

}




function  keyTyped() {

  if( Password == false){

      textSize(22);

    if(keyCode != ENTER && recive == false && mouseY< 400){
    In = In + key;}
    if (keyCode == ENTER ) {
    if(In == pass  ){Password = true;limit = 1;}
  else  if(In == pass1 ){Password = true;limit = 2;}
  else  if(In == pass2 ){Password = true;limit = 3;}

    else Password = false;
console.log(Password+"  "+limit);
  }
  }



  val = 255;
  if( recive== true ){
  if(lastId != mIndex){count = 0;lastId= mIndex;run = 0;}
  // If the return key is pressed, save the String and clear it
  if (key == '\n' ) {  count = 0;recive = false;} else {
    // Otherwise, concatenate the String
    // Each character typed by the user is added to the end of the String variable.
    if(count < 60 && key != UP_ARROW && key != DOWN_ARROW){
       messagelength = message[mIndex].length;
     message[mIndex] =  message[mIndex] + key;
    count++;}
  }


}
}

function keyPressed(){
  if(keyIsDown(DOWN_ARROW) & roll < index){roll+=1;}
  if(keyIsDown(UP_ARROW) && roll > 1){roll-=1;}


if(keyCode == BACKSPACE){
      if( messagelength > -1){
       message[mIndex] =  message[mIndex].substring(0, message[mIndex].length-1); }
      if(count > 0){ count-=1;}

      if( In.length> 0){In =  In.substring(0, In.length-2);}
      if( dis.length>0   ){ dis =   dis.substring(0, dis.length-1);}

}

}



function mousePressed(){

 if(realTime.MouseIsOver()){
    for(let y = 0; y< votingCount.length;y++){
  votingCount[y]= 0;}
    realTime_data= true;}
 
if(android_send.MouseIsOver()){Asending = true;}

if(Tabels.MouseIsOver()){SaveTable = true;}
  if(up.MouseIsOver() && page != 4){
page +=1;
if(page == 1){
  message[1]="";message[2]="";message[1]="";message[5]="";
  message[4]="";message[9]="";message[8]="";message[7]="";
  Results[roll] = 0;index = 0;loc = 1;wheelPos= 0;}

}
  if(down.MouseIsOver()&& page != 4){
  if(page == 1){
    message[1]="";message[2]="";message[1]="";message[5]="";
    message[4]="";message[9]="";message[8]="";message[7]="";
    Results[roll] = 0;index = 0;loc = 0;wheelPos= 0;}

  if(page == 2){voteForUs = 0; floating = 0;}
  if(page == 3){
  map ="";canvas = createCanvas(displayWidth, displayHeight);
  }
    page =0;map="";}
}


function mouseWheel(event) {

  //move the square according to the vertical scroll amount
wheel = event.delta;
//console.log("wheel  "+ wheelPos);
if(mouseX < 400){ypos += event.delta;}
if(mouseX > 400){
if(roll > 0 && roll < index && page == 0){
roll += event.delta/100;}
if(roll > index){roll = index-1;}
if(roll < 0){roll = 0;}
}
 
 if(mouseX > 500 && page == 3){
ypos1 += event.delta/100;}
if(ypos1 < 0){ypos1 = 0;}
 
  //uncomment to block page scrolling
  if(isOn1 == true){
  wheelPos1 += (-event.delta/100);}

if(isOn == true){
wheelPos += (-event.delta/100);}
}
function myInputEvent() {
  console.log('you are typing: ', this.value());
}
