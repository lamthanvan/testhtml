window.addEventListener('DOMContentLoaded', function() {
    // console.log('window - DOMContentLoaded - capture');
    var btnSwitch = document.getElementById('btnSwitch');
    var responseNav = document.getElementById('responNavbar');
    var phoneCall = document.getElementsByClassName('contact-number');

    btnSwitch.addEventListener('click', function(e) {
        if (btnSwitch.className === 'hamburger') {
            btnSwitch.className += ' is-active';
            responseNav.className += ' resp-active';
        } else {
            btnSwitch.className = 'hamburger';
            responseNav.className = 'nav responsive-nav';
        }
    })
    scrollListen();
}, true);

function scrollListen() {
    var last_pos;
    var backTop = document.getElementById('btn-back-top');
    window.addEventListener('scroll', function(e) {
        last_pos = window.scrollY;
        // console.log(last_pos)
        if (last_pos > 20) {
            backTop.className += ' show';
        } else {
            backTop.className = 'hide';
        }
    });
}
function mobileCall(number){
	window.location='tel:' +number;
}
// function resizeListen() {
//     window.addEventListener('resize', function(e) {
//         var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//         // console.log(innerWidth)
//         if (innerWidth > 768) {
//         	scrollListen();
//         }
//     });
// }