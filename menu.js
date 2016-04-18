// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(item, choice) {
  var answerInput= prompt(item);
     if ( answerInput.toUpperCase() === choice ) {
     order += item + " and ";
     }
     else {
       order += "no " + item + " and ";
     }

}
// call the QUESTION function with the order options
question("Chicken", "YES");
question("Steak", "YES");
question("Black Beans", "YES");
question("Pinto Beans", "YES");
question("White Rice", "YES");
question("Brown Rice", "YES");
question("Salsa", "YES");
question("Guac", "YES");
question("Drink", "YES");




// output their order
document.write("<p>You ordered: " + order + "that is all<p>");
