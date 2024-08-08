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
const text = document.querySelector(".searchID-main-div-textbox");
console.log(text);
const xbox1 = document.querySelector(".searchID-main-inputimg1");
const xbox2 = document.querySelector(".searchID-main-inputimg2");

const namereset = document.querySelector("#clearname")
const phonereset = document.querySelector("#clearphone")

function namecheck() {
  if (!searchName.value) {
    nameResult.style.display = "block"
    nameResult.innerText = "필수 : 이름을 입력하세요";
    nameResult.style.color = "red";
    text.style.display = "block";

  } else {
    nameResult.innerText = "이름 확인";
    nameResult.style.color = "green";
    nameResult.style.display = "block"
    text.style.display = "block";
    xbox1.style.display = "block";
  }

};

searchName.addEventListener("blur", namecheck);

function phonecheck() {
  if (!searchPhone.value) {
    phoneResult.style.display = "block";
    phoneResult.innerText = "필수 : 전화번호를 입력하세요";
    phoneResult.style.color = "red";
    text.style.display = "block";
  } else {
    phoneResult.style.display = "block";
    phoneResult.innerText = "전화번호 확인";
    phoneResult.style.color = "green";
    text.style.display = "block";
    xbox2.style.display = "block";
  }
};

searchPhone.addEventListener("blur", phonecheck);

xbox1.addEventListener("click", () => {
})

xbox2.addEventListener("click", () => {
})

namereset.addEventListener("click", () => {
  searchName.value = "";
  xbox1.style.display = "none";
  namecheck();

});

phonereset.addEventListener("click", () => {
  searchPhone.value = "";
  xbox2.style.display = "none"

});

button.addEventListener("click", () => {
  namecheck();
  phonecheck();

})

