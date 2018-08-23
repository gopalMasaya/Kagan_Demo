class tabels{



  constructor( fileName){

     this.filename="";
    this.Phone="";
    this.Email="";
    this.Statuss="";
    this.Age="";
    this.Gender="";
    this.Circul="";
    this.ContactMen="";
    this.NeedAride="";
    this.Actions="";

   this.filename = fileName;
    this.saved = false;
    this.excute = 0;


  }



   printData(){
  //  println("p  "+Phone.length()+"  " + rawnum+ "  " + excute + "  " + loaded);
    fill(0,200,0);

 if(this.saved == true){text(" data is saved!",width*0.4,height*0.35);

  inputData[0] = table.getString(rawnum-2, "מספר זהות");  inputData[1] = table.getString(rawnum-2, "שם משפחה");
  inputData[2] = table.getString(rawnum-2, "שם פרטי");    inputData[3] = table.getString(rawnum-2, "רחוב");
  inputData[4] = table.getString(rawnum-2, "סלולרי");     inputData[5] = table.getString(rawnum-2, "קלפי");
  inputData[6] = table.getString(rawnum-2, "סטטוס");      inputData[7] = table.getString(rawnum-2, "התנדבות");
  inputData[8] = table.getString(rawnum-2, "איש קשר");    inputData[9] = table.getString(rawnum-2, "גיל");
  inputData[10] = table.getString(rawnum-2, "מין");       inputData[11] = table.getString(rawnum-2, "הסעה");
  inputData[12] = table.getString(rawnum-2, "מעגל שיוך"); inputData[13] = table.getString(rawnum-2, "איש קשר");
  inputData[15] = table.getString(rawnum-2, "פעולות");



 }


 else {text("waiting...",width*0.4,height*0.35);}

    this.Phone = message[1];
    this.Email = message[2];
    this.Statuss = message[3];
    this.Age = message[4];

    this.Gender = message[5];
    this.Circul = message[7];
    this.ContactMen = message[8];
    this.NeedAride = message[9];


   if(submit.MouseIsOver()== false && this.excute > 0){this.excute = 0;this.saved = false;
  for(var i = 0; i< 12;i++){
  message[i] = "";}

 }

else if(submit.MouseIsOver()== true && this.excute < 1 ){

  if(mouseIsPressed){


     this.excute++;
   // if(Phone.length() > 0){ table.setString(rawnum, 9,"hhhh");}
   table.addRow();

  if(this.Phone.length > 0)   {table.setString(rawnum-2,"סלולרי",this.Phone);}
  if(this.Statuss.length> 0) {table.setString(rawnum-2,"סטטוס",this.Statuss);}
  if(this.Age.length> 0)     {table.setString(rawnum-2,"גיל",this.Age);}
  if(this.Gender.length> 0)     {table.setString(rawnum-2,"מין",this.Gender);}
 if(this.Circul.length> 0)     {table.setString(rawnum-2,"מעגל שיוך",this.Circul);}
 if(this.ContactMen.length> 0)     {table.setString(rawnum-2,"איש קשר",this.ContactMen);}

 if(this.Email.length> 0)     {table.setString(rawnum-2,"אימייל",this.Email);}
 if(this.NeedAride.length> 0)     {table.setString(rawnum-2,"הסעה",this.NeedAride);}
 if(this.ContactMen.length> 0)     {table.setString(rawnum-2,"איש קשר",this.ContactMen);}

 //time = {day(),"/",month()};
// table.setString(rawnum-2,"מתי שוחחנו",time);

  saveTable(table, "c:/bzb.csv");

  //saveTable(table, "data/people.csv");
  this.saved = true;
  fill(0,255,0);
  textSize(20);

  }
  }
  }
  }
