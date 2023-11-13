// // Variables // //
var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");
var clearBtn = document.querySelector("button");
//console.log(box1, box2, box3, button);

// // Functions // // 
// Press 1,2,3 on keyboard
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
// Clear emoji's
document.addEventListener("click", function() {
    box1.innerText = "1";
    box2.innerText = "2";
    box3.innerText = "3";
  });
