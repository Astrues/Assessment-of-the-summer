const axios = require("axios").default;
// 监听搜索事件
let songArr = [];
let newArr = [];
(async function () {
    const search = document.querySelector("#root .recommend .value")
    const grep = document.querySelector("#root .recommend .grep");
    const hotSearch = document.querySelector("#root .recommend .hotSearch")
    const List = document.querySelector("#root .recommend .grep .List");
    const close = document.querySelector("#root .recommend .hotSearch .history .close");
    const pre = hotSearch.querySelector(".history .HisList");
    search.addEventListener("focus", () => {
        grep.style.display = 'none'
        window.addEventListener("keydown", async (e) => {
            // 如果搜索框不为空且按下的是确定键就进行搜索
            if (search.value !== '' && e.key === 'Enter') {
                hotSearch.querySelector(".history").style.display = 'block'
                // 创造DOM节点
                let song = search.value;
                const songs = (await axios.get(`http://124.221.249.219:8000/api/search?keyword=${song}`)).data
                render(song, songs);
                search.value = ''
            }
        })
        const items = pre.querySelectorAll(".item")
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("click", async () => {
                hotSearch.querySelector(".history").style.display = 'block'
                // 创造DOM节点
                let song = items[i].textContent;
                const songs = (await axios.get(`http://124.221.249.219:8000/api/search?keyword=${song}`)).data
                render(song, songs)
            })
        }
        // 判断有没有历史记录，没有的话，隐藏历史
        if (localStorage.length == 0) {
            hotSearch.style.display = 'none';
        }
    })
    // 点击垃圾桶清空历史记录并删除本地储存
    close.addEventListener("click", () => {
        pre.innerHTML = '';
        localStorage.clear();
        close.parentElement.style.display = 'none';
    })
    // 页面加载时就查询本地是否有搜索记录，有就添加节点,并把内容添加到newArr里面
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            songArr.push(value);
            let li = document.createElement("li");
            li.className = 'item';
            li.innerHTML = value;
            pre.appendChild(li);
        }
        console.log(hotSearch.querySelector(".history"));
        hotSearch.querySelector(".history").style.display = 'block'
    }
    // 点击热门搜索里面的内容进行搜索
    setTimeout(() => {
        const items = document.querySelectorAll("#root .recommend .hotSearch .List .item");
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener("click", async () => {
                hotSearch.querySelector(".history").style.display = 'block'
                // 创造DOM节点
                let song = items[i].textContent;
                const songs = (await axios.get(`http://124.221.249.219:8000/api/search?keyword=${song}`)).data
                render(song, songs)
            })
        }
    }, 100);

})();

function render(song, songs) {
    const grep = document.querySelector("#root .recommend .grep");
    const hotSearch = document.querySelector("#root .recommend .hotSearch")
    const List = document.querySelector("#root .recommend .grep .List");
    const pre = hotSearch.querySelector(".history .HisList");
    for (let i = 0; i < songs.length; i++) {
        const li = document.createElement("li");
        li.className = 'item';
        for (let j = 0; j < 2; j++) {
            const p = document.createElement("p")
            li.appendChild(p)
        }
        List.appendChild(li)
        List.querySelectorAll(".item")[i].querySelectorAll("p")[0].innerHTML = songs[i].title;
        List.querySelectorAll(".item")[i].querySelectorAll("p")[1].innerHTML = songs[i].artist;
    }
    grep.style.display = 'block'
    hotSearch.style.display = 'none';
    // 搜索后将记录保存到localStorage里面 并添加接节点
    songArr.unshift(song)
    // set去重
    newArr = Array.from(new Set(songArr));
    console.log(newArr);
    localStorage.clear();
    for (let i = 0; i < newArr.length; i++) {
        localStorage.setItem(i, newArr[i]);
    }
    // 创建并插入子节点
    pre.innerHTML = '';
    for (let i = 0; i < newArr.length; i++) {
        const li = document.createElement("li");
        li.className = 'item';
        li.innerHTML = newArr[i];
        pre.appendChild(li)
    }
}