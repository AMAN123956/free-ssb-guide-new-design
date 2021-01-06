const headLine = document.querySelectorAll(".head-line");
const readMore = document.querySelectorAll(".read-more");
const postBox = document.querySelectorAll(".post-box");
const iconClose = document.querySelectorAll(".icon-close");
for (let i = 0; i < readMore.length; i++){
    readMore[i].addEventListener("click", (e) => {
        headLine[i].style = "display:none";
        postBox[i].style = "display:flex";
        for (let j = 0; j < i; j++){
            postBox[j].style = "display:none";
        }
        for (let k = i + 1; k < readMore.length; k++){
            postBox[k].style = "display:none";
           
        }
    })
}

/* ICON CLOSE */
for (let i = 0; i < iconClose.length; i++){
    iconClose[i].addEventListener("click", (e) => {
        postBox[i].style = "display:none";
        headLine[i].style = "display:block";
        headLine[i].style = "color:red";
        
    })
}