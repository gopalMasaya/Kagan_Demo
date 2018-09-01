

class dropDown{

  constructor( title, Label, x, y, locX, locY,  Cells, cellNo,  id){

   this.Title = title;
   this.Width = x;
   this.Height = y;
   this.xpos = locX;
   this.ypos = locY;
   this.Title = title;
   this.label = Label;
   this.cells = Cells;
  this.numOfcells = cellNo;
   this.Id = id;


  }

  show(){
//console.log("wheel  "+ ticks);

 this.signal();
fill(90,20,20); stroke(255,150,40); textSize(20);

if(this.mouseOver()){isOn = true;wheelPos = 0;loc = 0;}

   if( isOn == true){

  var ticks = this.cells - this.numOfcells;
//console.log("wheel  "+ ticks);
  for(let i = 0; i<= this.numOfcells; i++){
     strokeWeight(1);stroke(217,179,16);
   if(loc == i){ fill(20);} else fill(128,0,0);

  rect(this.xpos,this.ypos+(i*this.Height),this.Width,this.Height);
}


 strokeWeight(1);stroke(217,179,16);
  fill(60,20,11); rect(this.xpos,this.ypos,this.Width,this.Height,5);

   if(wheelPos <  -ticks){wheelPos = -ticks;}
  if(wheelPos> 0){wheelPos = 0;}

  for(var j = 0; j< this.numOfcells; j++){
   fill(255);textAlign(CENTER);

   text(this.label[j-wheelPos],this.xpos+(this.Width/2),(this.ypos+this.Height+(this.Height*0.65))+(j*this.Height));
   text(this.Title,this.xpos+(this.Width/2),this.ypos+(this.Height*0.5));
  }

if( mouseIsPressed && mouseX > this.xpos +150){isOn = false;}

}


else if(isOn  == false){
  strokeWeight(1);
  stroke(217,179,16);fill(60,20,11); rect(this.xpos,this.ypos,this.Width,this.Height,5);
  fill(255);textAlign(CENTER);
  text(this.Title,this.xpos+(this.Width/2),this.ypos+(this.Height*0.5));

}

if(mouseIsPressed){
if(loc > 0){this.Title = this.label[loc-wheelPos-1];
  if(this.Id ==1){
  if(this.Title != "חיפוש"){searchFeild = this.Title;} else searchFeild = "שם פרטי";
isOn = false;
}

else if(this.Id ==2){
if(this.Title != "סטטוס"){getStatuss = this.Title;}
isOn = false;
}}




}

}

   mouseOver(){

  if(mouseX > this.xpos && mouseX < this.xpos+this.Width && mouseY > this.ypos && mouseY < this.ypos+ this.Height){

    if(mouseIsPressed){  isOn = true;return true;}
  }else if(mouseIsPressed){return false;}


  }


    signal(){
 for(var i = 0; i<= this.cells;i++){
  if(mouseX > this.xpos && mouseX < this.xpos+this.Width && mouseY > this.ypos+(i*this.Height) && mouseY < this.ypos+(i*this.Height)+ this.Height){
  if(isOn== true){  loc = i;}
   //if(mousePressed){println(loc);}

  }
  }
  }
  }
