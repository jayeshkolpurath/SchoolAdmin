$(document).ready(function () {
    var Ctrl = new DepartmentsController();
    Ctrl.PageInit();
    if (Ctrl.SessionCheck()) {
        Ctrl.DoPageRendering();
    } else {
        $("#TitlePanel").css("display","none");
        Ctrl.Logout();
        $("#PagePanel").load("/Views/Login.html");
    }
});

class DepartmentsController extends ControllerBase {
    DoPageRendering() {
        $("#Content").html ("Hello");
    }
}

