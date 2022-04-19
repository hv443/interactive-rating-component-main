
const submit = document.querySelector(".submit")
const back = document.querySelector(".back-btn")
const rate = document.querySelector(".rate")
const frontCard = document.querySelector(".front-card")
const thanksCard = document.querySelector(".thanks-card")


const rating = document.querySelectorAll(".rating-numbers")




let val;

rating.forEach(element => {
    
    element.addEventListener('click',(e)=>{
        
    rating.forEach(rated=>{
            if(e.target.innerHTML == rated.innerHTML){
        rated.classList.add('color')
        rated.classList.remove('initial-color')
        let val = rated.innerHTML
        rate.innerHTML = val

        }

        else{
          
            rated.classList.remove('color')
            rated.classList.add('initial-color')
        }
        })
    })
  
});




submit.addEventListener('click',()=>{
 
       
    // frontCard.style.display = 'none'
    // thanksCard.style.display = 'flex'
    
    frontCard.style.scale = '0'
    thanksCard.style.scale = '1'
    

})


back.addEventListener('click',()=>{
  
    // frontCard.style.display = 'flex'
    // thanksCard.style.display = 'none'
    frontCard.style.scale = '1'
    thanksCard.style.scale = '0'

})



