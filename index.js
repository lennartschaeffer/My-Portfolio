//sidebar


function showSideBar(){
    console.log("test");
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'flex';
}

function removeSideBar(){
    console.log("remove sidebar");
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'none';
}
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//about information 

const buttons = document.querySelectorAll('.tab-buttons');
const about = document.querySelector('.about-info');
const articles = document.querySelectorAll('.content');

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        console.log(id);
        //remove active state from the other buttons
        buttons.forEach(function (btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //hide other text and display the one with matching id
        articles.forEach(function(article){
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})

