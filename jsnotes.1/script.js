//camel case is being used...
 //create a new object;
 const one = new Object();
  //Add properties or values;
  one.firstName = "Ayesha";
  one.lastName = "Sardar";
  one.age = 22;
  one.eyeColor = "Black";
   //delete one.eyeColor......in this case instead of 'black' the doc will show 'undefined'
  //function;
  document.getElementById('demon').innerHTML = "My name is"+" "+one["firstName"]
  +" "+one["lastName"]+" "+" and I am "+" "+one["age"]+" "+
  " years old while my eye color is a seethrough and shiny"+" "+one["eyeColor"]+"."


  //2nd object
  const two = new Object ();
  two.catName = "Snow";
  two.catColor = "White";
  two.catAge = 1 ;
 two.eyeColor = "Emerald green";
 //function
 document.getElementById('cat').innerHTML = "My cat's name is"+" "+
  two["catName"]+" "+" and its fur color is Pure"+" "+two["catColor"]+" "+
   "While it eye color is beautiful"+" "+two["eyeColor"]+"."+" "+"she is "+
   " "+two["catAge"]+" "+"year old currently."
 //3rd object
 const three = new Object ();
 three.firstName = "Nimra";
 three.lastName = "Tahir";
 three.eyeColor = "Black";
 three.age = 22;
 //functions;

 document.getElementById('demo').innerHTML = three["firstName"]+" "+three["lastName"]+" "+
  "is Ayesha's Best friend and her age is"+" "+three["age"]+"."
  +" "+"While her eye color's shade is beautiful"+" "+three["eyeColor"]+"."