<header>
	<a data-page="Article">Article</a>
	<a data-page="Forum">Forum</a>
	<a data-reload="true">Reload</a>
</header>
<section class="articleList">
	{{#articles}}
	<article data-page="Article" data-articleID="{{articleID}}">
		<figure>
			<img src="{{&imageUrl}}" width="48" height="48"/>
		</figure>
		<h2>
			{{title}}
		</h2>
		<p class="description">
			{{description}}
		</p>
		<div class="clear"></div>
	</article>
	{{/articles}}
</section>
