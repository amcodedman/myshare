export const Checkhover=(element,subcats)=>
{

const mainlayout=document.getElementById("maincatloyout")
const maincat=document.getElementById("maincat")
const catbtn=document.getElementById("catbtnid")
const layouthover=document.querySelectorAll(".presshover")

catbtn.addEventListener("mouseover",()=>{
    element(true)
    
   
})
layouthover.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
       
            element(false)
            subcats(false)

           
        })
})
if(maincat){
    maincat.addEventListener("mouseout",()=>{
        subcats(true)
    })
    
}


}