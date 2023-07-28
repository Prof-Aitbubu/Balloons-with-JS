const arrayImg= document.querySelectorAll('.img-wrapper')

arrayImg.forEach((img) =>{
    img.addEventListener('click', () => {
        img.classList.toggle('bg-red')
    })
})

arrayImg.forEach((img) =>{
    setTimeout(() => {
        img.classList.remove('bg-red')
    }, 2000)
})
function displaybgimage() {
    var img1=document.getElementById("check-option8");
    var bg = document.getElementById("container");
    var dolphin1=document.getElementById("dolphin2");
    if(img1.checked){
        bg.innerHTML=dolphin1;
    }


}