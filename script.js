 document.getElementById("question").addEventListener("click",function(event){
    event.preventDefault();
      window.location.href="./text.html";
});
 
// Background color change
 let color=['#F4F7FF','#F4F8D3','#FBF3B9','#B7B1F2','#B9B28A','#91AC8F']
 let count=0;
 const Background=document.getElementById("Background").addEventListener("click", function(event){
    event.preventDefault();
    count++;
    if(count<color.length){ 
        document.body.style.backgroundColor= color[count];
    } 
    else{
        count=0;
        document.body.style.backgroundColor= color[count]; 
    }
    
 })
//  date section

const date = new Date();
const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("day").innerText =  ` ${week[date.getDay()]}`;
document.getElementById("month").innerText= `${month[date.getMonth()]} ${date.getDate()}` 

//  card section

    const pointNumber= document.getElementById('pointNumber');
    const TaskNumber= document.getElementById('TaskNumber');

    let convertedPoint= parseInt(pointNumber.innerText);
    let convertedTask=parseInt(TaskNumber.innerText);
    let number=0;
//   card1
      document.getElementById("completedButton1").addEventListener("click",function (event) {  
        event.preventDefault();
        number++;

        if(number ==1){
            alert("  board upload successfully");
             
        }
            
    
         
         convertedPoint = convertedPoint+1;
         convertedTask = convertedTask-1;
         document.getElementById("pointNumber").innerText=convertedPoint;
         document.getElementById("TaskNumber").innerText=convertedTask; 
    
       const text = document.getElementById("card1").innerText;
       const tag = document.createElement("h1");
       let now = new Date();
       tag.innerText=`you have completed task ${text} at ${now.toLocaleTimeString()}`;
       tag.classList.add('mt-5');
       tag.classList.add('bg-[#F4F7FF]');
       tag.classList.add('p-2');
       document.getElementById("activity").appendChild(tag);
    
    // button disabled
    let completed1=document.getElementById("completedButton1");
    completed1.disabled=true;
    completed1.classList.add("bg-gray-400");
    completed1.classList.add("text-gray");
    completed1.classList.remove("bg-[#3752FD]");
    completed1.classList.remove("hover:bg-sky-500");
    completed1.classList.remove("text-[#ffff]");   
    
    });
// card2
 document.getElementById("completedButton2").addEventListener("click",function (event) {  
        number++;
        if(number ==2){
            alert("board upload successfully");
        }
        
         convertedPoint = convertedPoint+1;
         convertedTask = convertedTask-1;
         document.getElementById("pointNumber").innerText=convertedPoint;
         document.getElementById("TaskNumber").innerText=convertedTask; 

       const text = document.getElementById("card2").innerText;
       const tag = document.createElement("h1");
       let now = new Date();
       tag.innerText=`you have completed task ${text} at ${now.toLocaleTimeString()}`;
       tag.classList.add('mt-5');

       tag.classList.add('bg-[#F4F7FF]');
       tag.classList.add('p-2');
       document.getElementById("activity").appendChild(tag);

    // button disabled
    let completed2=document.getElementById("completedButton2");
    completed2.disabled=true;
    completed2.classList.add("bg-gray-400");
    completed2.classList.add("text-gray");
    completed2.classList.remove("bg-[#3752FD]");
    completed2.classList.remove("hover:bg-sky-500");
    completed2.classList.remove("text-[#ffff]");   

});
// card3
 document.getElementById("completedButton3").addEventListener("click",function (event) {  
    number++;
    if(number ==3){
        alert(" board upload successfully");
    }
    

     
     convertedPoint = convertedPoint+1;
     convertedTask = convertedTask-1;
     document.getElementById("pointNumber").innerText=convertedPoint;
     document.getElementById("TaskNumber").innerText=convertedTask; 

   const text = document.getElementById("card3").innerText;
   const tag = document.createElement("h1");
   let now = new Date();
   tag.innerText=`you have completed task ${text} at ${now.toLocaleTimeString()}`;
   tag.classList.add('mt-5');
   tag.classList.add('bg-[#F4F7FF]');
   tag.classList.add('p-2');
   document.getElementById("activity").appendChild(tag);

// button disabled
let completed3=document.getElementById("completedButton3");
completed3.disabled=true;
completed3.classList.add("bg-gray-400");
completed3.classList.add("text-gray");
completed3.classList.remove("bg-[#3752FD]");
completed3.classList.remove("hover:bg-sky-500");
completed3.classList.remove("text-[#ffff]");   

});
// card4
 document.getElementById("completedButton4").addEventListener("click",function (event) {  
    number++;
    if(number ==4){
        alert("board upload successfully");
    }
    
     
     convertedPoint = convertedPoint+1;
     convertedTask = convertedTask-1;
     document.getElementById("pointNumber").innerText=convertedPoint;
     document.getElementById("TaskNumber").innerText=convertedTask; 

   const text = document.getElementById("card4").innerText;
   const tag = document.createElement("h1");
   let now = new Date();
   tag.innerText=`you have completed task ${text} at ${now.toLocaleTimeString()}`;
   tag.classList.add('mt-5');
   tag.classList.add('bg-[#F4F7FF]');
   tag.classList.add('p-2');
   document.getElementById("activity").appendChild(tag);

// button disabled
let completed4=document.getElementById("completedButton4");
completed4.disabled=true;
completed4.classList.add("bg-gray-400");
completed4.classList.add("text-gray");
completed4.classList.remove("bg-[#3752FD]");
completed4.classList.remove("hover:bg-sky-500");
completed4.classList.remove("text-[#ffff]");   

});
// card5
document.getElementById("completedButton5").addEventListener("click",function (event) {  
    number++;
    if(number ==5){
        alert("board upload successfully");
    }
    

     
     convertedPoint = convertedPoint+1;
     convertedTask = convertedTask-1;
     document.getElementById("pointNumber").innerText=convertedPoint;
     document.getElementById("TaskNumber").innerText=convertedTask; 

   const text = document.getElementById("card5").innerText;
   const tag = document.createElement("h1");
   let now = new Date();
   tag.innerText=`you have completed task ${text} at ${now.toLocaleTimeString()}`;
   tag.classList.add('mt-5');
   tag.classList.add('bg-[#F4F7FF]');
   tag.classList.add('p-2');
   document.getElementById("activity").appendChild(tag);

// button disabled
let completed5=document.getElementById("completedButton5");
completed5.disabled=true;
completed5.classList.add("bg-gray-400");
completed5.classList.add("text-gray");
completed5.classList.remove("bg-[#3752FD]");
completed5.classList.remove("hover:bg-sky-500");
completed5.classList.remove("text-[#ffff]");   

});
// card6
 const n=0;
 document.getElementById("completedButton6").addEventListener("click",function (event) {  
    number++;
    if(number ==6){
        alert("board upload successfully");
    }
    
         alert(" Congratulation!! your all board upload successfully");

     
     convertedPoint = convertedPoint+1;
     convertedTask = convertedTask-1;
     document.getElementById("pointNumber").innerText=convertedPoint;
     document.getElementById("TaskNumber").innerText=convertedTask; 

   const text = document.getElementById("card6").innerText;
   const tag = document.createElement("h1");
   let now = new Date();
   tag.innerText=`you have completed task ${text} at ${now.toLocaleTimeString()}`;
   tag.classList.add('mt-5');
   tag.classList.add('bg-[#F4F7FF]');
   tag.classList.add('p-2');
   document.getElementById("activity").appendChild(tag);

// button disabled
let completed6=document.getElementById("completedButton6");
completed6.disabled=true;
completed6.classList.add("bg-gray-400");
completed6.classList.add("text-gray");
completed6.classList.remove("bg-[#3752FD]");
completed6.classList.remove("hover:bg-sky-500");
completed6.classList.remove("text-[#ffff]");   

});


    // remove history
    document.getElementById("ClearHistory").addEventListener("click",function(){
        activity.innerText= "";
    })
 


   
    
