//获得DOM元素
const socailCard = document.querySelector(".social-card");
const shareIcon = document.querySelector(".share-icons");
let isShare = false;
//

//添加事件监听器
shareIcon.addEventListener("mouseenter", () => {
    console.log("111");
    socailCard.classList.add("active");
    isShare = true;
});

socailCard.addEventListener("mouseleave", () => {
    console.log("222");
    socailCard.classList.remove("active");
});
