
// hosting url
//https://kagandb-fa427.firebaseapp.com/

//deploying command
// C:\Users\gopal\AppData\Roaming\npm\firebase init

//github
//‏

var button;
var bg;
 var filepath ;
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

var loaded = false;
var recive = false;
var show = false;
 var isOn = false;
 var countbzb = false;

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


var droplength = 0;
var index = 0;
var rawnum = 0;
var  names;
var run = 0;


var statuss_list = [["לא מזוהה"],[ "טלפון לא תקין"],["מתנדב" ],
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
var totalbzb =30136;
var saving = false;
var pass = "base 22"; var pass1 = "look 43"; var pass2 = "full open";
var passMode = 0;limit1 = 0; limit2 = 0;
 var dis = "";
var Password = false;
var In ="";
var graphData;
var cnv;
var getStatuss = "";
var Dropid = 0;
var dropdown;

var SaveTable = false;


for(var i = 0; i< 800; i++){
  keys[i]=[];
}

window.onbeforeunload = function() { return true };



function preload() {
  names = loadStrings('data/Columns.txt');
  table = loadTable('data/bzb.csv', 'csv', 'header');

}




function setup(){
const canvasElt = createCanvas(displayWidth, displayHeight).elt;
   canvasElt.style.width = '100%', canvasElt.style.height = '100%';
 frameRate(90);

 for(var i =0; i< 800;i++){

    Family[i]="";Id[i]="";Street[i]="";Name[i]="";Kalfi[i]="";when[i] = "";
    rawNum[i] = ""; Phone[i]="";voteTo[i]="";Name[i]="";toHelp[i]="";email[i]="";
    Age[i] = ""; innerCircul[i] = "";transporting[i] = "";Gender[i] = "";actions[i] ="";
    contactMen[i] = "";container1[i]="";statuss[i]="";raw[i]="";Results[i]=[];fullAdd[i]="";
    container2[i]="";
  }




 var config = {
 	 apiKey: "AIzaSyAGaGhkUODWYbyTlEaVmKbL2s9WGSZBvC8",
 	 authDomain: "kagandb-fa427.firebaseapp.com",
 	 databaseURL: "https://kagandb-fa427.firebaseio.com",
 	 projectId: "kagandb-fa427",
 	 storageBucket: "kagandb-fa427.appspot.com",
 	 messagingSenderId: "189986469822"
  };
   firebase.initializeApp(config);



var database = firebase.database();
var ref = database.ref('kaganDB');
ref.on('value',gotData,errData);

function gotData(data){
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

  //  console.log(i +"  "+Name[i]);
  Family[i] =  trim(Family[i]);
  Name[k]   =  trim(Name[k]);
  Street[k] =  trim(Street[k]);
  Kalfi[k] = Kalfi[k].toString(); Kalfi[k] =  trim(Kalfi[k]);
  statuss[k] =  trim(statuss[k]);
  innerCircul[k]= trim(innerCircul[k]);
  }

}
function errData(err){
console.log(err);
}


//window.onbeforeunload = function() { return true }


 img = loadImage('data/Button1.PNG');
 myFont1 = loadFont('data/Assistant-ExtraLight.ttf');

  droplength = names.length;
  //ref.setData("data/phone", 1111);

  for(var i = 0; i< names.length;i++){
  names[i] = trim(names[i]);}
 textFont('Assistant');
 //textAlign(RIGHT);

 submit = new Button ("עדכן",550,height-120,120,30);


  rolldown = new Button ("D",232,382,40,80);

  save = new Button ("שמירה",width-202,502,185,40);
  update = new Button ("ניתוח",width-202,150,185,40);
  down = new Button ("הקודם",30,230-ypos,70,60);
  clear = new Button ("נקה",30,150-ypos,70,60);
  maps = new Button ( "מפות",30,310,70,60);
  graphs = new Button ("גרפים",120,310,70,60);
  reports = new Button ( "שמור כטקסט",30,390,160,60);
  Tabels = new Button ("שמור כטבלה",30,470,160,60);

  go = new Button ("חיפוש",120,150-ypos,70,60);
  up = new Button ("הבא",120,230-ypos,70,60);



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
 stass  = new dropDown("סטטוס",statuss_list,150,40,width-800,330,statuss_list.length,5,2);
search2  = new dropDown1("2שדות",names,120,30,230,95,droplength,5);


 contacts = new tabels ("contacts");




for (var i = 0; i < 30;i++){inputData[i]=""; bzbIndex[i]=""; }
for (var i = 0; i < 27000;i++){Search[i]="";}
 for(var i =0; i< 20;i++){ message[i] ="";stringer[i]=""; }
for(var i =0; i< 4000;i++){ supporters[i] =""; }
for (var i = 0; i < pro.length; i++){
   pro[i]=0;Time[i]="";Floating[i]=0;Against[i]= 0;}




}



function draw(){

background(23,106,102);
 textFont('Assistant');



 if(Password == false){
     textSize(18);

//      text("Demo version v1 password 1234",width/2,50);
     rectMode(CENTER); fill(80,40,40);rect(width/2,height/2,300,150);
     fill(92,120,252,150);rect(width/2,height/2-55,300,40);

   if(In.length> dis.length && In.length< 10){
    dis = dis+"*";}
   textSize(24); textAlign(CENTER);fill(217,179,16);
   text("הכנס סיסמא",width/2,height/2-50);
   text("/ "+dis +" /" ,width/2,height/2+20);

   }





 rectMode(CORNER); fill(20,90,110); rect(0,0,400,height);

if(Password == true){
fill(120,40,70);
rect(401,0,width-231,60);
textAlign(RIGHT);
fill(217,179,16); if(Id[500] != "" ){text("...אפשר להתחיל", width-80,30);}



if(page == 0){// searching

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
textAlign(CENTER);
search2.Show();
search.show();
fill(255);
text("הכנס שם קובץ",100,590);
}


  if(page == 1){  page1();}//saving to data base}
    if(page == 2){  page2();}// graphs}
    if(page == 3){  page3();}
}

 up.Draw();
 down.Draw();





}

function gradientLine(x1,  y1,  x2,  y2,  a, b) {
  var deltaX = x2-x1;
  var deltaY = y2-y1;
  var tStep = 1.0/dist(x1, y1, x2, y2);
  for (var t = 0.0; t < 1.0; t += tStep) {
    fill(lerpColor(a, b, t));
    ellipse(x1+t*deltaX,  y1+t*deltaY, 3, 3);
  }
}




function  keyTyped() {

  if( Password == false){

      textSize(22);

    if(keyCode != ENTER && recive == false){
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
    if(count < 28 && key != UP_ARROW && key != DOWN_ARROW){
       messagelength = message[mIndex].length;
     message[mIndex] =  message[mIndex] + key;
    count++;}
  }


}
}

function keyPressed(){

if(keyCode == BACKSPACE){
      if( messagelength > -1){
       message[mIndex] =  message[mIndex].substring(0, message[mIndex].length-1); }
      if(count > 0){ count-=1;}

      if( In.length> 0){In =  In.substring(0, In.length-2);}
      if( dis.length>0   ){ dis =   dis.substring(0, dis.length-1);}

}

}

function mySelectEvent() {
   selected = this.selected();
  if (selected === 'pear') {
    console.log("it's a pear!");
  }
}

function mousePressed(){
if(Tabels.MouseIsOver()){SaveTable = true;}
  if(up.MouseIsOver()){page +=1;}
  if(down.MouseIsOver()){
  if(page == 1){ Results[roll] = 0;index = 0;}
  if(page == 2){voteForUs = 0; floating = 0;}
  if(page == 3){
  const canvasElt = createCanvas(displayWidth, displayHeight+10).elt;
   canvasElt.style.width = '100%', canvasElt.style.height = '100%';
  
  }
    page =0;}
}


function mouseWheel(event) {

  //move the square according to the vertical scroll amount
wheel = event.delta;
//console.log("wheel  "+ wheelPos);
if(mouseX < 230){ypos += event.delta;}
if(roll > 0 && roll < index){
roll += event.delta/100;}
if(roll > index){roll = index;}
if(roll < 0){roll = 0;}

  //uncomment to block page scrolling
  if(isOn1 == true){
  wheelPos1 += (-event.delta/100);}

if(isOn == true){
wheelPos += (-event.delta/100);}
}
