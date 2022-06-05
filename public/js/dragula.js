// 利用dragula库实现拖拽
const dragula = require("dragula");
(function () {
    const off = document.querySelector('#root .recommend .songList .official .List');
    dragula([off]);
    off.querySelectorAll(".item").forEach(e => {
        e.addEventListener("touchstart", () => {
            document.querySelector("body").style.touchAction = 'pan-x';
            e.style.overflow = 'hidden';
        })
        e.addEventListener("touchend", () => {
            document.querySelector("body").style.touchAction = 'pan-x pan-y';
            e.style.overflow = 'srcoll';
        })
    });
    const expert = document.querySelector('#root .recommend .songList .expert .List');
    dragula([expert])
    expert.querySelectorAll(".item").forEach(e => {
        e.addEventListener("touchstart", () => {
            document.querySelector("body").style.touchAction = 'pan-x';
            e.style.overflow = 'hidden';
        })
        e.addEventListener("touchend", () => {
            document.querySelector("body").style.touchAction = 'pan-x pan-y';
            e.style.overflow = 'srcoll';
        })
    });
})();