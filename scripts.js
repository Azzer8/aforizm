function Lang(evt, lang) {
    // Declare all variables
    var i, content, btnflip;

    // Get all elements with class="tabcontent" and hide them
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    // Get all elements with class="btnflip" and remove the class "active"
    btnflip = document.getElementsByClassName("btnflip");
    for (i = 0; i < btnflip.length; i++) {
        btnflip[i].className = btnflip[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(lang).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}