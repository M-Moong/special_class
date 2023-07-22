import { isString } from "./typeOf.js";



 function setAttr(target,prop,value){

  if(isString(target)){
    target = document.querySelector(target);
  }
  if(!isString(prop)){
    throw new Error('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }
  if(!value){
    throw new Error('setAttr 함수의 세 번째 인수는 필수 값 이어야 합니다.')
  }  
  target.setAttribute(prop,value);
}

 function getAttr(target,prop){

  // let target = h1;
  // let prop = 'class'
  if(isString(target)){
    target = document.querySelector(target);
  }

  if(!isString(prop)){
    throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }

  return target.getAttribute(prop);
}



export function attr(target,prop,value){

  // 사용자가 value값을 입력하면 setAttr을 실행해주고,
  // value값을 입력하지 않으면 getAttr을 실행해준다.

  if(!value){
    return getAttr(target,prop);
  }else{
    setAttr(target,prop,value)
  }


  // return condition ? 'heading' : 'undefined'
  return !value ? getAttr(target,prop) : setAttr(target,prop,value);

}