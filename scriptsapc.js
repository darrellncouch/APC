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
    p1 < 100 ? p1 = p1.toFixed(2) : p1 = p1;

    p2 < 100 ? p2 = p2.toFixed(2) : p2 = p2;

    p0 < 100 ? p0 = p0.toFixed(2) : p0 = p0;

    //writes to document and adds percentage
    document.getElementById("1p").innerHTML = p1 + "%";
    document.getElementById("2p").innerHTML = p2 + "%";
    document.getElementById("0p").innerHTML = p0 + "%";


  warn(p0, p1, p2);

}

function warn(a, b, c){

  if (a < 90.00){
    var x = document.getElementsByClassName("warn");
    x[0].style.display = "inline";
    x[0].style.backgroundColor = "#ef8b8b";
    x[0].style.width = "400px";
    document.getElementById("warntext").innerHTML = "<b>You will lose an aditional 10% every day you have an attendance issue</b>";
  }else if(b < 90.00){
    var x = document.getElementsByClassName("warn");
    x[0].style.display = "inline";
    x[0].style.backgroundColor = "#f7b551";
    x[0].style.width = "350px";
    document.getElementById("warntext").innerHTML = "<b>You will lose 10% of your bonuses if you lose a point today...</b>";
  }else if(c < 90.00){
    var x = document.getElementsByClassName("warn");
    x[0].style.display = "inline";
    x[0].style.backgroundColor = "#f7b551";
    x[0].style.width = "350px";
    document.getElementById("warntext").innerHTML = "<b>You will lose 10% if you lose more than one point today...</b>";
  }else if(a > 95.00){
    var x = document.getElementsByClassName("warn");
    x[0].style.display = "inline";
    x[0].style.backgroundColor = "#73ba74";
    x[0].style.width = "200px";
    document.getElementById("warntext").innerHTML = "<strong>Keep up the great attendance!</strong>";
  }
}
