/**
 * Class inheritance script
 * @author John Resig
 */
(function(){var e=false,t=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(n){function o(){if(!e&&this.init)this.init.apply(this,arguments)}var r=this.prototype;e=true;var i=new this;e=false;for(var s in n){i[s]=typeof n[s]=="function"&&typeof r[s]=="function"&&t.test(n[s])?function(e,t){return function(){var n=this._super;this._super=r[e];var i=t.apply(this,arguments);this._super=n;return i}}(s,n[s]):n[s]}o.prototype=i;o.prototype.constructor=o;o.extend=arguments.callee;return o}})();

/**
 * Define namespace
 */
ST = {};

ST.Navigation = {

	_currentPage: 'Index',

	init: function() {
		// Initial Page render
		this.go(this._currentPage);
		// Bind naviagte listener
		$(document.body).delegate('[data-page]', 'click', $.proxy(this._click, this));
		$(document.body).delegate('[data-reload]', 'click', $.proxy(this._reload, this));
		$(window).bind('popstate', $.proxy(this._popState, this));
	},

	go: function(page, data) {
		if (window[page + 'Page'] !== undefined) {
			this._currentPage = page;
			new window[page + 'Page'](data);
		}
	},

	_click: function(event) {
		event.preventDefault();

		var page = $(event.currentTarget).data('page');
		var data = $(event.currentTarget).data();
		delete data['page'];
		if (page) {
			this.go(page.charAt(0).toUpperCase() + page.slice(1), data);
		}
	},

	_popState: function(event) {
		// jQuery fix
		if (!event.state) {
			event.state = event.originalEvent.state;
		}
	},

	_reload: function(event) {
		event.preventDefault();

		ST.Template.init();
		this.go(this._currentPage);
		// Reload stylesheet
		$('link[rel=stylesheet]').each(function() {
			$(this).replaceWith(this)
		});
	}
};
