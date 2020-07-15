$(document).ready(function () {
    var Ctrl = new GalleryController();
    Ctrl.PageInit();
    if (Ctrl.SessionCheck()) {
        Ctrl.DoPageRendering();
    } else {
        $("#TitlePanel").css("display","none");
        Ctrl.Logout();
        $("#PagePanel").load("/Views/Login.html");
    }
});

class GalleryController extends ControllerBase {
    DoPageRendering() {
        $("#Content").html ("Hello");
    }
}

