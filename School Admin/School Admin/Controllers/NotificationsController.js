$(document).ready(function () {
    var Ctrl = new NotificationsController();
    Ctrl.PageInit();
    if (Ctrl.SessionCheck()) {
        Ctrl.DoPageRendering();
    } else {
        $("#TitlePanel").css("display","none");
        Ctrl.Logout();
        $("#PagePanel").load("/Views/Login.html");
    }
});

class NotificationsController extends ControllerBase {
    DoPageRendering() {
        $("#Content").html ("Hello");
    }
}

