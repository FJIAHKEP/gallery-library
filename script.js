//Задание 3
var xhr = new XMLHttpRequest();
xhr.open("GET", "image.json");
xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
    }
    if (xhr.status !== 200) {
        console.log(xhr.status)

    } else {
        var imgObj = JSON.parse(xhr.responseText);
        console.log(imgObj);
        var imgDiv = document.querySelectorAll(".img");
        var img = [];
        for (var i = 0; i < imgDiv.length; i++) {
            img.push(document.createElement("img"));
            img[i].src = imgObj[i].img;
            imgDiv[i].appendChild(img[i]);
        }
        for (var j = 0; j < imgDiv.length; j++) {
            imgDiv[j].onclick = showBigPicture
        }
        var bigPicture = document.createElement("img");
        function showBigPicture(e) {
            var eventElement = e.target.parentNode;
            console.log(eventElement);
            bigPicture.src = imgObj[eventElement.id].imgXl;
            console.log(bigPicture.src);
            document.querySelector(".win").style.display = "block";
            document.querySelector(".visible").appendChild(bigPicture);
            bigPicture.parentNode.parentNode.addEventListener("click", function () {
                document.querySelector(".win").style.display = "none"
            })
        }
    }
};
xhr.send();



//Задание 4
var imgResult = document.querySelector("#imgResult");
var img = document.createElement("img");


document.querySelector(".ok").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./ok.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status !== 200) {
        } else {
            var answerObj = JSON.parse(xhr.responseText);
            var info = document.querySelector(".info");
            info.innerHTML = answerObj.answer;
            img.src = "image/ok.png";
            showImage();
        }
    };
    xhr.send()
});
document.querySelector(".error").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./error.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status !== 200) {
        } else {
            var answerObj = JSON.parse(xhr.responseText);
            var info = document.querySelector(".info");
            info.innerHTML = answerObj.answer;
            img.src = "image/errorstop.png";
            showImage();
        }
    };
    xhr.send()
});

function showImage() {
    imgResult.appendChild(img);
}



