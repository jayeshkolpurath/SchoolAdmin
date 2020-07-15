//Controller Class

class LoginController extends ControllerBase {
    Login(UserName, Password) {
        var objSessionHelper = new SessionHelper();
        var objLoginHelper = new LoginHelper();
        var objUserModel = objLoginHelper.FetchUserWithCredentials(UserName, Password);
        if(objUserModel!=null) {
            objSessionHelper.Save("SASessionID", "TestUser");
        }else{
            objSessionHelper.Delete("SASessionID");
        }
    }
}


//Page Events
$(document).ready(function () {
    var Controller = new LoginController();
    $("#LoginButton").click(function () {
        Controller.Login($("#txt_UserName").val(), $("#txt_Password").val());
        $("#TitlePanel").css("display", "none");
        window.location = "/Views/Layout.html";
    });

    $("#lnkSignOut").click(function () {
        Controller.Logout();
    });
});

