IndexPage = AbstractPage.extend({
	template: 'index',

	data: {
		articles: [{
			articleID: 1,
			title: 'Review: Slender Arrival - PC',
			imageUrl: 'http://www.stagetwo.eu/wcf/images/2013/03/150x150/881c09e2c3b9003933bc24da6e5dd8bf.jpeg',
			description: 'Eine kleine Review zu dem frisch erschienen Horror-Game "Slender: The Arrival"',
		},{
			articleID: 1,
			title: 'StageTwo Hungergames Server ist Live!',
			imageUrl: 'http://www.stagetwo.eu/wcf/images/2013/03/150x150/216cf6d119fe1c85c634a393ec05f945.png',
			description: 'Der StageTwo Minecraft Hungergames Server ist online! Kämpft auf verschieden Maps gegeneinander, findet versteckte Kisten mit Waffen und Rüstung und gebt Acht, dass ihr nicht verhungert!',
		},{
			articleID: 1,
			title: 'Review: Slender Arrival - PC',
			imageUrl: 'http://www.stagetwo.eu/wcf/images/2013/03/150x150/881c09e2c3b9003933bc24da6e5dd8bf.jpeg',
			description: 'Eine kleine Review zu dem frisch erschienen Horror-Game "Slender: The Arrival"',
		}]
	}
});
// Add the template to template engine
ST.Template.addTemplate('index');
