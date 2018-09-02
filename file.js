class Input {


  constructor( labelB, Id,  xpos,  ypos,  widthB,  heightB) {
    this.label = labelB;
    this.x = xpos;
    this.y = ypos;
    this.w = widthB;
    this.h = heightB;
    this.Id = Id;
    Idr = this.Id;

    x1 = xpos;
    y1 = ypos;
    w1 = widthB;
    h1 = heightB;
  }

   display() {
//console.log(Idr);
// println(mIndex);
   Idr =this.Id;
   fill(150);
   stroke(200,120,60);
  //  if(recive == true){ stroke(200,120,200);}
    strokeWeight(2);
   textSize(22);
   if(recive == true){
     fill(180); stroke(200,120,60);
      rect(this.x, this.y, this.w, this.h, 5);}

    else  if(recive == false){
          fill(100); stroke(200,120,60);
          rect(this.x, this.y, this.w, this.h, 5);}


    textAlign(RIGHT);
    fill(250,120,60);
   text(  this.label,this.x+this.w+130,this.y+(this.h/1.5));

   if(recive == true){
     fill(0); textSize(18); 
   text( message[this.Id]+" *",this.x+this.w-5,this.y+(this.h/2));
 } else if(recive == false){ text( " ",this.x+this.w-5,this.y+(this.h/2));}


   // println(label.length());
  //  textAlign(CENTER, CENTER);
   // println(MouseIsOver());
   if(this.MouseIs() == true){
    recive = true;run = 0;}
//  console.log(  Sinput.MouseIs()+ "  "+recive);
  }


    MouseIs() {
  if(mouseIsPressed){
    if (mouseX > this.x-this.w && mouseX < this.x + this.w && mouseY > this.y-30 && mouseY < (this.y + 30)) {
       recive = true;console.log( "On");
  mIndex=this.Id; return true;
      for(var i =0; i< 500;i++){

  //  Family[i]="";Id[i]="";Street[i]="";Name[i]="";rawNum[i] = "";
    message[6] = "";//show = false;//Index = 0;
  }
    }
}
    return false;

  }



}
