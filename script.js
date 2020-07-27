x = -100;
yy = 2.3;
xx = 2;
xx2 = 0.4;
yy2 = 3.4;
xx3 = 3.4;
yy3 = 1.1;
function foo() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if ( winScroll <= 250){
        
    
    
    }
    if (winScroll >= 150 && winScroll <= 900){console.log(winScroll);
    if (x < 0){
        x = x + 1;
    }
    else if (x < 101){
        
        x = x + 1;
        yy = yy + 2.3;
        xx = xx + 3;
        document.getElementById('line1').setAttribute('y2',170 + yy);
        document.getElementById('line1').setAttribute('x2',0 + xx);
    }
    else if (x < 201){
        x = x + 1;
        xx2 = xx2 + 0.4;
        yy2 = 3.4 + yy2;
        document.getElementById('line3').setAttribute('x2',300 + xx2);
        document.getElementById('line3').setAttribute('y2',400 - yy2);
    }
    else if (x < 301){
        
        x = x + 1;
        xx3 = xx3 + 3.4;
        yy3 = yy3 + 1.1;
        document.getElementById('line2').setAttribute('x2',340 - xx3);
        document.getElementById('line2').setAttribute('y2',60 + yy3);
    }
    }
    setTimeout(foo, 5);
}

foo();



var slide= 1;
function next(){
    if (slide > 0 && slide <4){
    slide = slide + 1;
    }
    if (slide == 2){
        document.getElementById('disney').style.animation = "0.7s disneyout ease-out forwards";
        document.getElementById('disney').style.opacity = "0";
        document.getElementById('spaceX').style.animation = "0.7s 0.7s disneyin ease-out forwards";
        document.getElementById('spaceX').style.opacity - "1";     
        
        document.getElementById('slide2').style.backgroundColor = "white";
        document.getElementById('slide1').style.backgroundColor = "transparent";
    }
    if (slide == 3){
        document.getElementById('spaceX').style.animation = "0.7s disneyout ease-out forwards";
        document.getElementById('spaceX').style.opacity = "0";
        document.getElementById('danny').style.animation = "0.7s 0.7s disneyin ease-out forwards";
        document.getElementById('danny').style.opacity - "1";     
        
        document.getElementById('slide3').style.backgroundColor = "white";
        document.getElementById('slide2').style.backgroundColor = "transparent";
    }
    if (slide == 4){
        document.getElementById('danny').style.animation = "0.7s disneyout ease-out forwards";
        document.getElementById('danny').style.opacity = "0";
        document.getElementById('laste').style.animation = "0.7s 0.7s disneyin ease-out forwards";
        document.getElementById('laste').style.opacity - "1";     
        
        document.getElementById('slide4').style.backgroundColor = "white";
        document.getElementById('slide3').style.backgroundColor = "transparent";
    }
}
function prev(){
    if (slide > 0 && slide < 5){
    slide = slide - 1;
    }
    if (slide == 1){
        document.getElementById('disney').style.animation = "0.7s 0.7s disneybackin ease-out forwards";
        document.getElementById('spaceX').style.animation = "0.7s disneybackout ease-out forwards";     
        
        document.getElementById('slide1').style.backgroundColor = "white";
        document.getElementById('slide2').style.backgroundColor = "transparent";
    }
    if (slide == 2){
        document.getElementById('spaceX').style.animation = "0.7s 0.7s disneybackin ease-out forwards";
        document.getElementById('danny').style.animation = "0.7s disneybackout ease-out forwards";     
        
        document.getElementById('slide2').style.backgroundColor = "white";
        document.getElementById('slide3').style.backgroundColor = "transparent";
    }
    
    if (slide == 3){
        document.getElementById('danny').style.animation = "0.7s 0.7s disneybackin ease-out forwards";
        document.getElementById('laste').style.animation = "0.7s disneybackout ease-out forwards";     
        
        document.getElementById('slide3').style.backgroundColor = "white";
        document.getElementById('slide4').style.backgroundColor = "transparent";
    }
}






const auth = firebase.auth();
const login = document.getElementById('login');
const signup = document.getElementById('register');


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


signup.addEventListener('click', e=> {
  
    if(validateEmail(email.value)){
        document.getElementById("error").innerHTML = "Registration is closed due to covid"
    }else{
        document.getElementById("error").innerHTML = "Email is badly formatted"
        return
    }
  });
 
