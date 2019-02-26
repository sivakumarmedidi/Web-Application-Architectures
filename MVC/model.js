class DataModel {
	constructor(initialValues = {}) {
		this._values = initialValues;
	}

	setCurrentValue(attributeName, value) {
		this._values[attributeName] = value;
		return value;
	}

	getCurrentValue(attributeName) {
		return this._values[attributeName];
	}
}

let Model = new DataModel({
	"firstname": "Siva",
	"lastname": "Medidi"
});
