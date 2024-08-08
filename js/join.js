// ID·PW 미입력시 필수메시지 출력

// ID관련정보 선택
const id = document.querySelector(".id-info");
console.log(id);
const idResult = document.querySelector(".id-result");
console.log(idResult);

// 아이디 입력유무 체크
function idcheck() {
  if (!id.value) {
    idResult.style.display = "block";
    idResult.innerText = "아이디 : 필수정보입니다";
    idResult.style.color = "red";
    id.style.border = "1px solid red";
    return false;
  } else {
    idResult.style.display = "none";
    id.style.border = "1px solid gainsboro";
    return true;
  }
};

id.addEventListener("blur", idcheck);

// PW관련정보 선택
const pw = document.querySelector(".pw-info");
console.log(pw);
const pwResult = document.querySelector(".pw-result");
console.log(pwResult);
const pwlengthResult = document.querySelector(".pwlength-result");
console.log(pwlengthResult);

// 비밀번호 입력유무 체크
function pwcheck() {
  if (!pw.value) {
    pwResult.style.display = "block";
    pwlengthResult.style.display = "none";
    pwResult.innerText = "비밀번호 : 필수정보입니다";
    pwResult.style.color = "red";
    pw.style.border = "1px solid red";
    return false;
  } else if (pw.value.length > 16 || pw.value.length < 8) {
    pwlengthResult.style.display = "block";
    pwlengthResult.innerText = "비밀번호 : 8~16자를 사용해주세요";
    pwlengthResult.style.color = "red";
    pwResult.style.display = "none";
    pw.style.border = "1px solid red";
    return false;
  } else {
    pwResult.style.display = "none";
    pwlengthResult.style.display = "none";
    pw.style.border = "1px solid gainsboro";
    return true;
  }
};

pw.addEventListener("blur", pwcheck);

// 비밀번호 확인(처음 입력값과 동일한지 확인)
// PW확인 관련정보 선택
const pwSecond = document.querySelector(".pw-infoCheck");
console.log(pwSecond);
const pwSecondeResult = document.querySelector(".pw-resultCheck");
console.log(pwSecondeResult);

function pwCheckRE() {
  if(!pwSecond.value) {
    pwSecondeResult.style.display = "block";
    pwSecondeResult.innerText = "비밀번호확인 : 필수정보입니다";
    pwSecondeResult.style.color = "red";
    pwSecond.style.border = "1px solid red";
    return false;
  } else if(pw.value == pwSecond.value) {
    pwSecondeResult.style.display = "none";
    pwSecond.style.border = "1px solid gainsboro";
    return true;
  } else if (pw.value != pwSecond.value) {
    pwSecondeResult.style.display = "block";
    pwSecondeResult.innerText = "비밀번호가 일치하지 않습니다";
    pwSecondeResult.style.color = "red";
    pwSecond.style.border = "1px solid red";
    return false;
  } 
};

pwSecond.addEventListener("blur", pwCheckRE);




// 이름, 생년월일, 전화번호 미입력시 필수 메시지 출력

// 이름 관련정보 선택
const name = document.querySelector(".name-info");
console.log(name);
const nameResult = document.querySelector(".name-result");
console.log(nameResult);
// 이름 입력 유무 체크
function namecheck() {
  if (!name.value) {
    nameResult.style.display = "block";
    nameResult.innerText = "이름 : 필수정보입니다";
    nameResult.style.color = "red";
    name.style.border = "1px solid red";
    return false;
  } else {
    nameResult.style.display = "none";
    name.style.border = "1px solid gainsboro";
    return true;
  }
};

name.addEventListener("blur", namecheck);

// 생년월일 관련정보 선택
const birth = document.querySelector(".birth-info");
console.log(birth);
const birthResult = document.querySelector(".birth-result");
console.log(birthResult);
// 생년월일 입력 유무 체크
function birthcheck() {
  if (!birth.value) {
    birthResult.style.display = "block";
    birthResult.innerText = "생년월일 : 필수정보입니다";
    birthResult.style.color = "red";
    birth.style.border = "1px solid red";
    return false;
  } else {
    birthResult.style.display = "none";
    birth.style.border = "1px solid gainsboro";
    return true;
  }
};

birth.addEventListener("blur", birthcheck);


// 전화번호 관련정보 선택
const phone = document.querySelector(".phone-info");
console.log(phone);

const phone_format = /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/ // -?로 작성하면 -가 있든없든 상관X

const phoneResult = document.querySelector(".phone-result");
console.log(phoneResult);
const phoneTypeResult = document.querySelector(".phoneType-result");
console.log(phoneTypeResult);
// 전화번호 입력 유무 체크
// 정규표현식을 사용하여 제대로 입력하였는지도 확인
function phonecheck() {
  const phone_input = phone.value; // 전화번호 입력값 가져오기
  console.log(phone_input);

  if (!phone_input) {
    phoneResult.style.display = "block";
    phoneResult.innerText = "휴대전화번호 : 필수정보입니다";
    phoneResult.style.color = "red";
    phone.style.border = "1px solid red";
    phoneTypeResult.style.display = "none";
    return false;
  } else if (!phone_format.test(phone_input)) {
    phoneTypeResult.style.display = "block";
    phoneTypeResult.innerText = "휴대전화번호 : 휴대전화번호가 정확한지 확인해주세요";
    phoneTypeResult.style.color = "red";
    phoneResult.style.display = "none";
    return false;
  } else {
    phone.style.border = "1px solid gainsboro";
    phoneResult.style.display = "none";
    phoneTypeResult.style.display = "none";
    return true;
  }
};

phone.addEventListener("blur", phonecheck);

// 비밀번호 토글
const mark1 = document.querySelector(".mark1");
mark1.addEventListener("click", (e) => {
  const input = document.querySelector("input.pw-info");
  const isText = input.type === "text";

  input.setAttribute('type', isText ? 'password' : 'text');

  e.target.style.backgroundImage = `url('${isText ? '../img/close.png' : '../img/open.png'}')`;

});

const mark2 = document.querySelector(".mark2");
mark2.addEventListener("click", (e) => {
  const input = document.querySelector("input.pw-infoCheck");
  const isText = input.type === "text";

  input.setAttribute('type', isText ? 'password' : 'text');

  e.target.style.backgroundImage = `url('${isText ? '../img/close.png' : '../img/open.png'}')`;

});

// 회원가입완료 시 미입력체크
const regibutton = document.querySelector(".joinSumbit");
regibutton.addEventListener("click", () => {
  event.preventDefault();
  idcheck();
  pwcheck();
  namecheck();
  birthcheck();
  phonecheck();
  pwCheckRE();

  const isIdValid = idcheck();
  const isPwValid = pwcheck();
  const isPwCheckValid = pwCheckRE();
  const isNameValid = namecheck();
  const isBirthValid = birthcheck();
  const isPhoneValid = phonecheck();
  
  // 모든 체크가 유효할 경우 메인 페이지로 이동
  if (isIdValid && isPwValid && isPwCheckValid && isNameValid && isBirthValid && isPhoneValid) {
    console.log(alert("회원가입이 완료되었습니다"));
    
      window.location.href = "login.html"; // 원하는 메인 페이지 링크로 변경
  }
});