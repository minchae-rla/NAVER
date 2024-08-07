const inputs = document.querySelectorAll("#searchpw-input");

const result = document.querySelector("#searchpw-id");

const button = document.querySelector(".searchpw-button");

button.addEventListener("click", ()=> {
  let msg = "";
  if(inputs[0].value.length === 0) {
    msg += `<h4 style="color: red;">아이디를 입력하세요.</h3>`;
  } 
  if(inputs[1].value.length === 0) {
    msg += `<h4 style="color: red;">비밀번호를 입력하세요.</h3>`;
  }
  if(inputs[2].value.length === 0) {
    msg += `<h4 style="color: red;">전화번호를 입력하세요.</h3>`;
  }

  result.innerHTML = msg;
})
