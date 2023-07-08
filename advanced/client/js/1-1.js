

// 함수 만들기
// 응용 코드 작성하기
// Tab ui 만들기


// css의 정보를 가져오는 함수 get...
// css의 값을 입력해주는 함수 set...


getComputedStyle(document.querySelector('h1'))['color']


// ELEMENT
const h1 = document.querySelector('h1');

// console.log(getComputedStyle(h1)["margin"]);

// 함수 만들때 꿀팁 : 실행부를 작성


// 1. getCss(node: string, prop: string):string - validation

// 2. node의 값을 문자로 받을 경우 - 변환

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

console.log( result );


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
	
}







