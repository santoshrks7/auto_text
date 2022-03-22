let nameValue = document.querySelector(".name");

let text = "Learning Javascript.";
let index = 1;

text_effect();

function text_effect() {
  nameValue.innerText = text.slice(0, index) +"|";
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(text_effect, 500);

//   console.log(index);
}


