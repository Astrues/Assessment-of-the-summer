// 拖拽歌单顺序
(function () {
    setTimeout(() => {
        // 获得所有歌单
        const songs = document.querySelectorAll('#root .recommend .songList .song .List .item');
        console.log(songs);
        // 点击某个歌单获得它的位置
        for (let i = 0; i < songs.length; i++) {
            songs[i].addEventListener("touchstart", function (e) {
                console.log(this);
                console.log(e);
                // 获得当前歌单在浏览器可视窗口的水平竖直距离
                const divX = this.offsetLeft;
                const divY = this.offsetTop;
                // 获得触摸处在浏览器可视窗口的水平竖直距离
                const mouseX = e.offsetLeft;
                const mouseY = e.offsetTop;
                // 触摸移动事件
                document.addEventListener("touchmove", function (e) {
                    // 获取移动后的水平竖直偏移量
                    const disX = e.clientX - mouseX;
                    const disY = e.clientY - mouseY;
                    // 移动歌单：移动前位置+鼠标移动的距离
                    songs[i].style.left = disX + divX + 'px'
                    songs[i].style.top = disY + divY + 'px'
                    console.log(songs[i].style.left);
                })
                // 触摸结束事件
                document.addEventListener("touchend", function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                })
            })
        }
    }, 100);
})();