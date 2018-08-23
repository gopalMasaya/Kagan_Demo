function page1(){

  countbzb = true;
  background(10,50,80);
  fill(20,90,110);
  rect(0,0,230,height);

     textSize(40);
  fill(217,179,16);
  text("הזן פרטים",width/2+240,30);
fill(120,40,70);rect(231,0,270,height);
  textAlign(RIGHT);
  fill(255,190,0);textSize(26);
  text("ת.ז:            "+ inputData[0] ,490,60);     text("משפחה:      "+ inputData[1] , 490,100);
  text("שם:             "+ inputData[2] , 490,140);    text("כתובת:      "+ inputData[3] , 490,180);
  text("סלולרי:       "+ inputData[5] ,490,220);     text("קלפי:          "+ inputData[4] , 490,260);
  text("סטטוס:          "+ inputData[7] , 490,300);
  text("מתי שוחחנו:     "+ inputData[10] ,490,380);     text("גיל:               "+ inputData[6] , 490,420);
  text("מין:              "+ inputData[8] , 490,460);   text("הסעה:              "+ inputData[11] , 490,500);
  text("מעגל שיוך:      "+ inputData[12] ,490,540);    text("איש קשר:             "+ inputData[13] , 490,580);
  text("פעולות המשך:     "+ inputData[13] , 490,620);   text("אימייל:  "+ inputData[14] , 490,340);

  phone.display(); Actions.display();
  email.display(); statuss.display();
  age.display();   gender.display();
  circul.display();contactmen.display();
  needAride.display();


  up.Draw();
  down.Draw();
  submit.Draw();

//var loc = roll.tostring();
  //writing to database

  var phoneRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var emailRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var statussRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var genderRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var ageRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var ridRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var contactRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var dateRef = firebase.database().ref('kaganDB/'+Results[roll]);
  var circulRef = firebase.database().ref('kaganDB/'+Results[roll]);
  // Modify the 'first' and 'last' properties, but leave other data at
  // adaNameRef unchanged.

    if(submit.MouseIsOver()){
    if(mouseIsPressed){
if(message[1].length > 0){phoneRef.update({סלולרי: message[1]});inputData[5] = message[1];}
if(message[2].length > 0){emailRef.update({אימייל: message[2]});inputData[14] = message[2];}
if(message[3].length > 0){statussRef.update({סטטוס: message[3]});inputData[7] = message[3];}
if(message[5].length > 0){genderRef.update({מין: message[5]});inputData[8] = message[5];}
if(message[4].length > 0){ageRef.update({גיל: message[4]});inputData[6] = message[4];}
if(message[9].length > 0){ridRef.update({הסעה: message[9]});inputData[11] = message[9];}
if(message[8].length > 0){contactRef.update({איש_קשר: message[8]});inputData[9] = message[8];}
//dateRef.update({זמן: time});inputData[5] = time;
if(message[7].length > 0){circulRef.update({מעגל_שיוך: message[7]});inputData[12] = message[7];}

}
}




}
