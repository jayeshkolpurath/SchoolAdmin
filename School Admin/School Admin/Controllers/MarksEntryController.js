$(document).ready(function () {
    var Ctrl = new MarksEntryController();
    Ctrl.PageInit();
    if (Ctrl.SessionCheck()) {
        Ctrl.DoPageRendering();
    } else {
        $("#TitlePanel").css("display","none");
        Ctrl.Logout();
        $("#PagePanel").load("/Views/Login.html");
    }
});

class MarksEntryController extends ControllerBase {
    DoPageRendering() {
        $("#Content").html ("Hello");
    }
}

