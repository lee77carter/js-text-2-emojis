// // Variables // //
var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");
console.log(box1, box2, box3);

// // Functions // // 
// keydown by pressing actual 1,2,3 keys on keyboard
document.addEventListener("keydown", function (e) {
    var key = e.key;
    if(key === "1") {
        box1.innerText = "☕️";
    } else if (key === "2") {
        box2.innerText = "🦁";
    } else if (key === "3") {
        box3.innerText = "🐞";
    }
});
