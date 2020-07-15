class LoginHelper {
    constructor(User) {
        this.User = User;
    }
    FetchUserWithCredentials(UserName, Password) {
        /*
        Check if User exists in database with the given username and password
        if yes return true and return false otherwise.
        */
        var objUserModel = null;
        if (UserName == "test" && Password == "test") {
            objUserModel = new UserModel(UserName, Password); //dummy code
        }
        return objUserModel; //return dummy value - to be replaced with actual code
    }
}