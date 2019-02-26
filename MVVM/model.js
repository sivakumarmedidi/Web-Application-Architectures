class DataModel {
	constructor(initialValues = {}) {
		this._values = initialValues;
		this.subscriptions = {};
	}

	subscribe(attributeName, callback) {
		if(this.subscriptions[attributeName]) {
			this.subscriptions[attributeName].push(callback);
		} else {
			this.subscriptions[attributeName] = [callback];
		}
	}

	notify(attributeName, value) {
		(this.subscriptions[attributeName] || []).forEach(callback => {
			callback(value);
		});
	}

	setCurrentValue(attributeName, value) {
		this._values[attributeName] = value;
		this.notify(attributeName, value);
		return value;
	}

	getCurrentValue(attributeName) {
		return this._values[attributeName];
	}
}

let Model = new DataModel({
	"firstname": "Siva",
	"lastname": "Medidi"
})
