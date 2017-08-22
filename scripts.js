//links button to the script and starts the function
  document.getElementById("btn").onclick = function apCalc() {

    //gets user input
    var pe = document.getElementById("pe").value;
    var pp = document.getElementById("pp").value;

    //converts input to int
    pe = parseInt(pe);
    pp = parseInt(pp);

    //adjusts for lost points, and puts in a percent friendly form
    var p1 = ((pe - 1) / pp) * 100;
    var p2 = ((pe - 2) / pp) * 100;
    var p0 = (pe / pp) * 100;

    //if answer is less than 100 round to the nearist 100th, else keep whole number
    if(p1 < 100) {
      p1 = p1.toFixed(2);
    }
    else {
      p1 = p1;
    }
    if(p2 < 100) {
      p2 = p2.toFixed(2);
    }
    else {
      p2 = p2;
    }
    if (p0 < 100) {
      p0 = p0.toFixed(2);
    }
    else {
      p0 = p0;
    }


    //writes to document and adds percentage
    document.getElementById("1p").innerHTML = p1 + "%";
    document.getElementById("2p").innerHTML = p2 + "%";
    document.getElementById("0p").innerHTML = p0 + "%";


  warn(p1);

}

function warn(a){
  if (a < 90){
    var x = document.getElementsByClassName("warn");
    x[0].style.display = "inline";
  }
}
