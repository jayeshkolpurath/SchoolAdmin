  class ControllerBase{ 
    Logout() {
        this._ResetSession();
    }
    
    PageInit() {
        
    }
    
    SessionCheck() {
        if (sessionStorage.getItem("SASessionID")) {
            var SessionID = sessionStorage.getItem("SASessionID");
            return true;
        } else {
            return false;
        }
    }

    //Private Members    
    _ResetSession(){
        sessionStorage.setItem("SASessionID","");
        sessionStorage.removeItem("SASessionID");
    }
  }

