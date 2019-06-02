import Controller from "./controller.js";
import DataModel from "./model.js";

class App {
    constructor() {
        this.model = new DataModel({
            "firstname": "Siva",
            "lastname": "Medidi"
        });
        this.view = document.getElementById("view");
        let controller = new Controller(this.model, this.view);
        controller.initialize();
    }
}

document.addEventListener("DOMContentLoaded", () => new App());