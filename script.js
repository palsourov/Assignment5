 document.getElementById("question").addEventListener("click",function(event){
    event.preventDefault();
      window.location.href="./question.html";
    
});
 
// Background colour change
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

//  card section

    const pointNumber= document.getElementById('pointNumber');
    const TaskNumber= document.getElementById('TaskNumber');

    let convertedPoint= parseInt(pointNumber.innerText);
    let convertedTask=parseInt(TaskNumber.innerText);
    let number=0;
    function completed() {
        number++;
        alert(" board upload successfully");
        if(number == 6){
            alert("all board upload successfully");
        }         
        convertedPoint = convertedPoint+1;
        convertedTask = convertedTask-1;
         document.getElementById("pointNumber").innerText=convertedPoint;
         document.getElementById("TaskNumber").innerText=convertedTask;    
                   
    }
   
    
