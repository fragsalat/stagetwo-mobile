AbstractPage = Class.extend({
	/**
	 * The template name to render these page
	 */
	template: '',

	/**
	 * The data passed to the template
	 */
	data: {},

	/**
	 * Page constructor
	 */
	init: function(data) {
		this.readData(arguments);
		this.assignVariables();
		this.render();
	},

	/**
	 * Receive data from the server
	 */
	readData: function(data) {

	},

	/**
	 * Assign the variables to the data object
	 */
	assignVariables: function() {

	},

	/**
	 * Render the page template
	 */
	render: function() {
		console.log('render', this.template);
		if (this.template) {
			var html = ST.Template.render(this.template, this.data);
			$('body').fadeOut(200, function() {
				$('body').html(html).fadeIn(200);
				$('body').attr('id', this.template);
			});
		}
	}
});
