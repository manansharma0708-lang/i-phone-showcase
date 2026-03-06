const sections = document.querySelectorAll(".section")

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible")
}
})
})

sections.forEach(section=>{
observer.observe(section)
})

window.addEventListener("scroll",()=>{
const phone = document.querySelector(".hero-phone")
phone.style.transform =
`translateY(${window.scrollY * 0.2}px)`
})
