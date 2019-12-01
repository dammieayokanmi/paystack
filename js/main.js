// norway
document.getElementById('norway').onmouseover = function(){
    document.getElementById('js-homepage-animation-tooltip').style.opacity = '1';
    document.getElementById('js-homepage-animation-tooltip').style.transform =  'translateY(0px) rotate(0) ';
    document.getElementById('js-homepage-animation-tooltip').style.transition= '.2s ease-in';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '754px 41px';


}
document.getElementById('norway').onmouseout = function(){
    document.getElementById('js-homepage-animation-tooltip').style.opacity = '';
    document.getElementById('js-homepage-animation-tooltip').style.transform =  '';
    document.getElementById('js-homepage-animation-tooltip').style.transition= '';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '';

}

// egypt
document.getElementById('egypt').onmouseover = function(){
    document.getElementById('js-homepage-animation-tooltip2').style.opacity = '1';
    document.getElementById('js-homepage-animation-tooltip2').style.transform =  'translateY(0px) rotate(0) ';
    document.getElementById('js-homepage-animation-tooltip2').style.transition= '.2s ease-in';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '754px 41px';


}
document.getElementById('egypt').onmouseout = function(){
    document.getElementById('js-homepage-animation-tooltip2').style.opacity = '';
    document.getElementById('js-homepage-animation-tooltip2').style.transform =  '';
    document.getElementById('js-homepage-animation-tooltip2').style.transition= '';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '';

}

// nigeria
document.getElementById('nigeria').onmouseover = function(){
    document.getElementById('js-homepage-animation-tooltip3').style.opacity = '1';
    document.getElementById('js-homepage-animation-tooltip3').style.transform =  'translateY(0px) rotate(0) ';
    document.getElementById('js-homepage-animation-tooltip3').style.transition= '.2s ease-in';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '754px 41px';


}
document.getElementById('nigeria').onmouseout = function(){
    document.getElementById('js-homepage-animation-tooltip3').style.opacity = '';
    document.getElementById('js-homepage-animation-tooltip3').style.transform =  '';
    document.getElementById('js-homepage-animation-tooltip3').style.transition= '';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '';

}

// southafrica
document.getElementById('south-africa').onmouseover = function(){
    document.getElementById('js-homepage-animation-tooltip4').style.opacity = '1';
    document.getElementById('js-homepage-animation-tooltip4').style.transform =  'translateY(0px) rotate(0) ';
    document.getElementById('js-homepage-animation-tooltip4').style.transition= '.2s ease-in';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '754px 41px';


}
document.getElementById('south-africa').onmouseout = function(){
    document.getElementById('js-homepage-animation-tooltip4').style.opacity = '';
    document.getElementById('js-homepage-animation-tooltip4').style.transform =  '';
    document.getElementById('js-homepage-animation-tooltip4').style.transition= '';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '';

}
// brazil
document.getElementById('brazil').onmouseover = function(){
    document.getElementById('js-homepage-animation-tooltip5').style.opacity = '1';
    document.getElementById('js-homepage-animation-tooltip5').style.transform =  'translateY(0px) rotate(0) ';
    document.getElementById('js-homepage-animation-tooltip5').style.transition= '.2s ease-in';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '754px 41px';


}
document.getElementById('brazil').onmouseout = function(){
    document.getElementById('js-homepage-animation-tooltip5').style.opacity = '';
    document.getElementById('js-homepage-animation-tooltip5').style.transform =  '';
    document.getElementById('js-homepage-animation-tooltip5').style.transition= '';
    // document.getElementById('js-homepage-animation-tooltip').style.transformOrigin = '';

}


// function changeOpacity(className) {
//     var elems = document.getElementById('norway');
//     var el = document.getElementById('js-homepage-animation-tooltip');
//     var index = 0, length = elems.length;
//     for ( ; index < length; index++) {
//         elems[index].onmouseover = function(){el.style.opacity= "1";}
//         elems[index].onmouseout = function(){el.style.opacity= "";}
//         elems[index].onmouseover = function(){el.style.transition = "opacity 0.5s linear 0s";}
//         elems[index].onmouseout = function(){el.style.transition = "";}

//     }

// document.getElementById('norway').onmouseover = function(){
//     document.getElementById('js-homepage-animation-tooltip').forEach(el => {
//         el.style.transition = "opacity 0.5s linear 0s";
//         el.style.opacity = 1;
//     });
// }

// document.getElementById('norway').onmouseover = function(){
//     document.getElementById('js-homepage-animation-tooltip').forEach(el => {
//         el.style.transition = '';
//         el.style.opacity = '';
//     });
// }
// document.getElementById('norway').onmouseover = function(){
//     document.getElementById('js-homepage-animation-tooltip').style.transform = 'scale(1) rotate(0)';
// }
// document.getElementById('norway').onmouseout = function(){
//     document.getElementById('js-homepage-animation-tooltip').style.transform = '';
// }

function myFunction() {
    var x = document.getElementsByClassName("c-nav__body--parent");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }