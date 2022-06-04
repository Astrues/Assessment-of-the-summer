// 点击span标签切换样式
(function () {
    const spans = document.querySelectorAll("#root .header .bottom span");
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener("click", () => {
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.remove("active");
            }
            spans[i].classList.add("active")
        })
    }
})();