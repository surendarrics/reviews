const reviews = [ {
    id:5,
    name: "Naresh kumaravel",
    job: "illustrator",
    img: "https://res.cloudinary.com/mudiladadei/image/upload/v1619088118/IMG-20210422-WA0033_ylssgk.jpg",
    text: "  I have bought my illustration here and it was lovely. the price was also very cheap, seriously it is the one of the best illustration page.",

},
{
    id: 1,
    name:" Krishna raam",
    job: "bitcoiner",
 img : "https://res.cloudinary.com/mudiladadei/image/upload/v1619081451/IMG-20210422-WA0028_cdlt85.jpg",
 text: "Deo  has a well committed CEO who is working very hard for the growth of its company I'm one of the very satisfied clients of DEO",

},

{
    id:2,
    name: "surya",
    job: "artist",
    img: "https://res.cloudinary.com/mudiladadei/image/upload/v1619081664/IMG-20210422-WA0029_xff9pn.jpg",
    text: "I bought my real madrid illustration here the quality was very awesome and their customer service is the best ever service i have ever seen",


},

{
    id:3,
    name: "Mouli",
    job: "Business man",
    img: "https://res.cloudinary.com/mudiladadei/image/upload/v1619082095/IMG-20210422-WA0030_jgxhcp.jpg" ,
    text: " i got my barcelona illiustration and it was very awesome. their quality is top notch here, thank you deo for ur wonderful service.",

},
{
    id:4,
    name: "Piyush kumar singh",
    job: "doctor",
    img: "https://res.cloudinary.com/mudiladadei/image/upload/v1619082505/IMG_20210422_143724_540_qg77ck.jpg",
    text: " just a one word review - 'simply awesome' ",

},


];
const img =  document.getElementById("person-img");
const author  =  document.getElementById("author");
const job  =  document.getElementById("job");
const info =  document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function(){
 showPerson()
});

function showPerson(person) {
    const item = reviews[currentItem];
    img.src= item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent= item.text;

}

nextBtn.addEventListener ("click", function () {
    currentItem++;
    if (currentItem> reviews.length -1){
        currentItem=0;
    }
    showPerson();
});


prevBtn.addEventListener ("click", function () {
    currentItem--;
    if (currentItem< 0){
        currentItem= reviews.length -1
    }
    showPerson(c);
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})