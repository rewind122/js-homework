// function getValueAtObject(obj, key) {
//   if(!obj[key]){
//     return new Error('해당 키가 존재하지 않습니다.');
//   }
//   else{
//     return obj[key];
//   }
// }

// 1. obj가 객체인지 확인하기
// 2. key 가 문자인지 확인하기
// 3. 해당 키 값을 가지고 있는지 확인하기 hasOwnProperty

// 타입을 보다 정확하게 비교하기 => Object의 toString
// Object.prototype.toString.call([]) => '[object Array]'
// Object.prototype.toString.call([]).slice(8,-1) => 'Array'
// Object.prototype.toString.call([]).slice(8,-1).toLowerCase() => 'array'

function isObject(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object';
}


function getValueAtObject(obj, key) {

  if(typeof key !== 'string'){
    throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }
  
  if(isObject(obj)){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
      return obj[key];
    }
    else{
      throw new Error(`getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`)
    }
  }
  else{
    throw new TypeError('getValueAtObject 함수의 첫 번째 인수는 객체 타입이어야 합니다.');
  }
}






const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age'));  // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
conso


// function getNumberAtArray(arr, index) {
//   if(!Array.isArray(arr)){
//     return new Error('해당 개체는 배열이 아닙니다.');
//   }
//   else if(!arr[index]){
//     return new Error('인덱스 값이 유효한 범위가 아닙니다.');
//   }
//   else{
//     return arr[index];
//   }
// }


// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

function getNumberAtArray(arr, index) {
  if (Array.isArray(arr)) {
    if (index >= 0 && index < arr.length) {
      return arr[index];
    } else {
      throw new Error("배열에 없는 index입니다.");
    }
  } else {
    throw new TypeError("getNumberAtArray 함수의 첫 번째 인수는 배열 타입이어야 합니다.");
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!