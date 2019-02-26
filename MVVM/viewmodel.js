class ViewModel {
	constructor(model) {
		this._model = model;
	}

	bind(viewElement, attributeName) {
		viewElement.value = this._model.getCurrentValue(attributeName);

		this._model.subscribe(attributeName, function(changedValue) {
			for(let elem of document.getElementsByName(attributeName)) {
				if(elem.tagName === "INPUT"){
					elem.value = changedValue;
				} else {
					elem.innerText = changedValue;
				}
			}
		});

		viewElement.addEventListener("input", e => {
			this._model.setCurrentValue(viewElement.name, e.target.value);
		});
	}
}