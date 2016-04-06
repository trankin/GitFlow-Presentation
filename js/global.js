var feature1Col = 1;
var feature2Col = 0;
var developCol = 2;
var releaseCol = 3;
var masterCol = 4;
var hotfixCol = 5;


var j = 0;

var webrtc = new SimpleWebRTC({

});


window.addEventListener("click", function(){


    if(j < cmdArr.length) {
        webrtc.sendDirectlyToAll("testtest", "currentclick", {currentClick: (j+1)});
        window.document.title = "step: " + j+1;
        $.each(cmdArr[j++], function (index, value) {
            eval(value);
        });

        $("html, body").stop().animate({
            scrollTop: $(document).height(),
            scrollLeft: ($(document).outerWidth() - $(window).width())
        }, 800);
    }


});





webrtc.on('connectionReady', function (sessionId) {
    webrtc.joinRoom('tomlr_git_graph_test', function(err, desc){
        if(!err){
            console.log("IN ROOM" + desc)
        }else{
            console.log("ERR ROOM");
        }
    });
})

webrtc.on('channelOpen', function() {
    webrtc.sendDirectlyToAll("testtest", "onpage", {currentPage: currentPage});
    webrtc.sendDirectlyToAll("testtest", "currentclick", {currentClick: j});
});

