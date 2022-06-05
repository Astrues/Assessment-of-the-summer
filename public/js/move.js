// 拖拽歌单顺序
(function () {
    setTimeout(() => {
        // 获得所有歌单
        let width = document.documentElement.clientWidth;
        let left = 0;
        // console.log(songs, List);
        // 点击某个歌单获得它的位置
        // for (let i = 0; i < songs.length; i++) {
        //     songs[i].addEventListener("touchstart", function (e) {
        //         console.log(songs);
        //         const List = document.querySelectorAll('#root .recommend .songList .song .List');
        //         let img = songs[i].querySelector("img").src;
        //         let num = songs[i].querySelector(".num").textContent;
        //         let h3 = songs[i].querySelector("h3").textContent;

        //         // 创建一个新盒子
        //         const li = document.createElement("li");
        //         li.className = 'item';
        //         const image = document.createElement("img");
        //         image.src = img;
        //         const div = document.createElement("div");
        //         div.className = 'num';
        //         div.innerHTML = num;
        //         const title = document.createElement("h3");
        //         title.innerHTML = h3;
        //         li.appendChild(image)
        //         li.appendChild(div)
        //         li.appendChild(title);
        //         console.log(li);
        //         List[0].style.overflow = 'hidden'
        //         List[1].style.overflow = 'hidden'
        //         // 获得当前歌单在浏览器可视窗口的水平距离
        //         const divX = this.offsetLeft;
        //         const divY = this.offsetTop;


        //         // 获得触摸处在浏览器可视窗口的水平竖直距离
        //         const mouseX = e.changedTouches[0].clientX;
        //         // 触摸移动事件
        //         document.addEventListener("touchmove", function (e) {
        //             // 获取移动后的水平竖直偏移量
        //             const disX = e.changedTouches[0].clientX - mouseX;
        //             // 移动歌单：移动前位置+鼠标移动的距离
        //             left = divX + disX;
        //         })
        //         // 触摸结束事件
        //         document.addEventListener("touchend", function () {
        //             songs[i].remove();
        //             console.log(width, divY);
        //             if (width > 770 && divY < 120) {
        //                 console.log(1);
        //                 const index = parseInt(left / 120)
        //                 List[0].insertBefore(li, List[0].children[index]);
        //             }
        //             if (width < 770 && divY < 120) {
        //                 console.log(2);
        //                 console.log(left);
        //                 const index = parseInt(left / 200)
        //                 List[0].insertBefore(li, List[0].children[index]);
        //             }
        //             if (width > 770 && divY > 200) {
        //                 console.log(3);
        //                 const index = parseInt(left / 120)
        //                 List[1].insertBefore(li, List[1].children[index]);
        //             }
        //             if (width < 770 && divY > 200) {
        //                 console.log(4);
        //                 const index = parseInt(left / 200)
        //                 List[1].insertBefore(li, List[1].children[index]);
        //             }
        //             List[0].style.overflow = 'scroll'
        //             List[1].style.overflow = 'scroll'
        //             document.onmousemove = null;
        //             document.onmouseup = null;
        //         })
        //     })
        // }
        // 获得官方歌单
        let off = document.querySelectorAll('#root>.recommend>.songList>.official>.List>.item');
        off.forEach(event => {
            event.addEventListener("touchstart", function (e) {
                const List = document.querySelectorAll('#root .recommend .songList .song .List');
                let img = event.querySelector("img").src;
                let num = event.querySelector(".num").textContent;
                let h3 = event.querySelector("h3").textContent;

                // 创建一个新盒子
                const li = document.createElement("li");
                li.className = 'item';
                const image = document.createElement("img");
                image.src = img;
                const div = document.createElement("div");
                div.className = 'num';
                div.innerHTML = num;
                const title = document.createElement("h3");
                title.innerHTML = h3;
                li.appendChild(image)
                li.appendChild(div)
                li.appendChild(title);
                List[0].style.overflow = 'hidden'
                // 获得当前歌单在浏览器可视窗口的水平距离
                const divX = this.offsetLeft;
                const divY = this.offsetTop;
                // 获得触摸处在浏览器可视窗口的水平竖直距离
                const mouseX = e.changedTouches[0].clientX;
                // 触摸移动事件
                document.addEventListener("touchmove", function (e) {
                    // 获取移动后的水平竖直偏移量
                    const disX = e.changedTouches[0].clientX - mouseX;
                    // 移动歌单：移动前位置+鼠标移动的距离
                    left = divX + disX;
                })
                // 触摸结束事件
                document.addEventListener("touchend", function () {
                    event.remove();
                    if (width > 770 && divY < 120) {
                        const index = parseInt(left / 120)
                        List[0].insertBefore(li, List[0].children[index]);
                    }
                    if (width < 770 && divY < 120) {
                        console.log(2);
                        console.log(left);
                        const index = parseInt(left / 200)
                        List[0].insertBefore(li, List[0].children[index]);
                    }
                    List[0].style.overflow = 'scroll'
                    document.onmousemove = null;
                    document.onmouseup = null;
                })
                off = document.querySelectorAll('#root .recommend .songList .official .List .item');
            })
        });
        let expert = document.querySelectorAll('#root>.recommend>.songList>.expert>.List>.item');
        console.log(expert);
        expert.forEach(event => {
            event.addEventListener("touchstart", function (e) {
                const List = document.querySelectorAll('#root .recommend .songList .song .List');
                let img = event.querySelector("img").src;
                let num = event.querySelector(".num").textContent;
                let h3 = event.querySelector("h3").textContent;

                // 创建一个新盒子
                const li = document.createElement("li");
                li.className = 'item';
                const image = document.createElement("img");
                image.src = img;
                const div = document.createElement("div");
                div.className = 'num';
                div.innerHTML = num;
                const title = document.createElement("h3");
                title.innerHTML = h3;
                li.appendChild(image)
                li.appendChild(div)
                li.appendChild(title);
                List[1].style.overflow = 'hidden'
                // 获得当前歌单在浏览器可视窗口的水平距离
                const divX = this.offsetLeft;
                const divY = this.offsetTop;
                // 获得触摸处在浏览器可视窗口的水平竖直距离
                const mouseX = e.changedTouches[0].clientX;
                // 触摸移动事件
                document.addEventListener("touchmove", function (e) {
                    // 获取移动后的水平竖直偏移量
                    const disX = e.changedTouches[0].clientX - mouseX;
                    // 移动歌单：移动前位置+鼠标移动的距离
                    left = divX + disX;
                })
                // 触摸结束事件
                document.addEventListener("touchend", function () {
                    event.remove();
                    console.log(width, divY);
                    if (width > 770 && divY > 120) {
                        const index = parseInt(left / 120)
                        List[1].insertBefore(li, List[1].children[index]);
                    }
                    if (width < 770 && divY > 120) {
                        const index = parseInt(left / 200)
                        List[1].insertBefore(li, List[1].children[index]);
                    }
                    List[1].style.overflow = 'scroll'
                    document.onmousemove = null;
                    document.onmouseup = null;
                })
                expert = document.querySelectorAll('#root .recommend .songList .official .List .item');
            })
        });
    }, 100);
})();