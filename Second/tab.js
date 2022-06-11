// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼0 누르면 orange 클래스명 추가

// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가

// document.querySelectorAll(".tab-button")[0].addEventListener('click',function(){
    // document.querySelectorAll(".tab-button")[0].removeAttribute('orange');

$('.tab-button').eq(0).on('click', function(){ // $('.tab-button') 같은 부분은 변수로 처리하는게 깔끔하다.
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');  //--> Jquery부분 다 JavaScript로 변경하기
    $('.tab-button').removeClass('show');
    $('.tab-button').eq(0).addClass('show');
})


// 반복문 사용해서 버튼 기능 다 처리하기.

for(let i = 0; i<3; i++){
    $('.tab-button').eq(i).on('click', function(){ // $('.tab-button') 같은 부분은 변수로 처리하는게 깔끔하다.
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');  //--> Jquery부분 다 JavaScript로 변경하기
        $('.tab-button').removeClass('show');
        $('.tab-button').eq(i).addClass('show');
    });
}


  