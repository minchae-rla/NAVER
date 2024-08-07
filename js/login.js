const inputs = document.querySelectorAll(".login_input");
const mark = document.querySelector('#mark');
const delete1 = document.querySelector(".delete1");
const delete2 = document.querySelector(".delete2");

//1. input 창 클릭했을 때 테두리 색깔
inputs.forEach(input => {
  input.addEventListener("focus", ()=> {
    input.style.outline = "2px solid #f4c2c2";
    input.style.border = "2px solid #f4c2c2";
  });
  input.addEventListener("blur", ()=> {
    input.style.outline = "1px solid lightgray";
    input.style.border = "1px solid lightgray";
  });
});
  
//2. 아이디랑 비번 값 null 일 때 출력 메세지 
const loginBtn = document.querySelector(".login_button")
const pResult = document.querySelector("#result");

loginBtn.addEventListener("click", () => {
  let errorMessage = "";

  // 아이디 입력 값 체크
  if (inputs[0].value === null || inputs[0].value.length === 0) {0
    errorMessage += `<span style="color: red;">아이디를 입력하세요</span>\t\t\t\t\t`;
  }

  // 비밀번호 입력 값 체크
  if (inputs[1].value === null || inputs[1].value.length === 0) {
    errorMessage += `<span style="color: red;">비밀번호를 입력하세요</span>`;
  }

  // 오류 메시지가 있으면 pResult에 표시
  if (errorMessage) {
    pResult.innerHTML = errorMessage;
  } else {
    window.location.href = "https://www.naver.com/";
  }
});

//3. 비밀번호 토글 , x 표시 

// 첫번째 input 키보드 입력했을 때 x 표시 
inputs[0].addEventListener("keyup", ()=> {
  if(inputs[0].value.length !== 0) {
    delete1.style.display = "block";
  }
})

// 두번째 input 키보드 입력했을 때 토글과 x 표시
inputs[1].addEventListener("keyup", ()=> {
  if(inputs[1].value.length !== 0) {
    mark.style.display = "block";
    delete2.style.display = "block";
  }
})

// 토글 클릭했을 때 이미지와 type 변경
mark.addEventListener("click", (e) => {
  const input = document.querySelector("input[name=pw]");
  const isText = input.type === "text";

  input.setAttribute('type', isText?'password':'text');
  e.target.style.backgroundImage = `url('${isText ? '../img/close.png': '../img/open.png'}')`;
});

// x 클릭시 첫번째 input 값 없애기
delete1.addEventListener("click" , ()=> {
  inputs[0].value = "";
  delete1.style.display = "none";
})

// x 클릭시 두번째 input 값 없애기 
delete2.addEventListener("click" , ()=> {
  inputs[1].value = "";
  delete2.style.display = "none"; 
  mark.style.display = "none";
})

 

