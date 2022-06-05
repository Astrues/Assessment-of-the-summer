// 利用dragula库实现拖拽
const dragula = require("dragula");
(function () {
    const off = document.querySelector('#root .recommend .songList .official .List');
    const drake1 = dragula([off]);
    const drake2 = expert = document.querySelector('#root .recommend .songList .expert .List');
    dragula([expert])
    console.log(drake1);
    setTimeout(() => {
        const o = off.querySelectorAll(".item");
        const e = expert.querySelectorAll(".item");
        o.forEach(e => {
            e.addEventListener("touchstart", (i) => {
                off.style.overflow = 'hidden'
                let x = i.changedTouches[0].clientX
                let y = i.changedTouches[0].clientY
            });
            e.addEventListener("touchend", () => {
                off.style.overflow = 'scroll';
            })
        });
        e.forEach(e => {
            e.addEventListener("touchstart", () => {
                off.style.overflow = 'hidden'
            });
            e.addEventListener("touchend", () => {
                off.style.overflow = 'scroll';
            })
        });
    }, 200);
})();