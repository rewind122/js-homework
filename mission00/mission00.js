function getValueAtObject(obj, key) {
  if(!obj[key]){
    return new Error('해당 키가 존재하지 않습니다.');
  }
  else{
    return obj[key];
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
console.log(getValueAtObject(person, 'country')); // Error !

function getNumberAtArray(arr, index) {
  if(!Array.isArray(arr)){
    return new Error('해당 개체는 배열이 아닙니다.');
  }
  else if(!arr[index]){
    return new Error('인덱스 값이 유효한 범위가 아닙니다.');
  }
  else{
    return arr[index];
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!