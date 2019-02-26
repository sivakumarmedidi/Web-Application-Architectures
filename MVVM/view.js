let firstname_input = document.getElementById('firstname');
let lastname_input = document.getElementById('lastname');

let firstname_label = document.getElementById('firstname_label');
let lastname_label = document.getElementById('lastname_label');

let vm = new ViewModel(Model);
vm.bind(firstname_input, 'firstname');
vm.bind(lastname_input, 'lastname');

vm.bind(firstname_label, 'firstname');
vm.bind(lastname_label, 'lastname');

