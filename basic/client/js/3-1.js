import { attr, typeOf } from "./lib/index.js";

const h1 = document.querySelector('h1');

/*	//# 1. 유틸 함수 만들기  // 매개변수 받는법, return의 유무 
 //   - attr() /  setAttr, getAttr
//   - css() /  setCss, getCss

// 요소 노드에 접근해야 하는 경우가 생겨요. 요소 노드의 속성값을 가져와야 하는 경우 



// Node.getAttribute()
// Node.setAttribute

// console.log( h1.getAttribute('class') ); // getter
// console.log( h1.setAttribute('data-index',10) ); // setter

// 규정 개발 팀장 : getAttr, setAttr, attr 함수 만들었으니까 너네 가져다 써~~~ 

// 희소 사원 : jQuery 경험 있음.



// 실행부 작성
// const result = getAttr(h1,'class');
// console.log( result ); // => 'heading'
// console.log( getAttr('.heading','class') );

// 에러가 날 수 있는 상황에서는 도구의 힘을 빌려라.
// eslint, prettier, typescript



// setAttr(h1,'id','head');


// attr(h1,'id','head') 


// h1.setAttribute('id','head');
 */


//# 2. 모듈 프로그래밍 ( 내보내고 받기 )  calculator


// console.log(typeof(null));	// object

// typeOf('aa') === 'string'


//# 3. closure / bindEvent() 

// 이벤트를 생성하는 유틸 함수

function bindEvent(타겟, 타입, 콜백) {

	타겟.addEventListener(타입, 콜백);

	return () => {
		타겟.removeEventListener(타입, 콜백);
	}

	//> 이렇게 하면 bindEvent(h1, 'click', ()=>{   }) 를 썼을 때, 
	// removeEventListener 함수가 툭 튀어나오게 됩니다
  //> 이벤트를 지울 때 add 할 때 썼던 함수 그대로 와야 지워지기 때문에 
	// closure 를 활용하는 겁니당;
}

function 클릭함수() { 
	console.log('나 지울꺼임?');
}

const remove = bindEvent(h1,'click',클릭함수)

console.log(remove());

// 타겟.addEventListener(이벤트타입, 클릭함수)
// h1.addEventListener('click', 클릭함수)



//# 4. try catch => data

//= 예시
function 정보가져오기() {
  setTimeout(() => {
    throw new Error('인터넷 고장!');
    //> 이렇게 try catch 없이 작성하면 error 가 터져서 밑에 코드를 읽을 수 없기 때문에 사이트가 먹통이 되어 유저 이탈 발생 ㅠㅠ
    //> 규정 팀장님 대분노
    //> 희소님 퇴사 위기
  }, 2000);

  //> 아래처럼 고쳐야 합니다.
  try {
    throw new Error('인터넷 통신이 원활하지 않습니다.');
  } catch (e) {
    // console.log(e); //> 콘솔 결과: Error: 인터넷 고장!
    console.log('유저 정보 가져오기 에러! : ' + e.message);
    document.body.insertAdjacentHTML('beforeend', e.message);
  }
}

//= try catch 기본 설명
try {
} catch (e) {
  //> catch 에서 e 는 에러 객체!
}
//> try 안에서 생긴 error 는 error 를 뿜지 않습니다. (error 가 나지만, 뱉지 않는 것!)
//> try catch 를 사용하는 이유: 사용자가 에러를 인지할 수 있도록 에러를 잡아서 사용자에게 뿌려줘야하는 일이 생깁니다.
// 콘솔 창은 안 보이지만, 브라우저에 뿌려진 에러를 보고 사용자가 이해할 수 있게 됩니다. 
// (예: 현재 서버가 원활하지 않아, 해당 페이지를 불러올 수 없습니다.)


//# 5. map,reduce,forEach,filter 

const data = [
  {
    productName:'간장게장',
    price: 25_000,
    saleRadio:10,
    quantity:5,
  },
  {
    productName:'장어구이',
    price: 28_500,
    saleRadio:24,
    quantity:3,
  },
  {
    productName:'고추잡채',
    price: 17_500,
    saleRadio:13,
    quantity:0,
  },
  {
    productName:'안심 스테이크',
    price: 22_900,
    saleRadio:23,
    quantity:0,
  }
]



// 수량이 남아있는 항목들만 배열로 뽑고싶다.. (filter) - 값을 따로 리턴해주어야한다. 단순 계산만 해줌
const notemptyProduct = data.filter((item) => {
	return item.quantity !== 0
})

console.log(notemptyProduct);

// price의 총 합 (reduce)

const total = data.reduce((acc, item) => {
	return acc + item.price
},0)

console.log(total);

// 세일 가격이 적용된 price만 뽑고싶다.. (map) - 배열 반환

const saleData = data.map((item) => {
	return `<li>${item.price * ((100 - item.saleRadio)/100)}</li>`
})

console.log(saleData);

// sale된 가격의 배열들을 다시 더해준다.
const saleTotal = saleData.reduce((acc, sale) => {
	return acc + sale
},0)

console.log(saleTotal);


// 받은 배열 데이터를 화면에 렌더링 하기 (forEach)

saleData.forEach((item) => {
	document.body.insertAdjacentHTML('beforeend', item);
})


