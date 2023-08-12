let i;
Myfunction = (i) =>{
    let sol;
    let img;
    if(i == 1){
        sol = document.getElementById("ans1");
        img = document.getElementById("myImg1")
    } else if(i == 2){
        sol = document.getElementById("ans2");
        img = document.getElementById("myImg2")
    } else if(i == 3){
        sol = document.getElementById("ans3");
        img = document.getElementById("myImg3")
    } else if(i == 4){
        sol = document.getElementById("ans4");
        img = document.getElementById("myImg4")
    } else if(i == 5){
        sol = document.getElementById("ans5");
        img = document.getElementById("myImg5")
    } else if(i == 6){
        sol = document.getElementById("ans6");
        img = document.getElementById("myImg6")
    }

    if(sol.style.display === "none"){
        img.src = "x_img.png";
        sol.style.display = "block";
    }
    else{
        sol.style.display = "none";
        img.src = "plus_img.png";
    }

}
