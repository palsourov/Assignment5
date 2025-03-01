 document.getElementById("question").addEventListener("click",function(event){
    event.preventDefault();
      window.location.href="./question.html";
    
});
 
// Background colour change
 let color=['#F4F8D3','#FBF3B9','#B7B1F2','#B9B28A','#91AC8F']
 let count=0;
 const Background=document.getElementById("Background").addEventListener("click", function(event){
    event.preventDefault();
    count++;
    if(count<color.length){ 
        document.body.style.backgroundColor= color[count];
    }
    else if(count==color.length){
        document.body.style.backgroundColor= '#F4F7FF'; 
    }
    else{
        count=0;
        document.body.style.backgroundColor= color[count]; 
    }
    
 })