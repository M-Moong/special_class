

// 조건문 구현

// 소문자를 넣어도 넘어갈 수 있도록

// ' ' 공백문자를 넣었을때 취소되었습니다.



/* 

let userName = prompt('사용자의 아이디를 입력해주세요.', '');
let lower = userName.toLowerCase();


if (lower == "admin") {
	let password = prompt("비밀번호가 뭐죠?").toLowerCase();
  if (password == "themaster") {
		alert("환영합니다!");
  } else if (password == null || undefined || ' ') {
		alert("취소되었습니다.");
  } else {
		alert("인증에 실패 하였습니다");
  }
} else if (userName === null || ' ') {
	alert("취소되었습니다");
} else {
	alert("누구세요?");
}


*/


/* 
let user = prompt('사용자의 아이디를 입력해주세요.', '');

// Object.prototype.toString.call(userName).slice(8, -1)

function login(userName) {
	
	if (!userName) return;
	
  if (userName.toLowerCase() === "admin") {
		let pw = prompt("비밀번호를 입력해 주세요.", "");
		
    if (pw.toLowerCase() === "themaster") {
			console.log("환영합니다.");
    } else {
			console.log("취소되었습니다");
    }
  } else if (userName === null) {
		console.log("취소했습니다.");
  } else {
		console.log("인증되지 않은 사용자 입니다.");
  }
}

login(user);
*/




let userName = prompt('사용자의 아이디를 입력해주세요.', '');

// 물음표를 사용하여 null 값처리
if (userName?.toLowerCase() === "admin") {
	let pw = prompt("비밀번호를 입력해 주세요.", "");

	if (pw?.toLowerCase() === "themaster") {
		console.log("환영합니다.");
	} else {
		console.log("취소되었습니다");
	}

// 정규표현식
} else if (userName === null || userName?.replace(/\s*/g, '') === '') {
	console.log("취소했습니다.");
} else {
	console.log("인증되지 않은 사용자 입니다.");
}




