const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yh_ayow_baikanBtn = document.querySelector(".yh_ayow_baikan-btn");
const gmwBtn = document.querySelector(".gmw-btn");

yh_ayow_baikanBtn.addEventListener("click" , () => {
    question.innerHTML = "OEMJIII, AKHIRNYA BAIKAN :D";
    gif.src =
     "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

gmwBtn.addEventListener("mouseover" , () => {
    const gmwBtnRect = gmwBtn.getBoundingClientRect();
    const maxX = window.innerWidth - gmwBtnRect.width;
    const maxY = window.innerHeight - gmwBtn.Height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    gmwBtn.style.left = randomX + "px";
    gmwBtn.style.top = randomY + "px";
});
