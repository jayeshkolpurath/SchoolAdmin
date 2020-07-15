$(document).ready(function () {
    var Ctrl = new FeesCollectionController();
    Ctrl.PageInit();
    if (Ctrl.SessionCheck()) {
        Ctrl.DoPageRendering();
    } else {
        $("#TitlePanel").css("display","none");
        Ctrl.Logout();
        $("#PagePanel").load("/Views/Login.html");
    }
});
  
class FeesCollectionController extends ControllerBase {
    DoPageRendering() {
        $("#Content").html ("Hello");
    }
}

