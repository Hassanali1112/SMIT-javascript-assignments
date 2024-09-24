// task 01
var x = 1;
var y = 2;
var z = 3;
// task 02
// legal variables
var x;
var _y;
var $z;
var z1;
var myName;

// illegal variables
var 1x ;
var ()z;
var 1$x;
var 4_x;
var -y ;
// task 03
var heading = `<h1>Rules for naming JS variable</h1>`;
var b =
  "Variables name can only contain numbers $ and _ for example $my_1stVariable";
var c =
  "variable must begin with a letter $ and _ for example $name, _name or name.";
var d = "variable names are case sensitive.";
var e = "Variable name should not be JS keywords";
document.write(heading + "\n\n\n\n\n\n");
document.write(b+"\n");
document.write(c+"\n");
document.write(d+"\n");
document.write(e+"\n");
