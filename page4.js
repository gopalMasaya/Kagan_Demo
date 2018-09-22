
var create = false;
var ride  = ['לא ידוע','כן',"לא"];
var s;

function page4(){
background(23,106,102);
android_pass.remove();
  var col = color(25, 23, 200, 50);
//android_send.Draw();
android_send.Draw();
android_Search.Draw();
//search  = new dropDown("1שדות",names,120,50,50,240,droplength,5,1);
//go.Draw();clear.Draw();

if(create == false){
  android_search = createInput('קלפי');
  android_phone= createInput('מצביע');
  //android_stass= createSelect('סטטוס');
  //android_circuil= createSelect('');
  //android_ride= createSelect('');
  inp = createInput('');
style();
create = true;
}

var voting = firebase.database().ref('voting');

var write = {
kalfi: android_search.value(),
number:android_phone.value()

}
if(Asending == true){

  voting.push(write);
  text("saved",400,400);
  console.log("saved");
  Asending = false;
}


if(table1 != null){

//if(go.MouseIsOver()){if(mouseIsPressed){show = true;}}
//  if(show == true){  Search();}
}

}
function myInput() {
  console.log('you are typing: ', this.value());
}

function style(){

  var back_color = color(60,20,11);
  var text_col = color(255);

  android_search.size(150,50);
  android_search.style('background-color', color(160));
  android_search.style('color', color(0));
  android_search.style('font-size','30px');
  android_search.style('border-color', color(217,179,16));
  android_search.position(20,60);
  android_search.input(myInput);

  android_phone.size(150,50);
  android_phone.style('background-color', color(160));
  android_phone.style('color', color(0));
  android_phone.style('font-size','30px');
  android_phone.style('border-color', color(217,179,16));
  android_phone.position(20,120);
  android_phone.input(myInput);

}
