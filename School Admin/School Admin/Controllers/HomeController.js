
$(document).ready(function () {
    var Ctrl = new HomeController();
    Ctrl.PageInit();
    if (Ctrl.SessionCheck()) {
        Ctrl.DoPageRendering();        
    } else {
        $("#TitlePanel").css("display","none");
        Ctrl.Logout();
        $("#PagePanel").load("/Views/Login.html");
    }
});

class HomeController extends ControllerBase{
DoPageRendering(){
    
}}

