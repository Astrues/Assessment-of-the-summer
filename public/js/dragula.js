// 利用dragula库实现拖拽
const dragula = require("dragula");
(function () {
    const off = document.querySelector('#root .recommend .songList .official .List');
    dragula([off]);
    const expert = document.querySelector('#root .recommend .songList .expert .List');
    dragula([expert])
    const rank = document.querySelector("#root .rank .List");
    dragula([rank]);
    setTimeout(() => {
        const o = off.querySelectorAll(".item");
        const t = expert.querySelectorAll(".item");
        const j = rank.querySelectorAll(".item");
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
        for (let i = 0; i < j.length; i++) {
            j[i].addEventListener("touchstart", () => {
                rank.style.overflow = 'visible'
            });
            j[i].addEventListener("touchend", () => {
                rank.style.overflow = 'scroll';
            })
        }
    }, 200);

})();