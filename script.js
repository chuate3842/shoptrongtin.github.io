const menuIcon = document.querySelector('.menu')
const menuList = document.querySelector('.menu-list')

let i=0
menuIcon.addEventListener('click',()=>{
    i++
    if (i%2==1) {
        menuList.style.display="flex"
    }
    else {
        menuList.style.display="none"
    }
    console.log(i)
})
