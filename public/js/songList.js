const axios = require("axios").default;
(async function () {
    const data = (await axios.get("http://124.221.249.219:8000/api/recommendations")).data
    // 操作官方歌单
    const off = data.offical;
    const official = document.querySelector("#root .recommend .songList .official .List");
    render(official, off)
    // 操作达人歌单
    const tat = data.tatsujin;
    const tatsujin = document.querySelector("#root .recommend .songList .expert .List");
    render(tatsujin, tat);
    // 操作专区
    const col = data.column;
    const column =document.querySelector("#root .recommend .songList .prefecture .List")
    for (let i = 0; i < col.length; i++) {
        const li = document.createElement("li");
        li.className = 'item';
        const img = document.createElement("img");
        img.src = col[i].background;

        const div = document.createElement("div");
        div.className = 'num';
        const imgSmall = document.createElement("img")
        imgSmall.src = col[i].icon;
        const span = document.createElement("span");
        span.innerHTML = col[i].title;
        div.appendChild(imgSmall);
        div.appendChild(span)

        const h3 = document.createElement("h3");
        h3.innerHTML = col[i].description;
        li.appendChild(img)
        li.appendChild(div)
        li.appendChild(h3)
        column.appendChild(li)
    }
})();

function render(obj, data) {
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");
        li.className = 'item';
        const img = document.createElement("img");
        img.src = data[i].cover;
        const div = document.createElement("div");
        div.className = 'num';
        div.innerHTML = `▶${data[i].views}万`;
        const h3 = document.createElement("h3");
        h3.innerHTML = data[i].title;
        li.appendChild(img)
        li.appendChild(div)
        li.appendChild(h3)
        obj.appendChild(li)
    }
}