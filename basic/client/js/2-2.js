
// 0 ~ 2 까지의 난수를 생성하는 코드로직
function getRandomValue(n) {
	return Math.floor(Math.random() * n);
}



const result = ['가위', '바위', '보'];
const user = prompt('입력해봐라','');


const index = getRandomValue(3);
const computer = result[index];

// 게임 함수
function game(user, computer) {
	
	const total = user + computer;

	if (!user) {
		while (!user) {
			user = prompt("다시 입력해봐라", "");
		}
	}


	if (user === computer) {
		console.log("축하요 draw");
	} else {
		switch (total) {
			case "가위보":
			case "바위가위":
			case "보바위":
				return "사용자 승리";

			case "가위바위":
			case "보가위":
			case "바위보":
				return "computer 승리";
		}
	}
}

game(user, computer);

// 가위보
// 바위가위
// 보바위

// 가위바위
// 보가위
// 바위보

// user === computer draw






// game('가위', '보') // 사용자 승리!
// game('보', '가위') // 컴퓨터 승리!
// game('주먹', '주먹') // 무승부!


























