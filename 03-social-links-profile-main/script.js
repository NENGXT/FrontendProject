const address = document.getElementById("address");
address.textContent = "Loading...";
// 获取位置信息
async function getLocation() {
    try {
        const response = await fetch("https://api.ip.sb/geoip/"); // 使用 ipapi.co 获取位置信息
        const data = await response.json(); // 解析 JSON 数据
        console.log(data);
        const locationText = `${data.region}, ${data.country}`; // 构建地址文本
        address.textContent = locationText;
    } catch (error) {
        address.textContent = "无法获取位置信息";
        console.error("获取位置信息失败:", error);
    }
}

// 页面加载时获取位置信息
getLocation();
