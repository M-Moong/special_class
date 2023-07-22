//* 1. thorttle, debounce

// window.addEventListener('resize', () => {
//   console.log('resize!!!');
// });
//> 이렇게만 하면 창크기가 움직일 떄 마다 엄청나게 많은 이벤트가 생성됨.

//= function 호출 방식
// call(this, 1,2,3,4) - 
// apply (this, [1,2,3,4]) - 애는 arguments를 배열로 전달해야한다.
// bind (this,1,2,3,4) 실행x - 전달만 해주는 함수이다.(튀어나오는 함수를 사용하기 위해)

function sum(a, b, c) {
	console.log(this);
	console.log(a,b,c);
}

const user = {
	name: 'tiger',
	age: 32
}


// sum.call(user, 10, 100, 1000)
//> 내가 this 는 user 로 설정할거고, 10, 100, 1000 arguments 로 가져올거야


sum.apply(user, [{nicekName: 'kindtiger'}])
//> this 도 마음대로 받을 수 있고, 항목도 배열로 받을 수 있음. 배열안에 객체도 가능.

const newSum = sum.bind(user,[10])

newSum(); // 해도 아무것도 실행안됨.
//> bind 는 이렇게 직접 실행시켜주어야 함.










function debounce(callback, limit = 100) {
  //> limit 은 제한 시간. limit = 100 이면 0.1초.

  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
//> timeout 은 변수. undefined 가 들어있습니다.
//> clearTimeout 을 실행하게 되면 이 timer 를 제거할 수 있지만, 지금은 아무것도 없네?
//> 아무것도 제거하지 않고 지나갑니다.
//> setTimeout 을 설정하게 되면 랜덤한 id 값이 튀어나옵니다.
//> 따라서 timeout 에 setTimeout 아이디가 등록이 됩니다.
//> 음.. ㅇㅙ 멈출 때 cleartimeout(timeout) 줄이 지워지는 ㅈ ㅣ,,,,,,이해못햇어ㅇㅛ,,

/* window.addEventListener(
  'resize',
  debounce((e) => {
    console.log(e);
    //> 콘솔 결과: Event {isTrusted: true, type: 'resize', target: Window, currentTarget: Window, eventPhase: 2, …}

    console.log(e.type);
    //> 이렇게 사용할 수 있습니다.
    //> 콘솔 결과: resize
  }, 1000)
); */



// 2. throttle



function throttle(callback, limit = 100) {
	let waiting = false;

	return () => {


		if (!waiting) {
			callback();
			waiting = true;
			setTimeout(() => {
				waiting = false;
			}, limit);
		}
	};
}


window.addEventListener('resieze', throttle((e) => {
		console.log(e.type);
},1000))

