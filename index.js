function play()
{   
    document.querySelectorAll("h1")[0].classList.remove("header-text");
    document.querySelectorAll("h1")[0].classList.add("header-text1");
    document.getElementById("CONTENT").style.visibility="hidden";
    document.querySelector(".hide").style.visibility="visible";
     
    setTimeout(() => {
        document.getElementById("CONTENT").style.visibility="visible";
        document.querySelector(".hide").style.visibility="hidden";
        
      }, 3000);
      setTimeout(play1,3000);

      function play1(){
        var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    document.querySelectorAll(".dice-img")[0].setAttribute("src","images/dice"+dice1+".png");
    document.querySelectorAll(".dice-img")[1].setAttribute("src","images/dice"+dice2+".png");
    // document.querySelector("h1").style.fontFamily="'Bebas Neue', cursive";

    if(dice1==dice2)
    {
        document.querySelector("h1").innerHTML="🎲 Draw 🎲";


    }
    else if(dice1>dice2)
    {
        document.querySelector("h1").innerHTML=" Player 1 Wins!";
    }
    else 
    {
        document.querySelector("h1").innerHTML=" Player 2 Wins!";
    }
    document.querySelector("h1").setAttribute("onclick","location.reload()")
      }
    
    setTimeout("window.location.reload(true)",10000);
}

$(window).on('load',function(){
    $('#PRELOADER').delay(1000);
    $('#PRELOADER').fadeOut(1000);
    $('#CONTENT').fadeIn(1000);
})

