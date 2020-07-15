$(document).ready(function () {
    var Ctrl = new StudentRegisterController();
    Ctrl.PageInit();
    if (Ctrl.SessionCheck()) {
        Ctrl.DoPageRendering();
    } else {
        $("#TitlePanel").css("display","none");
        Ctrl.Logout();
        $("#PagePanel").load("/Views/Login.html");
    }
});

class StudentRegisterController extends ControllerBase {
    DoPageRendering() {
        $("#Content").html ("Hello");
    }
}

