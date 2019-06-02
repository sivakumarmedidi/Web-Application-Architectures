import DataModel from "./model.js";
import ViewModel from "./viewmodel.js";

class View {
    constructor() {
        this.model = new DataModel({
            "firstname": "Siva",
            "lastname": "Medidi"
        });
        this.vm = new ViewModel(this.model);
        this.bindElements();
    }

    bindElements() {
        let firstname_input = document.getElementById('firstname');
        let lastname_input = document.getElementById('lastname');

        let firstname_label = document.getElementById('firstname_label');
        let lastname_label = document.getElementById('lastname_label');

        this.vm.bind(firstname_input, 'firstname');
        this.vm.bind(lastname_input, 'lastname');
        
        this.vm.bind(firstname_label, 'firstname');
        this.vm.bind(lastname_label, 'lastname');
    }
}

export default View;

