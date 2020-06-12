var $anim = $('.anim');
$anim.waypoint(function (direction) {
    if (direction == "down") {
        $anim.addClass('slide-in-right');
        $anim.addClass('removeHidden');
        // setTimeout(function () {
        //     $anim.removeClass('slide-in-right');
        // }, 2000);
    }
}, {
    offset: '50%'
});
var $anim2 = $('.anim2');
$anim2.waypoint(function (direction) {
    if (direction == "down") {
        $anim2.addClass('slide-in-right');
        $anim2.addClass('removeHidden');
        // setTimeout(function () {
        //     $anim2.removeClass('slide-in-right');
        // }, 2000);
    }
}, {
    offset: '50%'
});
var $anim3 = $('.anim3');
$anim3.waypoint(function (direction) {
    if (direction == "down") {
        $anim3.addClass('slide-in-right');
        $anim3.addClass('removeHidden');
        // setTimeout(function () {
        //     $anim3.removeClass('slide-in-right');
        // }, 2000);
    }
}, {
    offset: '50%'
});