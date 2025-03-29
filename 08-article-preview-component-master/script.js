// 获得DOM元素
const socailCard = document.querySelector(".social-card-moblie");
const shareIcon = document.querySelector(".share-icons");
const shareArrow = document.querySelector(".share-icons-arrow");

// 存储定时器ID
let hideTimeout;

// 显示卡片
const showCard = function () {
    socailCard.classList.add("active");
    shareArrow.classList.add("icon-white");
    shareIcon.classList.add("share-icons-black");
};

// 隐藏卡片
const hideCard = function () {
    socailCard.classList.remove("active");
    shareArrow.classList.remove("icon-white");
    shareIcon.classList.remove("share-icons-black");
};

// 当鼠标进入按钮时，显示气泡
shareIcon.addEventListener("mouseenter", () => {
    showCard();

    // 如果卡片已经在显示中，清除之前的定时器
    clearTimeout(hideTimeout);
});

// 当鼠标移出按钮时，延迟隐藏气泡
shareIcon.addEventListener("mouseleave", () => {
    // 设置延迟隐藏卡片
    hideTimeout = setTimeout(() => {
        hideCard();
    }, 500); // 延迟时间（可以根据需要调整）
});

// 当鼠标进入气泡时，取消隐藏的定时器
socailCard.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
});

// 当鼠标离开气泡时，延迟隐藏气泡
socailCard.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
        hideCard();
    }, 500); // 延迟时间（可以根据需要调整）
});
