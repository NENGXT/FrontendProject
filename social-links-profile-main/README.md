# Frontend Mentor - 社交链接个人资料解决方案

这是 [Frontend Mentor 上的社交链接个人资料挑战](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ)的解决方案。

## 目录

-   [概述](#概述)
    -   [截图](#截图)
-   [我的开发过程](#我的开发过程)
    -   [使用的技术](#使用的技术)
    -   [学到的知识](#学到的知识)
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
-   基础的 JavaScript 用于地理位置信息

### 学到的知识

-   练习 CSS 技术来布置内容。
-   使用 `outline` 来添加不影响布局的边框。

    ```css
    .social-link-btn:hover {
        color: hsl(75, 94%, 57%);
        background-color: hsl(0, 0%, 10%);
        outline: 1px solid hsl(75, 94%, 57%);
    }
    ```

-   通过调用 `fetch` API 获取地理位置信息，并将其显示在页面上。

    ```javascript
    async function getLocation() {
        try {
            const response = await fetch("http://ip-api.com/json/");
            const data = await response.json();
            const locationText = `${data.regionName}, ${data.country}`;
            address.textContent = locationText;
        } catch (error) {
            address.textContent = "无法获取位置信息";
            console.error("获取位置信息失败:", error);
        }
    }
    ```

### 参考资料

-   [ip-api.com](https://ip-api.com/)
-   [Bootstrap Icons](https://icons.getbootstrap.com/)

---

# Frontend Mentor - Social Links Profile Solution

This is a solution to the [Social Links Profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ).

## Table of Contents

-   [Overview](#overview)
    -   [Screenshots](#screenshots)
-   [My Development Process](#my-development-process)
    -   [Technologies Used](#technologies-used)
    -   [Lessons Learned](#lessons-learned)
    -   [References](#references)

## Overview

The purpose of this project is to build a responsive blog preview card component, focusing on user experience across different devices.

### Screenshots

![Desktop Version](./completed/desktop.png)
![Mobile Version](./completed/moblie.jpg)

## My Development Process

### Technologies Used

-   Responsive Design
-   Hover Effects
-   Basic JavaScript for geolocation information

### Lessons Learned

-   Practiced CSS techniques for layout.
-   Used `outline` to add a border effect without affecting the layout.

    ```css
    .social-link-btn:hover {
        color: hsl(75, 94%, 57%);
        background-color: hsl(0, 0%, 10%);
        outline: 1px solid hsl(75, 94%, 57%);
    }
    ```

-   Used the `fetch` API to retrieve geolocation information and display it on the page.

    ```javascript
    async function getLocation() {
        try {
            const response = await fetch("http://ip-api.com/json/");
            const data = await response.json();
            const locationText = `${data.regionName}, ${data.country}`;
            address.textContent = locationText;
        } catch (error) {
            address.textContent = "Unable to retrieve location information";
            console.error("Failed to get location:", error);
        }
    }
    ```

### References

-   [ip-api.com](https://ip-api.com/)
-   [Bootstrap Icons](https://icons.getbootstrap.com/)

---
