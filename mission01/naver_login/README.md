# 네이버 로그인 페이지 구현

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
### 작성 과정

1. `form` 태그 전체를 잡은 `loginForm`이라는 변수를 선언합니다.
2. `addEventListener`로 `loginForm`에 `"input"` 이벤트를 추가해줍니다.
3. `'input'` 이벤트를 핸들링하는 함수 `handleInput`을 작성합니다.
  - 이벤트 위임을 통해 선택하는 타겟을 받아 `target` 변수를 선언합니다.
  - 어떤 input 요소를 타겟으로 받느냐에 따라 다른 validation 함수가 필요하기 때문에, 타겟을 구분해줄 속성 type을 가져와 `type` 변수를 선언합니다.
  - switch 문과 삼항식을 이용해 type에 따른 validation이 가능하도록 작성합니다.
4. 이어서 또 `addEventListener`로 `loginForm`에 `'submit'` 이벤트를 추가해줍니다.
5. `'submit'` 이벤트를 핸들링하는 함수 `handleSubmit`을 작성합니다.
  - 요소의 기본 동작을 막기 위해 이벤트객체에 `preventDefalut`를 넣어줍니다.
  - user 객체의 id, pw와 입력된 이메일, 비밀번호를 비교하기 위해 각 input에 입력된 값을 각각 변수로 선언합니다.
  - id와 pw가 동시에 일치할 때 welcome 페이지로 넘어가도록 조건문을 작성합니다.


---
### 느낀 점
- 맨 처음에는 form 요소 전체가 아닌 그 안의 div 요소를 잡고 이벤트를 추가했더니 preventDfault를 써도 405 오류가 떴다. 혹시 싶어서 이벤트 대상을 form으로 바꾸고 나니 멀쩡하게 welcome 페이지로 넘어가게 됐는데 아직도 왜인지 정확히 이해를 못하고 있다😅 submit 이벤트 자체가 form 요소를 대상으로 작동하는 이벤트라서일까?
- submit 이벤트 함수에도 target으로 이벤트 위임을 써볼까 했는데, 그렇게 하자니 target의 type이 이메일일 때 입력한 값이 user의 id와 일치하는지 + type이 password일 때 입력한 값이 user의 pw와 일치하는지 + 앞선 조건을 동시에 만족할 때 welcome 페이지로 이동하는 식을 작성하기 힘들어보여서 그냥 각각의 입력값을 변수에 담아 비교하는 조건문을 만들었다🥹







