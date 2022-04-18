
const submit = document.querySelector(".submit")
const back = document.querySelector(".back-btn")
const rate = document.querySelector(".rate")
const frontCard = document.querySelector(".front-card")
const thanksCard = document.querySelector(".thanks-card")


const rating = document.querySelectorAll(".rating-numbers")


// const  = document.querySelector(".card-ratings")

let val;

rating.forEach(element => {
    
    element.addEventListener('click',(e)=>{
        
    rating.forEach(rated=>{
            if(e.target.innerHTML == rated.innerHTML){
        rated.style.backgroundColor="grey"
        rated.style.color="white"
        // console.log(rated.innerHTML)
        let val = rated.innerHTML
        rate.innerHTML = val

        }
        else{
            rated.style.backgroundColor="hsl(213, 19%, 24%)"
            rated.style.color="hsl(217, 12%, 63%)"
        }
        })
    })
  
});









submit.addEventListener('click',()=>{
 
       
        frontCard.style.display = 'none'
        thanksCard.style.display = 'block'

})


back.addEventListener('click',()=>{
  
    frontCard.style.display = 'block'
    thanksCard.style.display = 'none'
  
  
})


