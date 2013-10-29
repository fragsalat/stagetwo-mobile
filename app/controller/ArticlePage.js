ArticlePage = AbstractPage.extend({
	template: 'article',
	data: {
		articleID: 5,
		userID: 1,
		categoryID: 0,
		keyword: "Test",
		title: "This is just a simple test",
		description: "This is just a simple test description inside a small test article",
		imageID: 1,
		imageUrl: "http://test.stagetwo.eu/wcf/images/2013/10/original/7699bf733b7ce8da23d53cebbe3408de.jpeg",
		status: 3,
		reason: "test reason",
		points: 100.00,
		paid: 1,
		sources: "",
		robotTitle: "Sample robot test title",
		robotDescription: "Sample robot test description",
		robots: 0,
		created: 1382620664,
		updated: "2013-10-24 17:45:48",
		paragraphs: [{
			paragraphID: 5,
			paragraphOffset: 0,
			articleID: 5,
			imageID: 2,
			imageUrl: "http://test.stagetwo.eu/wcf/images/2013/10/original/03a15d56d142f0df1749b9661f44ad62.jpeg",
			headline: "This is the header of the paragraph",
			text: "This is just a simple test description inside a small test article with a small test paragraph content here come some other words to fit the condition s asdf asdf sdfa sdf asdf asdf asdfd sfsdf a sdfasdf This is just a simple description inside a small article with a small paragraph content here come some other words to fit the condition s asdf asdf sdfa sdf asdf asdf asdfd sfsdf a sdfasdf"
		}]
	}
});
// Add the template to template engine
ST.Template.addTemplate('article');
