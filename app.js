let boxe=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
turn0=false;
boxe.forEach((box)=>
{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0)
        {
            box.innerText ="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
    });
});