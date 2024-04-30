// 숫자를 3자리로 초기화
function padNumber(num) {
  return String(num).padStart(3, '0');
}

// 출석코드 입력필드와 출석 버튼
var pinInput = document.getElementById("pin");
var attendButton = document.getElementById("attendBtn");

// 001부터 999까지 입력
for (let i = 1; i <= 999; i++) {
  var formattedValue = padNumber(i); // 3자리로 포맷팅

  if (pinInput) {
    pinInput.value = formattedValue; // 필드에 값 설정
    //console.log("입력한 값:", pinInput.value); // 콘솔에 확인
  }

  if (attendButton) {
    attendButton.click(); // 출석 버튼 클릭
    //console.log("출석 버튼을 클릭했습니다");
  }

  // 엔터 키 이벤트 생성(코드 불 일치 팝업 닫기)
  if (pinInput) {
    var event = new KeyboardEvent('keydown', { key: 'Enter' }); // 엔터 키 이벤트 생성
    pinInput.dispatchEvent(event); // 입력 필드에 이벤트 디스패치
    //console.log("팝업을 닫았습니다");
  }
}
