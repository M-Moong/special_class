

//# 오늘 오후 특강 계획
// 1. 함수 만들기
// 2. 응용 코드 작성하기
// 3. Tab ui 만들기

//# 함수의 이름 예시
// css의 정보를 가져오는 함수 get...
// css의 값을 입력해주는 함수 set...


//# ELEMENT(속성) 가져오는 구문
// h1태그를 가진 node를 불러온다.
const h1 =
	document.querySelector('h1'); // <h1 class="heading" style="font-size: 32px;">hello</h1>

// h1태그의 요소-계산됨 에 있는 margin값을 가져온다.
console.log(getComputedStyle(h1)["margin"]);		// 21.44px 0px

// h1태그의 요소-계산됨 에있는 color값을 들고온다.
getComputedStyle(document.querySelector('h1'))['color']			// 'rgb(255, 255, 255)'

/* -------------------------------------------------------------------------- */

//% 함수 만들때 꿀팁 : 실행부를 먼저 작성해본다.(호출부분)

//* 유효성 검사 항목 (validation)
//* 1. getCss(node: string, prop: string):string 
//* 2. node의 값을 문자로 받을 경우 
//* 3. node가 없을 경우 
//* 4. prop의 값이 string이 아닐 경우 
//* 5. prop의 값이 style의 속성이 아닐 경우 



//@ 원하는 태그에서 CSS 정보를 가져오는 함수 or
//@ node에가서 prop의 속성을 get 해오는 함수.
function getCss(node, prop) {
	
	//^ 3. node값이 없을 경우 - 에러를 발생 시킨다.
	if (!node) SyntaxError('getCss함수의 node는 필수 입력값 입니다');
	
	//^ 2. node의 값을 문자로 받을경우 (해당문자로 node값을 다시 불러온다.)
	// if (typeof node === 'string') {
	// 	node = document.querySelector(node);
	// }

	if (typeof node === 'string') {
		node = $(node);
	}

	//^ 4. prop의 값이 string이 아닐경우 - 에러를 발생 시킨다.
	if (typeof prop !== 'string') {
		SyntaxError("getCss함수의 prop은 string 타입이어야 합니다.");	
	}

	//^ 5. prop의 값이 유효한 style의 속성이 아닐경우 - 에러를 발생시킨다.
	if (!(prop in document.body.style)) {
		SyntaxError('getCss함수의 prop은 유요한 css 속성이 아닙니다.');
	}

	return getComputedStyle(node)[prop];
}

//# getCss 함수 호출 부분.
const result = getCss('.heading', 'font-size');	 // 'rgb(0,0,0)'
// console.log( result );


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


//% 함수 쪼개기 -에러표출함수, node찾아오는함수
//# 에러표출 함수 만들기
// function syntaxError(message) {
// 	throw new SyntaxError(message);
// }

// 화살표 함수로 변환
const syntaxError = message => { throw new SyntaxError(message) };


//# getNode(node)
function $(node) {
	if (typeof node === "string") {
    node = document.querySelector(node);
	}
	
	return node;
}


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */



//@ 원하는 태그로 접근하여 속성값을 변경시키는 함수 or
//@ node에 prop값을 value로 변경시키는 함수.
// setCss(node:string, prop:string, value:string) : void
function setCss(node, prop, value) {

  //^ node에 문자값이 들어왔을때 처리 - (해당문자로 node값을 다시 불러온다.)
  if (typeof node === "string") {
    node = $(node);
  }

	//^ style에 해당하지 않는 prop 값이 들어왔을때 - 에러를 표출.
  if (!(prop in document.body.style)) {
    syntaxError(
      "setCss 함수의 두번 째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }

	//^ value에 빈값이 들어왔을때  - 에러를 표출.
  if (!value) {
    syntaxError("setCss 함수의 세번째 인자인 value는 필수 입력값 입니다.");
  }

	//% 반환값이 따로 있지는 않지만 해당 속성을 변경시켜준다.
  node.style[prop] = value;
}

//# setCss 함수 호출 부분.
setCss('h1', 'font-size', '32px');



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


//% 함수 작성하는 Tip.
// ex) plus 버튼을 클릭했을때 h1의 폰트 사이즈를 1씩 증가시킨다.
// plus버튼을 클릭한다 -> 증가시킨다 -> h1을 변수에 담는다 ->  1씩 증가한다 ...... 
//! 이렇게 글로 써보면서 하나하나의 요소를 만든다.



//# h1의 폰트 크기를 증가시키거나 감소시키는 함수를 만들어 주세요.
// 유효성검사 항목
// 1. h1, plus, minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. plus, minus에 연결할 이벤트 함수를 만든다.
// 4. h1의 fontsize를 증가시킨다.


// const h1= $('h1'); - 15번째줄에서 변수 사용중이라 주석 처리 // 'h1'이라는 이름을 가진 태그를 불러온다.
const plus = $('.plus');		// 앞에 . 이 있기때문에 'plus'라는 클래스를 가진 태그를 불러온다.
const minus = $('.minus');	// 앞에 . 이 있기때문에 'minus'라는 클래스를 가진 태그를 불러온다.



let count = 0; // 1씩 증가시키기위해 담을 변수 선언
let currentSize = parseInt(getCss("h1", "font-size")); // (32px + 1)을 하기위해 32라는 숫자만 가져온다.

console.log(currentSize);


//@ 폰트 증가시키는 함수 
function handleIncre() {
	
	console.log(currentSize);
	setCss(h1, "font-size", `${++currentSize}px`);
}

//@ 폰트 감소시키는 함수
function handleDecre() {

  console.log(currentSize);
  setCss(h1, "font-size", `${--currentSize}px`);
}



//# addEventListener
// 'click'했을때, handleClick실행하겠다
plus.addEventListener('click',handleIncre)
minus.addEventListener('click',handleDecre)


