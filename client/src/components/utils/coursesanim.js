export const showascen = () => {
    const container = document.querySelectorAll(".layoutspac");
  


    container.forEach((child,index) => {
        const prevSibling = child.previousElementSibling;
   
        if(index===0){
            if (child.getBoundingClientRect().top < window.innerHeight) {
   
                if (!child.classList.contains("showspac")) {
                    child.classList.add("showspac");
                }
        
        }
        }


        if (index>0 && prevSibling ){


            setInterval(()=>{

              if(prevSibling.classList.contains("showspac")) {
                    if (child.getBoundingClientRect().top < window.innerHeight) {
                        setInterval(() => {
                            if (!child.classList.contains("showspac")) {
                                child.classList.add("showspac");
                            }
                        }, 400);
                    }
                }
            },200

            )
        }
     
       
    })
  window.addEventListener("scroll", () => {
 

    container.forEach((child,index) => {
        const prevSibling = child.previousElementSibling;
        if(index===0){
            if (child.getBoundingClientRect().top < window.innerHeight) {
   
                if (!child.classList.contains("showspac")) {
                    child.classList.add("showspac");
                }
        
        }
        }

        if (index>0 && prevSibling ){
            


         
            setInterval(()=>{

              if(prevSibling.classList.contains("showspac")) {
                    if (child.getBoundingClientRect().top < window.innerHeight) {
                        setInterval(() => {
                            if (!child.classList.contains("showspac")) {
                                child.classList.add("showspac");
                            }
                        }, 500);
                    }
                }
            },500

            )
        }
     
       
    })
  });




  

};














export const showcoursesm = () => {
  
    const containerv = document.querySelectorAll(".layoutspacv");

    containerv.forEach((child,index) => {
        const prevSibling = child.previousElementSibling;
    
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

window.addEventListener("scroll", () => {


containerv.forEach((child,index) => {
    const prevSibling = child.previousElementSibling;

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
