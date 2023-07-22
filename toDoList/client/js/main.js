import { attr, clearContents, getNode, insertLast } from '../lib/index.js'

// [phase-1]  요소 추가 
// 1. submit 이벤트 연결
// 2. input value 가져오기
// 3. 랜더링하기
// 4. 생성(create) / 추가(render) 함수 분리하기 
// 5. 객체 구조 분해 할당


// [phase-2]  요소 제거 
// 1. item 이벤트 위임
// 2. 선택된 item의 node 가져오기
// 3. 자식 요소 자우기 
// 4. remove 함수 분리하기


// [phase-3]  데이터 관리  
// 1. 배열에 객체( {UID:16832143, item:'밥먹기'}) 저장하기
// 2. 배열에 객체를 추가하는 함수 분리하기
// 3. localStorage에 배열 저장하기, 가져오기 
// 4. 함수 분리하기 


// [phase-4]  데이터 상태 관리 
// 1. 최초 실행 함수 만들기
// 2. localStorage값 가져오기
// 3. 데이터 랜더링 하기
// 4. 아이템 제거시 toDoListArray 항목도 지우기



const submit = getNode('.form');
const input = getNode('.form__input');
const toDoList = getNode('.toDoList');
let toDoListArray = [];



function createItem(uid,item){
  let template = `
    <li data-id="${uid}">⭐️ ${item}</li>
  `
  return template;
}
function render({target,id,item}){
  target.insertAdjacentHTML('beforeend',createItem(id,item));
}

function addObjectToArray({target,id,item}){
  target.push({id,item});
}

function setStorage(key,data){
  localStorage.setItem(key,JSON.stringify(data));
}

function getStorage(key){
  return JSON.parse(localStorage.getItem(key))
}

function handleInputSubmit(e){
  e.preventDefault();
  let toDoItem = input.value;
  let uid = Date.now();

  // 랜더링 
  render({  
    target:toDoList,
    id:uid,
    item:toDoItem,
  })
  
  // 배열 데이터 
  addObjectToArray({
    target:toDoListArray,
    id: uid,
    item:toDoItem
  })

  setStorage('todolist',toDoListArray);

  
  console.log( toDoListArray );

  clearContents(input);

}

function removeToDoListItem(target,id){
  let li = document.querySelector(`[data-id='${id}']`)
  target.removeChild(li);
}

function removeObjectToArray(){

}

function handleRemoveTodoList(e){
  let target = e.target;
  let id = +attr(target,'data-id');

  removeToDoListItem(this,id);

  
  
  // 1. 배열의 아이템을 빼자!
  toDoListArray = toDoListArray.filter((item)=>{
    return item.id !== id;
  })

  setStorage('todolist',toDoListArray);
  

  // 2. 뺀 배열을 가지고 다시 setStorage

  
  
}



function init(){

  const data = getStorage('todolist');

  data?.forEach((obj)=>{
      render({
        target:toDoList,
        id:obj.id,
        item: obj.item
      })
  })

}


submit.addEventListener('submit',handleInputSubmit);
toDoList.addEventListener('click',handleRemoveTodoList)
window.addEventListener('DOMContentLoaded',init);