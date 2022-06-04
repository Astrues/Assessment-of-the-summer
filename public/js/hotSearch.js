const axios = require("axios").default;

// 热门搜索
(async function () {
    const search = document.querySelector("#root .recommend .value")
    const song = document.querySelector("#root .recommend .songList");
    const hot = document.querySelector("#root .recommend .hotSearch")
    const grep = document.querySelector("#root .recommend .grep");
    const close = document.querySelector("#root .recommend .search .close")
    search.addEventListener("click", () => {
        song.style.display = 'none'
        hot.style.display = 'block';
    })
    close.addEventListener("click", () => {
        hot.style.display = 'none';
        song.style.display = 'block'
        close.style.display = 'none';
        grep.style.display = 'none'
        search.value = '';
    })
    const data = (await axios.get("http://124.221.249.219:8000/api/hot")).data
    const list = hot.querySelector(".List");
    for (let i = 0; i < data.length; i++) {
        const a = document.createElement("a");
        a.className = 'item';
        a.innerHTML = data[i];
        list.appendChild(a);
    }
})();