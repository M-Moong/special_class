



function a() {
  console.log(this);
}

const b = function () {
  console.log(this);
};

const c = () => {
  console.log(this);
};


// 객체의 메서드를 정의할때는 consise method를 사용하는게 좋다.
// 객체의 메서드 안에서 함수를 정의할때는 arrow function이 좋다.

const user = {
	grades: [10, 50, 100],
	totalGrades() {
		let total = 0;
		this.grades.forEach((item)=> {
			// console.log(item);
			total += item
		})

		return total;
	},

	get gr() {
		return this.grades
	},

	set gr(value) {
		this.grades.push(value)
		// return this.grades
	}
}

user.totalGrades()


//& reduece 함수 동작 알아보기 - 값을 반환함.

let arr = ['선범', '은빈','효윤'];

const total = arr.reduce((acc, item) => {
	return acc + item
}, 0)


//& map 함수 동작 알아보기 - 배열을 반환함.
const bb = arr.map((item) => {
	return `<button>${item}</button>`
})

//& forEach 함수 동작 알아보기 - 반환값 따로 없음.
bb.forEach((item) => { // 동적 렌더링
	// document.body.insertAdjacentElement('beforeend',item)
})




// isEven(2)    
// 전달된 숫자가 짝수인지 홀수인지 알려준다. 
// 결과값은 true | false
function isEven(number) {
	// return (number % 2 === 0);
	return !(number % 2);
}


// pow 함수 만들기
function pow(a, b) {
	let total = 1;
	for (let i = 1; i <= b; i++) {
		total *= a;
	}
	return total;
}
pow(2, 53)


// const powExpression = (x,n) => {
// 	return Array(n).fill(null).reduce((acc) => {
// 		return acc * x
// 	},1)
// }

// 화살표 함수 이용하여 return 줄이기
const powExpression = (x,n) => Array(n).fill(null).reduce(acc=> acc* x ,1)




// 변수 담을 공간
// 반복문
//변수 += 문자
// 퉤!

function repeat(string, n) {
	let total = ''
	for (let i = 0; i < n; i++) {
		total += string
	}
	return total
}

// 테스트 해보는 코드 실행결과값이 잘 맞는지
console.assert(repeat("hello😍", 3) === "hello😍hello😍hello😍");



const repeatExpression = (text, count) => {
	return Array(count).fill(null).reduce((acc) => {
		return acc + (text + ' ')
	},'').trim()
}
		


repeatExpression("hello😍", 3);






