$(window).ready(function () {
    $('#loading-screen').fadeOut(200)

    var left, width, cont = "#q-cont";
    var slideCount = 5;

    $('span').click(function () {
        $(this).css("background", "#5a6");
        $('.re').css("background", "#d90");
        next();
    });
    $('.op').click(function () {
        // 선택한 옵션의 값과 해당 슬라이드의 ID를 가져옵니다.
        var value = $(this).text();
        var slideId = $(this).closest('.slide').attr('id');

        // 슬라이드의 ID에 따라 data 객체에 값을 저장합니다.
        data[slideId.slice(5)] = value;  // 'slide1'에서 '1'을 추출하여 data 객체의 속성 이름으로 사용합니다.
    });
    function next() {
        const windowWidth = $(window).width(); // 창 너비 (px)
        const slideWidth = 100; // 슬라이드 너비 (vw)
    
        let left = parseInt($(cont).css("left")); // 슬라이드 이동량 (px)
        left = left / windowWidth * 100; // 슬라이드 이동량을 vw 단위로 변환
    
        left -= slideWidth;
        $(cont).css("left", left + "vw");
    };
   
    
});
