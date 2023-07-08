

// 함수 만들기
// 응용 코드 작성하기
// Tab ui 만들기


// css의 정보를 가져오는 함수 get...
// css의 값을 입력해주는 함수 set...


getComputedStyle(document.querySelector('h1'))['color']


// ELEMENT
// const h1 = document.querySelector('h1');

// console.log(getComputedStyle(h1)["margin"]);

// 함수 만들때 꿀팁 : 실행부를 작성


// 1. getCss(node: string, prop: string):string - validation

// 2. node의 값을 문자로 받을 경우 - validation

// 3. node가 없을 경우 - validation

// 4. prop의 값이 string이 아닐 경우 - validation

// 5. prop의 값이 style의 속성이 아닐 경우 - validation


function getCss(node, prop) {
	
	// 3.
	if (!node) SyntaxError('getCss함수의 node는 필수 입력값 입니다');
	
	// 2.
	// if (typeof node === 'string') {
	// 	node = document.querySelector(node);
	// }

	if (typeof node === 'string') {
		node = $(node);
	}

	// 4.
	if (typeof prop !== 'string') {
		SyntaxError("getCss함수의 prop은 string 타입이어야 합니다.");	
	}

	// 5.
	if (!(prop in document.body.style)) {
		SyntaxError('getCss함수의 prop은 유요한 css 속성이 아닙니다.');
	}


	return getComputedStyle(node)[prop];
}

const result = getCss('.heading', 'font-size');	//	'rgb(0,0,0)'

// console.log( result );


/* -------------------------------------------------------------------------- */


// 함수 쪼개기
// 에러표출 함수 만들기
// function syntaxError(message) {
// 	throw new SyntaxError(message);
// }

// 화살표 함수로 변환
const syntaxError = message => { throw new SyntaxError(message) };


// getNode(node)
function $(node) {
	if (typeof node === "string") {
    node = document.querySelector(node);
	}
	
	return node;
}

/* -------------------------------------------------------------------------- */

// setCss(node:string, prop:string, value:string) : void

function setCss(node, prop, value) {

	if (typeof node === 'string') {
		node = $(node);
	}

	if (!(prop in document.body.style)) {
		syntaxError('setCss 함수의 두번 째 인자인 prop은 유효한 css 속성이 아닙니다.')
	}

	if (!value) {
		syntaxError('setCss 함수의 세번째 인자인 value는 필수 입력값 입니다.')
	}

	node.style[prop] = value;
	
}

setCss('h1', 'font-size', '32px');



/* -------------------------------------------------------------------------- */

// h1의 폰트 크기를 증가시키거나 감소시키는 함수를 만들어 주세요.

// 1. h1, plus, minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. plus, minus에 연결할 이벤트 함수를 만든다.
// 4. h1의 fontsize를 증가시킨다.


// 이렇게 글로 써보면서 하나하나의 요소를 만든다.
// plus 버튼을 클릭했을때 h1의 폰트 사이즈를 1씩 증가시킨다.



const h1= $('h1');
const plus = $('.plus');
const minus = $('.minus');


let currentSize = parseInt(getCss("h1", "font-size"));
let count = 0;


console.log(currentSize);



// 폰트 증가시키는 함수 
function handleIncre() {
	
	console.log(currentSize);
	setCss(h1, "font-size", `${++currentSize}px`);
}


// 폰트 감소시키는 함수
function handleDecre() {

  console.log(currentSize);
  setCss(h1, "font-size", `${--currentSize}px`);
}




// addEventListener는 
// 'click'했을때, handleClick실행하겠다
plus.addEventListener('click',handleIncre)
minus.addEventListener('click',handleDecre)


