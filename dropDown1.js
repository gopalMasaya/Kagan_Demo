


class dropDown1{

  constructor( title, Label, x, y, locX, locY,  Cells, cellNo){

   this.Title = title;
   this.Width = x;
   this.Height = y;
   this.xpos = locX;
   this.ypos = locY;
   this.Title = title;
   this.label = Label;
   this.cells = Cells;
  this.numOfcells = cellNo;


  }

  Show(){
//console.log("wheel  "+ ticks);

this.signal();
fill(90,20,20); stroke(255,150,40); textSize(20);

if(this.MouseOver()){isOn1 = true;wheelPos1 = 0;loc1 = 0;}

   if( isOn1 == true){

  var ticks1 = this.cells - this.numOfcells;
//console.log("wheel  "+ ticks);
  for(let i = 0; i<= this.numOfcells; i++){
     strokeWeight(1);stroke(217,179,16);
   if(loc1 == i){ fill(20);} else fill(128,0,0);

  rect(this.xpos,this.ypos+(i*this.Height),this.Width,this.Height);
}


 strokeWeight(1);stroke(217,179,16);
  fill(60,20,11); rect(this.xpos,this.ypos,this.Width,this.Height,5);

   if(wheelPos1 <  -ticks1){wheelPos1 = -ticks1;}
  if(wheelPos1> 0){wheelPos1 = 0;}

  for(var j = 0; j< this.numOfcells; j++){
   fill(255);textAlign(CENTER);

   text(this.label[j-wheelPos1],this.xpos+(this.Width/2),(this.ypos+this.Height+(this.Height*0.65))+(j*this.Height));
   text(this.Title,this.xpos+(this.Width/2),this.ypos+(this.Height*0.5));
  }
//if( mouseIsPressed && mouseX > this.xpos +150){isOn1 = false;}
}


else if(isOn1  == false){
  strokeWeight(1);
  stroke(217,179,16);fill(60,20,11); rect(this.xpos,this.ypos,this.Width,this.Height,5);
  fill(255);textAlign(CENTER);
  text(this.Title,this.xpos+(this.Width/2),this.ypos+(this.Height*0.5));


}

if(mouseIsPressed){
if(loc1 > 0){this.Title = this.label[loc1-wheelPos1-1];
if(this.Title != "חיפוש"){searchFeild2 = this.Title;} else searchFeild2 = "שם פרטי";
isOn1 = false;
}}

}

   MouseOver(){

  if(mouseX > this.xpos && mouseX < this.xpos+this.Width && mouseY > this.ypos && mouseY < this.ypos+ this.Height){

    if(mouseIsPressed){  isOn1 = true;return true;}
  }else if(mouseIsPressed){return false;}


  }


    signal(){
 for(var i = 0; i<= this.cells;i++){
  if(mouseX > this.xpos && mouseX < this.xpos+this.Width && mouseY > this.ypos+(i*this.Height) && mouseY < this.ypos+(i*this.Height)+ this.Height){
  if(isOn1== true){  loc1 = i;}
   //if(mousePressed){println(loc);}

  }
  }
  }
  }
