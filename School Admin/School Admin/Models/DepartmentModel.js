class DepartmentModel extends ModelBase {
    constructor(Departments) {
        this.Departments = Departments;
    }
    Update() {
        Departments.forEach(element => {
            switch (element.Action) {
                case "A":
                    break;
                case "E":
                    break;
                case "D":
                    break;
            }
        });
    }
    Get(){

    }
}

class DepartmentEntry {
    constructor(ID, Name, Action) {
        this.id = id;
        this.name = name;
        this.Action = Action;
    }


}