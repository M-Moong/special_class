


// 객체 
let salaries = {
	"이현주": 150,
	"전선용": 200,
	"강예나": 450
}


//# for in 문
// Object.prototype.선범 = 50000000

// for (let key in salaries) {
// 	if (Object.prototype.hasOwnProperty.call(salaries, key)) {

// 		console.log(key);
// 		console.log(salaries[key]);

// 	}
// }

/* -------------------------------------------------------------------------- */


/* 
console.log(Object.keys(salaries));				// ['이현주', '전선용', '강예나']

console.log(Object.values(salaries));			// [150, 200, 450]

console.log(Object.entries(salaries));			// [Array(2), Array(2), Array(2)]
																						// 0: (2) ['이현주', 150]
																						// 1: (2) ['전선용', 200]
																						// 2: (2) ['강예나', 450]

 */


// entries가 아랫줄 처럼 생성된다.																						
const arr = [ ["이현주", 150],["전선용", 200],["강예나", 450] ];
/* 
console.log(arr[0]);			// ["이현주", 150]

console.log(arr[0][0]);		// 이현주

 */


// destructuring assignment
// 객체 구조 분해 할당 
// 배열 구조 분해 할당

let total = 0;

for (const [key, value] of Object.entries(salaries)) {
	// let key = keyValue[0];
	// let value = keyValue[1];

	// console.log(key);
	// console.log(value);
	
	total += value;
	
	console.log(total);
	
}

// 월급의 총 합
function sum(object) {

	// validation 에러 표출
	if (typeof object !== 'object') {
		throw new Error('sum 함수의 매개변수는 객체만 올 수 있습니다.');
	}

	let total = 0;
	for (const value of Object.values(object)) {
		total += value;
	}

	return total;
}

let result = sum(salaries);

console.log(result);


















