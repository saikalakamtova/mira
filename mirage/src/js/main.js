const burger = document.querySelector(".burger")
const headerList = document.querySelector(".header__list")

burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    headerList.classList.toggle("active")
    }
)
document.querySelectorAll(".header__link").forEach(n =>n.addEventListener("click",()=>{
    burger.classList.remove("active")
    headerList.classList.remove("active")
}))