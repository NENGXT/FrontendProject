"use strict";
const sumbitBtn = document.querySelector(".card-submit");
const dissmissBtn = document.querySelector(".card-submit-dissmiss");
const input = document.querySelector(".card-email");
const labelBox = document.querySelector(".card-label-box");
const cardLeft = document.querySelector(".card-left");
const cardRight = document.querySelector(".card-right");
const sucessessSection = document.querySelector(".card-susceess");

//状态切换显示函数
const displayErrorMessge = function () {
    const errorElement = document.querySelector(".error-msg");
    const isCorrectEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    //输入错误时显示错误信息
    if (!isCorrectEmail && !errorElement) {
        const errorHtml = `<p class="card-label-text error-msg">
                            Please provide a valid email address.
                        </p>`;
        labelBox.insertAdjacentHTML("beforeend", errorHtml);
        input.style.outlineColor = "var(--color-red)";
        input.style.backgroundColor = `var(--color-light-red)`;
        input.classList.add("red-placeholder");
    }
    // 显示成功消息
    if (isCorrectEmail) {
        sucessessSection.classList.toggle("susceess-hidden");
        cardLeft.classList.toggle("hidden");
        cardRight.classList.toggle("hidden");
    }
    input.value = "";
};

sumbitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    displayErrorMessge();
});

dissmissBtn.addEventListener("click", () => {
    sucessessSection.classList.toggle("susceess-hidden");
    cardLeft.classList.toggle("hidden");
    cardRight.classList.toggle("hidden");
    // 可选：清除错误提示和样式
    input.value = "";
    input.classList.remove("red-placeholder");
    input.style.outlineColor = "";
    input.style.backgroundColor = "";
    const errorElement = document.querySelector(".error-msg");
    if (errorElement) errorElement.remove();
});
