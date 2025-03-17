# Frontend Mentor - 社交链接个人资料解决方案

这是 [Frontend Mentor 上的社交链接个人资料挑战](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ)的解决方案。

## 目录

-   [概述](#概述)
    -   [截图](#截图)
-   [我的开发过程](#我的开发过程)
    -   [使用的技术](#使用的技术)
    -   [学到的知识](#学到的知识)
    -   [未来的改进方向](#未来的改进方向)
    -   [参考资料](#参考资料)

## 概述

该项目的目的是构建一个响应式的博客预览卡组件，专注于在不同设备上的用户体验。

### 截图

![桌面版](./completed/desktop.png)
![移动版](./completed/moblie.jpg)

## 我的开发过程

### 使用的技术

-   响应式设计
-   Hover 效果
-   基础的 JavaScript 用于时间显示

### 学到的知识

-   如何使用 CSS Flexbox 技术来布置内容。
-   使用 `@font-face` 添加自定义字体：

    ```css
    @font-face {
        font-family: "Figtree";
        src: url("./assets/fonts/static/Figtree-Medium.ttf") format("truetype");
    }
    ```

-   如何通过简单的 JavaScript 获取和显示当前日期：

    ```javascript
    const dateYear = document.querySelector(".yr-mo");
    const currentDate = new Date().toLocaleDateString();
    dateYear.textContent = currentDate;
    ```

-   通过使用`:hover` 选择器来实现悬停效果：
    ```css
    .card-box:hover {
        box-shadow: 0.5rem 0.5rem #121212;
        transform: translate(-0.5rem, -0.5rem);
    }
    ```

### 未来的改进方向

-   学习并应用 CSS Grid 来增强布局能力。
-   探索更多关于动画效果和过渡效果的知识，提升用户体验。

### 参考资料

-   [CSS Flexbox 指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
-   [Font-Face 装载自定义字体](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
-   [获取当前日期和时间](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

---
