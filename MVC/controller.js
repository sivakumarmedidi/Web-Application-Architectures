class Controller {
	constructor(model, view) {
		this._model = model;
		this._view = view;
	}

	initialize() {
		this.setAttributeValue("firstname", this._model.getCurrentValue("firstname"));
		this.setAttributeValue("lastname", this._model.getCurrentValue("lastname"));
		this.setInputListeners("firstname");
		this.setInputListeners("lastname");
	}

	setAttributeValue(attributeName, value) {
		this._model.setCurrentValue(attributeName, value);
		this._view.querySelectorAll(`[name=${attributeName}]`).forEach(elem => {
			elem[elem.tagName === "INPUT" ? "value" : "innerText"] = value;
		});
	}

	setInputListeners(attributeName) {
		this._view.querySelectorAll(`input[name=${attributeName}]`).forEach(elem => {
			elem.addEventListener('input', e => {
				this.setAttributeValue(attributeName, e.target.value);
			});
		});
	}
}

export default Controller;