
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nav = document.querySelector('nav');
const liList = document.querySelectorAll('nav ul li')
const body = document.querySelector('body')
const visualImg = document.querySelector('.visual img')





function handleClick(e){
  const target = e.target;
  const li = target.closest('li')
  const liIndex = li.dataset.index;
  const imgName = data[liIndex - 1].name.toLowerCase();
  const imgAlt = data[liIndex - 1].alt;
  const bgColor = data[liIndex - 1].color;

  if(!li) return;

  liList.forEach((li)=>{
    li.classList.remove('is-active')
  })

  li.classList.add('is-active')

  body.style.background = `linear-gradient(to bottom, ${bgColor[0]}, ${bgColor[1]})`;
  
  visualImg.src = `./assets/${imgName}.jpeg`;
  visualImg.alt = `./assets/${imgAlt}.jpeg`;

}





nav.addEventListener('click', handleClick)







