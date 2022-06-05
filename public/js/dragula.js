// 利用dragula库实现拖拽
const dragula = require("dragula");
(function () {
    const off = document.querySelector('#root .recommend .songList .official .List');
    dragula([off]);
    const expert = document.querySelector('#root .recommend .songList .expert .List');
    dragula([expert])
    setTimeout(() => {
        const o = off.querySelectorAll(".item");
        const t = expert.querySelectorAll(".item");
        for (let i = 0; i < o.length; i++) {
            o[i].addEventListener("touchstart", () => {
                off.style.overflow = 'hidden'
            });
            o[i].addEventListener("touchend", () => {
                off.style.overflow = 'scroll';
            })
        }
        for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("touchstart", () => {
                expert.style.overflow = 'hidden'
            });
            t[i].addEventListener("touchend", () => {
                expert.style.overflow = 'scroll';
            })
        }
    }, 200);

})();