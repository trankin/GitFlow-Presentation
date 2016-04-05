var j = 0;
window.addEventListener("click", function(){


    if(j < cmdArr.length) {
        $.each(cmdArr[j++], function (index, value) {
            eval(value);
        });

        $("html, body").stop().animate({
            scrollTop: $(document).height(),
            scrollLeft: ($(document).outerWidth() - $(window).width())
        }, 800);
    }


});