$(document).ready(function(){
	accordion();
    tabMenu();

    scrollHeader();
    langBtn();
    siteMap();
    mobileHeaderAccordion();
    hamburger();
    topBtn();
});

function topBtn(){
    $(".topBtn").click(function() {
        $('html, body').stop().animate({
            scrollTop : 0
        }, 700);
        return false;
    });
}


function mobileHeaderAccordion(){
    $('.header_mo .nav > ul > li > span').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('span').removeClass('active');
        return false;
        
    })
}

function hamburger(){
    $('.header_mo .hamburger').click(function(){
        $(this).parents('.header_mo').toggleClass('active');
    
        
        if($('.header_mo').hasClass('active')) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    })
}

function siteMap(){
    $('.siteMap .closeBtn').click(function(){

    
        $(window).bind("pageshow", function (event) {
            if (event.originalEvent.persisted) {

            }
            else {
                // hamburger();
            }
        });
    
    })
}

function langBtn(){
    $('.langBox > button').click(function(){
        $(this).toggleClass('active');
    })
}

function scrollHeader(){
    let lastScroll = 0;
    if($(window).width() > 768) {
        // window 크기가 768보다  클 때
            $(window).on('scroll', function(){
                let scrollTop = $(this).scrollTop();
                if(scrollTop > lastScroll) {
                    //down
                    $('.main header').addClass('active');
                } else {
                    // up
                    $('.main header').removeClass('active');
                }
                lastScroll = scrollTop;
            });
        }
}

function accordion(){

    $('.accordionBox .titleBox').click(function(){        
        $('.accordionBox .titleBox').removeClass('active');

        if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }
    })

}


function tabMenu(){
    $('.tabBtnBox button').click(function(){
        $('.tabBtnBox button').removeClass('active');
        $(this).addClass('active');
        
        if($('.tabBtnBox .tabBtn_1').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_1').addClass('active');
		}
		if($('.tabBtnBox .tabBtn_2').hasClass('active')){
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .tabContent_2').addClass('active');
		}
    })
}
// 해색 원격탐사 탭메뉴