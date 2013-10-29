<header>
	<a data-page="Index">Index</a>
	<a data-page="Forum">Forum</a>
	<a data-reload="true">Reload</a>
</header>
<article class="article" data-articleID="{{articleID}}">
	<figure>
		<img src="{{&imageUrl}}" width="100%"/>
	</figure>
	<h1 class="title">
		{{title}}
	</h1>
	<p class="description">
		{{description}}
	</p>
	<section class="paragraphs">
	{{#paragraphs}}
		<div class="paragraph">
			<figure>
				<img src="{{&imageUrl}}" width="100%"/>
			</figure>
			<h2 class="headline">
				{{headline}}
			</h2>
			<p class="description">
				{{text}}
			</p>
		</div>
	{{/paragraphs}}
	</section>
	<div class="clear"></div>
</article>
