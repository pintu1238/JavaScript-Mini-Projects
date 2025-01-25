const endDate="22 January 2025 10:00 AM"

document.getElementById("enddate").innerText=endDate;
const inputs=document.querySelectorAll("input")

//function
function clock()
{
    const end=new Date(endDate);//converted into miliseconds
    const now=new Date()
    const diff=(end-now)/1000;//output is inthe form of seconds

    if(diff < 0) return;


    //convert miliseconds into days
    inputs[0].value=Math.floor(diff/3600/24);
    //convert into hours
    inputs[1].value=Math.floor((diff/3600)%24);
    //convert into minutes
    inputs[3].value=Math.floor(diff%60);
    //convert into seconds
    

}

//function call
clock()


setInterval(
    ()=>{
        clock()
    },
    1000
);