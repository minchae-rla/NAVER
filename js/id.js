const button = document.querySelector("button[type=button]");
console.log(button);
const searchName = document.querySelector("#name");
console.log(searchName);
const searchPhone = document.querySelector("#phone");
console.log(searchPhone);
const nameResult = document.querySelector("#name-result");
console.log(nameResult);
const phoneResult = document.querySelector("#phone-result");
console.log(phoneResult);
const text = document.querySelector(".searchID-main-div-textbox")
console.log(text);

const namereset = document.querySelector("#clearname")
const phonereset = document.querySelector("#clearphone")

button.addEventListener("click", () => {
  text.style.display = "block"

  if (!searchName.value) {
    nameResult.innerText = "필수 : 이름을 입력하세요";
    nameResult.style.color = "red";
    return;
  }
  nameResult.innerText = "확 인";
  nameResult.style.color = "green";
  
  
});

button.addEventListener("click", () => {
  if (!searchPhone.value) {
    phoneResult.innerText = "필수 : 전화번호를 입력하세요";
    phoneResult.style.color = "red";
    return;
  }
  phoneResult.innerText = "확 인";
  phoneResult.style.color = "green";
});

namereset.addEventListener("click" , () =>{
  searchName.value = "";

});

phonereset.addEventListener("click" , () =>{
  searchPhone.value = "";

});