
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
  - email 입력 input(#userEmail)의 입력값 가져와서(.value) 변수에 담기
  - emailReg 함수를 이용해 조건 처리
  - e반환값이 false일 때, 해당 input에 'is--invalid' 클래스 추가

2. pw 정규표현식을 사용한 validation
  - pw 입력 input(#userPassword)의 입력값 가져와서(.value) 변수에 담기
  - pwReg 함수를 이용해 조건 처리
  - 반환값이 false일 때, 해당 input에 'is--invalid' 클래스 추가

3. 상태 변수 관리
  - ??

4. 로그인 버튼을 클릭시 조건처리
  - 로그인 버튼 변수에 담기(이벤트 위임을 통해서?)
  - 클릭 시 이벤트 함수 handleClick() 만들기
  - 입력받은 email과 password가 user 객체의 id, pw의 value와 동일하다면 welcome 페이지로 이동

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



const loginForm = document.querySelector('form'); 

function handleInput(e){
  const target = e.target;
  const type = target.getAttribute('type');

  switch(type){
    case 'email':
      !emailReg(target.value) ? target.classList.add('is--invalid') : target.classList.remove('is--invalid');
      break;
    case 'password':
      !pwReg(target.value) ? target.classList.add('is--invalid') : target.classList.remove('is--invalid');
      break;
  }
}


function handleSubmit(e){
  e.preventDefault();

  const inputEmail = document.querySelector('#userEmail').value;
  const inputPw = document.querySelector('#userPassword').value;

  if((inputEmail === user.id) && (inputPw === user.pw)) window.location.href = 'welcome.html';
}


loginForm.addEventListener('input', handleInput)
loginForm.addEventListener('submit', handleSubmit)








