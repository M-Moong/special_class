


//## 객체 
let salaries = {
	"이현주": 150,
	"전선용": 200,
	"강예나": 450
}


Object.prototype.선범 = 50000000
//# for in 문

//% forin문을 객체에 그대로 사용하면
//% 객체에 있는 모든 값을 조회하기때문에 Object.prototype 에있는 값도 조회된다.

//^ 1.
// salaris에 있는 객체를 조회하기 위해서 사용하였지만,
// Object의 설정 해준 선범과 50000000도 나오게 한다.
// for (let key in salaries) {

// 	console.log('forin문 key : \t' + key);
// 	console.log("forin문 value : \t" + salaries[key]);

// }

//^ 2.
// Object의 hasOwnProperty 능력을 빌려와서 사용하면 
// salaries의 객체만 조회가능하다.
// for (let key in salaries) {
	
// 	// Object의 능력인 hasOwnProperty 메서드를 빌려와 사용한다.
// 	if (Object.prototype.hasOwnProperty.call(salaries, key)) {

// 		console.log('능력을 불러온 forin 문 key : \t' + key);
// 		console.log('능력을 불러온 forin 문 value : \t' + salaries[key]);

// 	}
// }


/* -------------------------------------------------------------------------- */


// //## 객체를 조회하는 방법들

// //* salaries의 key값들을 배열로 담아 보여준다.
// console.log(Object.keys(salaries));				// ['이현주', '전선용', '강예나']

// //* salaries의 value값들을 배열로 담아 보여준다.
// console.log(Object.values(salaries));			// [150, 200, 450]

// //* salaries의 key와 value를 한쌍으로 배열에 담아 보여준다.
// console.log(Object.entries(salaries));			// [Array(2), Array(2), Array(2)]
// 																						// 0: (2) ['이현주', 150]
// 																						// 1: (2) ['전선용', 200]
// 																						// 2: (2) ['강예나', 450]


/* -------------------------------------------------------------------------- */


// entries를 사용하면 
// 아래의 배열처럼 생성된다.																						
const arr = [
	["이현주", 150],
	["전선용", 200],
	["강예나", 450]
];

//# entries의 배열에 접근하는 방법
// console.log(arr[0]);			// ["이현주", 150]

// console.log(arr[0][0]);		// 이현주

// console.log(arr[0][1]);		// 150



/* -------------------------------------------------------------------------- */




//@ 객체 안의 원하는 값들의 합을 구하는 구문 

let total = 0;

//# 첫번째 방법
// for (const keyValue of Object.entries(salaries)) {
//   // let key = keyValue[0];
//   let value = keyValue[1];

//   // console.log(key);
//   // console.log(value);

//   total += value;

//   // console.log(total);
// 	// total = 800;
// }


//# 두번째 방법 
// // keyValue 부분을 [key, value] 로 수정할수 있다.
// // value에 따로 변수지정을 안해주어도 접근할수 있다.
// for (const [key, value] of Object.entries(salaries)) {
//   total += value;

//   // total = 800;
// }


/* -------------------------------------------------------------------------- */




//@ 월급의 총 합을 함수로 정의 

// function sum(object) {
  
// 	// validation - 객체가 아닌 타입이 오면 에러표출
//   if (typeof object !== "object") {
//     throw new Error("sum 함수의 매개변수는 객체만 올 수 있습니다.");
//   }

//   let total = 0;
//   for (const value of Object.values(object)) {
//     total += value;
//   }

//   return total;
// }

// let result = sum(salaries);

// console.log(result);


/* -------------------------------------------------------------------------- */


// 객체를 배열로 바꾸는 방법 - keys, values, entries

// 배열을 객체로 바꾸는 방법 - Object.fromEntries(array)
// ???













