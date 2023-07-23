import { attr, clearContents, getNode, insertLast } from '../lib/index.js'

//# [phase-1]  요소 추가 
// 1. submit 이벤트 연결
// 2. input value 가져오기
// 3. 랜더링하기
// 4. 생성(create) / 추가(render) 함수 분리하기 
// 5. 객체 구조 분해 할당


//# [phase-2]  요소 제거 
// 1. item 이벤트 위임
// 2. 선택된 item의 node 가져오기
// 3. 자식 요소 자우기 
// 4. remove 함수 분리하기


//# [phase-3]  데이터 관리  
// 1. 배열에 객체( {UID:16832143, item:'밥먹기'}) 저장하기
// 2. 배열에 객체를 추가하는 함수 분리하기
// 3. localStorage에 배열 저장하기, 가져오기 
// 4. 함수 분리하기 


//# [phase-4]  데이터 상태 관리 
// 1. 최초 실행 함수 만들기
// 2. localStorage값 가져오기
// 3. 데이터 랜더링 하기
// 4. 아이템 제거시 toDoListArray 항목도 지우기



const submit = getNode('.form');
const input = getNode('.form__input');
const toDoList = getNode('.toDoList');
const toDoListArray = [];

//% 템플릿을 만들어주는 함수
function createItem({uid, item}) {
  let template = `<li data-id="${uid}">⭐️ ${item}</li>`
  return template;
}

//% 화면에 insert해주는 함수
function render({target,id,item}){
  target.insertAdjacentHTML('beforeend',createItem({uid:id,item:item}));
}

//% 배열에 데이터를 추가하는 함수
function addObjectToArray({target,id,item}){
  target.push({id,item});
}

//% 로컬 스토리지에 배열이 가지고 있는 데이터를 추가하는 함수
function setStorage(key,data){
  localStorage.setItem(key, JSON.stringify(data)); 
  // 로컬 스토리지는 string 형식만 받기 때문에 JSON.stringify를 이용하여 값을 넘겨준다.
}



//& input에 전달된 value값을 로컬 스토리지에 저장하는 함수
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

  // console.log( toDoListArray );

  clearContents(input); // 유틸함수 - 전달되는 노드(파라미터)가 input이나 textarea이면 값을 비워준다.

}

//% 화면에 있는 li를 지운다.
function removeToDoListItem(target,id){
  let li = document.querySelector(`[data-id='${id}']`)
  target.removeChild(li);
}

//& 리스트에 있는 요소를 클릭하여 제거하는 함수
function handleRemoveTodoList(e){
  let target = e.target;
  let id = +attr(target,'data-id');

  removeToDoListItem(this,id);

  // 1. 배열의 아이템을 빼자!
  toDoListArray = toDoListArray.filter((item)=>{
    return item.id !== id;
  })

  // 2. 뺀 배열을 가지고 다시 setStorage
  setStorage('todolist',toDoListArray);
}

//% 로컬스토리지에 있는 값을 json 파싱하여 들고온다.
function getStorage(key){
  return JSON.parse(localStorage.getItem(key))
}

//& 새로고침이 DOM트리가 로드되면 로컬 스토리지의 데이터를 화면에 뿌려준다.
function init(){
  const data = getStorage('todolist');

  data?.forEach((obj)=>{  // 옵셔널 체이닝
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