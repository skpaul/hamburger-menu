$(document).ready(function(){         
    $('#hambItem').click(function(){
        toggleHamb();
    });
    $('#hambClose').click(function(){
        toggleHamb();
    });

    function toggleHamb() {
        mainTopNav = $("#mainTopNav");
        var hambItem = document.getElementById("hambItem");
        var hambClose = document.getElementById("hambClose");

        if(mainTopNav.hasClass('nav-open')){
            mainTopNav.hide(700).removeClass('nav-open');
        }
        else{
            mainTopNav.show(700).addClass('nav-open');
        };

        if (hambClose.style.display == "block") {
            hambClose.style.display = "none";
        } else {
            hambClose.style.display = "block";
        }

        if (hambItem.style.display == "block") {
            hambItem.style.display = "none";
        } else {
            hambItem.style.display = "block";
        }
    }
});