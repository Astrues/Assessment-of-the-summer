const { list } = require("postcss");

const axios = require("axios").default;
// 排行榜
(async function () {
    const recommend = document.querySelector("#root .recommend");
    const rank = document.querySelector("#root .rank");
    const spans = document.querySelectorAll("#root .header .bottom span");
    spans[0].addEventListener("click", () => {
        recommend.style.display = 'block';
        rank.style.display = 'none';

    })
    spans[1].addEventListener("click", () => {
        recommend.style.display = 'none';
        rank.style.display = 'block';

    })
    const data = (await axios.get("http://124.221.249.219:8000/api/ranking")).data;
    console.log(data);
    const List = rank.querySelector(".List");
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");
        li.className = "item";

        const content = document.createElement("div");
        content.className = 'content';

        const detial = document.createElement("detial");
        detial.className = 'detial';
        const p = document.createElement("p");
        p.innerHTML = data[i].title;
        const ol = document.createElement("ol");
        for (let j = 0; j < data[i].top3.length; j++) {
            const li = document.createElement("li");
            li.innerHTML = data[i].top3[j].title + data[i].top3[j].artist
            ol.appendChild(li);
        }
        detial.appendChild(p);
        detial.appendChild(ol);

        const image = document.createElement("image");
        const img = document.createElement("img");
        img.src = data[i].cover;
        const span1 = document.createElement("span");
        span1.innerHTML = `每${data[i].update_frequence}更新`;
        const span2 = document.createElement("span");
        span2.innerHTML = `▶${data[i].views}`;
        image.appendChild(img)
        image.appendChild(span1)
        image.appendChild(span2);
        
        content.appendChild(detial);
        content.appendChild(image)

        li.appendChild(content);
        List.appendChild(li);
    }
})();