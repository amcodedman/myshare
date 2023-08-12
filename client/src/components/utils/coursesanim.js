export const showascen = () => {
    const container = document.querySelectorAll(".layoutspac");
    const containerv = document.querySelectorAll(".layoutspacv");


    container.forEach((child,index) => {
        const prevSibling = child.previousElementSibling;
    console.log(`index ${index}`)
        if (index>0 && prevSibling ){



            setInterval(()=>{
              if(prevSibling.classList.contains("showspac")) {
                    if (child.getBoundingClientRect().top < window.innerHeight) {
                        setInterval(() => {
                            if (!child.classList.contains("showspac")) {
                                child.classList.add("showspac");
                            }
                        }, 250);
                    }
                }
            },250

            )
        }
        else{
            if (child.getBoundingClientRect().top < window.innerHeight) {
           
                    if (!child.classList.contains("showspac")) {
                        child.classList.add("showspac");
                    }
            
            }
        }
       
    })
  window.addEventListener("scroll", () => {
 

    container.forEach((child,index) => {
        const prevSibling = child.previousElementSibling;
    console.log(`index ${index}`)
        if (index>0 && prevSibling ){



            setInterval(()=>{
              if(prevSibling.classList.contains("showspac")) {
                    if (child.getBoundingClientRect().top < window.innerHeight) {
                        setInterval(() => {
                            if (!child.classList.contains("showspac")) {
                                child.classList.add("showspac");
                            }
                        }, 250);
                    }
                }
            },250

            )
        }
        else{
            if (child.getBoundingClientRect().top < window.innerHeight) {
           
                    if (!child.classList.contains("showspac")) {
                        child.classList.add("showspac");
                    }
            
            }
        }
       
    })
  });




  

};














export const showcoursesm = () => {
  
    const containerv = document.querySelectorAll(".layoutspacv");


  
  



window.addEventListener("scroll", () => {


containerv.forEach((child,index) => {
    const prevSibling = child.previousElementSibling;
console.log(`index ${index}`)
    if (index>0 && prevSibling ){



        setInterval(()=>{
          if(prevSibling.classList.contains("showspac")) {
                if (child.getBoundingClientRect().top < window.innerHeight) {
                    
                        if (!child.classList.contains("showspac")) {
                            child.classList.add("showspac");
                        }
                  
                }   
            }
        },500

        )
    }
    else{
        if (child.getBoundingClientRect().top < window.innerHeight) {
       
                if (!child.classList.contains("showspac")) {
                    child.classList.add("showspac");
                }
        
        }
    }
   
})
});
};
