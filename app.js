document.querySelectorAll(".navButton").forEach(
    (icon)=>{
        icon.addEventListener("click",(e)=>{
            
            document.querySelectorAll(".navButton").forEach(
                (icon)=>{
                    if(icon.className.includes("active")){
                        icon.classList.remove("active");
                    }
                }
            )
          
        if(e.target.className.includes("navButton")){
            e.target.classList.add("active")
        }
          else{
            console.log(         e.target.parentElement);
            e.target.parentElement.classList.add("active")
          }
        })
    }
)