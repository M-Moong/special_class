






// #조건문 구현하기
//* 조건사항
//* 1. 소문자를 넣어도 넘어갈 수 있도록한다.
//* 2. ' ' 공백문자를 넣었을때도 '취소되었습니다.'라는 문구 띄운다.

//^ ※ prompt는 esc를 눌러서 창을 취소하면 null값으로 들어온다.


//@ 내가 혼자 만든 조건문
// let userName = prompt("사용자의 아이디를 입력해주세요.", "");
// let lower = userName.toLowerCase();   //* 1.

// if (lower == "admin") {
//   // 아이디를 맞게 입력하였을때 발생
//   let password = prompt("비밀번호가 뭐죠?").toLowerCase(); // 아이디를 맞게 입력하고 오면 띄워주는 비밀번호 프롬프트

//   if (password == "themaster") {
//     alert("환영합니다!"); // 비밀번호를 알맞게 입력하였을때
//   } else if (password == null || undefined || " ") {
//     alert("취소되었습니다."); // 비밀번호가 없거나 공백문자거나 esc로 껏을때 발생
//   } else {
//     alert("인증에 실패 하였습니다"); // 잘못된 비밀번호를 입력하였을때 발생한다.
//   }
// } else if (userName === null || " ") {
//   //* 2.
//   alert("취소되었습니다"); // 아이디가 문자열이거나 , 공백문자일때 발생
// } else {
//   alert("누구세요?"); // 잘못된 아이디를 입력하였을때 발생한다.
// }



//@ 범쌤이 알려주신 조건문
let userName = prompt('사용자의 아이디를 입력해주세요.', '');

// ?문 - 물음표를 사용하여 null 값처리
if (userName?.toLowerCase() === "admin") {
	let pw = prompt("비밀번호를 입력해 주세요.", "");

	if (pw?.toLowerCase() === "themaster") {
		console.log("환영합니다.");
	} else {
		console.log("취소되었습니다");
	}

// 정규표현식을 활용한 공백처리 
// \s 는 공백을 의미
// replace함수로 공백을 '' (빈문자열)로 변환 시켜준다.
} else if (userName === null || userName?.replace(/\s*/g, '') === '') {
	console.log("취소했습니다.");
} else {
	console.log("인증되지 않은 사용자 입니다.");
}






