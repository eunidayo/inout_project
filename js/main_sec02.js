// sec02

// // 탭버튼
function openTab(tabName) {
  // 모든 탭 버튼과 콘텐츠를 비활성화
  const buttons = document.querySelectorAll('.sec02 .tab-button');
  const contents = document.querySelectorAll('.sec02 .tab-content');

  buttons.forEach(button => button.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  // 클릭한 버튼을 활성화하고, 관련 콘텐츠를 표시
  document.querySelector(`.sec02 button[onclick="openTab('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}



// document.addEventListener('DOMContentLoaded', () => {
//   const waterAmountElement = document.getElementById('water-amount');

//   // 페이지 로드 시 물 섭취량 업데이트
//   function updateWaterAmount() {
//     const waterAmount = localStorage.getItem('waterAmount');
//     if (waterAmount !== null) {
//       waterAmountElement.textContent = `${waterAmount}L`;
//     } else {
//       waterAmountElement.textContent = '0.00L';
//     }
//   }

//   // 물 섭취량 업데이트
//   updateWaterAmount();

//   // 물 기록 버튼 클릭 시 페이지 이동
//   document.getElementById('record-water-button').addEventListener('click', () => {
//     window.location.href = 'record-water.html';
//   });

//   // 물 기록 목록 보기 버튼 클릭 시 페이지 이동
//   document.getElementById('view-water-records-button').addEventListener('click', () => {
//     window.location.href = 'water-record-list.html';
//   });
// });












document.addEventListener('DOMContentLoaded', () => {
  const waterAmountElement = document.getElementById('water-amount');
  const waterAmountDiningElement = document.getElementById('water-amount-dining');

  // 페이지 로드 시 물 섭취량 업데이트
  function updateWaterAmount() {
    const waterAmount = localStorage.getItem('waterAmount');
    if (waterAmount !== null) {
      waterAmountElement.textContent = `${waterAmount}L`;
      waterAmountDiningElement.textContent = `${waterAmount} L`;
    } else {
      waterAmountElement.textContent = '0.00L';
      waterAmountDiningElement.textContent = '0 L';
    }
  }

  // 물 섭취량 업데이트
  updateWaterAmount();

  // 물 기록 버튼 클릭 시 페이지 이동
  document.getElementById('record-water-button').addEventListener('click', () => {
    window.location.href = 'record-water.html';
  });

  // 물 기록 목록 보기 버튼 클릭 시 페이지 이동
  document.getElementById('view-water-records-button').addEventListener('click', () => {
    window.location.href = 'water-record-list.html';
  });
});
