// 点击搜索框操作
(function () {
    const img = document.querySelector("#root .search img");
    const search = document.querySelector("#root .search .value");
    const close = document.querySelector("#root .search .close");
    let width = document.documentElement.clientWidth;
    console.log(width);
    if (width < 770) {
        search.addEventListener("focus", () => {
            search.classList.add("active");
            img.style.left = 15 + "%"
            search.style.width = 80 + "rem"
            search.style.left = 47 + "%"
            close.style.display = 'block';
        })
        search.addEventListener("blur", () => {
            search.classList.remove("active")
            img.style.left = 50 + "%"
            search.style.width = 85.0667 + "rem"
            search.style.left = 50 + "%"
            close.style.display = 'none';
        })
    } else{
        search.addEventListener("focus", () => {
            search.classList.add("active");
            img.style.left = 15 + "%"
            search.style.width = 80 + "rem"
            search.style.left = 45.5 + "%"
            close.style.display = 'block';
        })
        search.addEventListener("blur", () => {
            search.classList.remove("active")
            img.style.left = 50 + "%"
            search.style.width = 85.0667 + "rem"
            search.style.left = 50 + "%"
            close.style.display = 'none';
        })
    }

})()