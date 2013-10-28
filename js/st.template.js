ST.Template = {

	_templates: [],

	init: function() {
		var templates = ['article'];
		for (var i in templates) {
			// Load html and pre compile it
			$.ajax({
				url: 'templates/' + templates[i] + '.tpl',
				async: false,
				success: $.proxy(function(data) {
					this._templates[template[i]] = Mustache.compile(data);
				}, this)
			});
		}
	},

	addTemplate: function(templateName) {
		this._templates.push(templateName);
	},

	render: function(templateName, data) {
		// Check if the template exists
		if (this._templates[templateName] == undefined) {
			return null;
		}
		return this._templates[templateName](data);
	}
}
