var feature1Col = 0;
var feature2Col = 1;
var developCol = 2;
var releaseCol = 3;
var masterCol = 4;
var hotfixCol = 5;


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