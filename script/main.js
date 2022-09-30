//1. title정보, url주소 가져오기
let title = document.title; //문서의 제목을 title변수에 담는다.
let url = document.URL; //문서의 주소를 url변수에 담는다.
document.write(`<p class="p01">현재 문서의 제목은 ${title}이며, 문서가 위치한 주소는 ${url}입니다.</p>`);

//다크모드 함수
let n = 1;
function dark_mode(){
  if(n==1){ //버튼 클릭시 어둡게 서식을 적용
    document.bgColor='#333';
    document.fgColor="#fff";
    console.log(n);
    n=0;
  }else{ //버튼 누르면 다시 원래대로 밝게 서식을 적용
    document.bgColor='#fff';
    document.fgColor="#000";
    console.log(n);
    n=1;
  }      
}

// 이벤트
const d_btn = document.querySelector('#dark_btn');
d_btn.addEventListener('click', function(){
  dark_mode();
});
