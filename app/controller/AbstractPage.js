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
	init: function() {
		this.readData();
		this.assignVariables();
		this.render();
	},

	/**
	 * Receive data from the server
	 */
	readData: function() {

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

	}
});
