ST.Template = {

	_templates: {},

	init: function() {
		for (var name in this._templates) {
			// Load html and pre compile it
			$.ajax({
				url: 'app/templates/' + name + '.tpl',
				async: false,
				success: $.proxy(function(data) {
					this._templates[name] = Mustache.compile(data);
				}, this)
			});
		}
	},

	addTemplate: function(templateName) {
		this._templates[templateName] = null;
	},

	render: function(templateName, data) {
		// Check if the template exists
		if (!this._templates[templateName]) {
			return null;
		}
		return this._templates[templateName](data);
	}
}
