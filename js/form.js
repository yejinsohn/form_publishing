$(document).ready(function(){
    $(".menu-box .menu").click(function (){
        var index = $(this).index();

        //Menu Event
        $(".menu-box .menu").removeClass("click");
        $(this).addClass("click");

        //Tap area Event
        $(".form-box .menu-area").hide();
        $(".form-box .menu-area").eq(index).show();
    });
});

function next(idx){
    $(".form-box .menu-area").hide();
    $(".form-box .menu-area").eq(idx + 1).show();

    //Menu Event
    $(".menu-box .menu").removeClass("click");
    $(".menu-box .menu").eq(idx + 1).addClass("click");
}

function prev(idx){
    $(".form-box .menu-area").hide();
    $(".form-box .menu-area").eq(idx - 1).show();

    //Menu Event
    $(".menu-box .menu").removeClass("click");
    $(".menu-box .menu").eq(idx - 1).addClass("click");
}

// 컬러톤 추가
function setColorBox() {
    var colorBox2 = $('#color-box-2');
    var colorBox3 = $('#color-box-3');
    var setcolor = $('.color-plus');

    if (colorBox2.css('display') === 'none') {
        colorBox2.show();
    } else if (colorBox2.css('display') === 'block') {
        colorBox3.show();
        setcolor.hide();
    }
}

// 메인 화면 선택
function showMainDiv() {
    var selectedRadioId = $('input[name="main-radio"]:checked').attr('id');
    $('.main-div').hide();
    $('#div-' + selectedRadioId).show();
}

// 타이틀 스타일 선택
function showTitleDiv() {
    var selectedRadioId = $('input[name="title-radio"]:checked').attr('id');
    $('.title-div').hide();
    $('#div-' + selectedRadioId).show();
}

// 구성 선택
function detailOpen(element) {
    $(element).siblings(".detail-info").slideToggle();
}

function showFeatureDiv() {
    var selectedRadioId = $('input[name="feature-radio"]:checked').attr('id');
    $('.feature-div').hide();
    $('#div-' + selectedRadioId).show();
}

function showMenuDiv() {
    var selectedRadioId = $('input[name="menu-radio"]:checked').attr('id');
    $('.menu-div').hide();
    $('#div-' + selectedRadioId).show();
}

function showStepDiv() {
    var selectedRadioId = $('input[name="step-radio"]:checked').attr('id');
    $('.step-div').hide();
    $('#div-' + selectedRadioId).show();
}

