import React, { Component } from "react"
import NewsItem from "./NewsItem"

export default class News extends Component {
	articles = [
		{
			source: {
				id: "the-verge",
				name: "The Verge",
			},
			author: "Emma Roth",
			title: "Spotify buys naming rights on FC Barcelona’s massive stadium",
			description:
				"Spotify has purchased the naming rights to the iconic soccer stadium where FC Barcelona plays its home games, Camp Nou. As part of the partnership, the stadium will be rebranded as Spotify Camp Nou.",
			url: "https://www.theverge.com/2022/3/15/22979943/spotify-camp-nou-barcelona-stadium",
			urlToImage:
				"https://cdn.vox-cdn.com/thumbor/6Uk2hcGVbd4Lac4N-UdhdohAtbk=/0x182:2032x1246/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23318946/spotify_camp_nou_soccer_stadium.png",
			publishedAt: "2022-03-15T22:57:31Z",
			content:
				"Camp Nou will be rebranded as Spotify Camp Nou\r\nSpotifys name will be featured on FC Barcelonas jerseys for the next four seasons.\r\nImage by FC Barcelona/Spotify\r\nCamp Nou, one of the most iconic soc… [+2059 chars]",
		},
		{
			source: {
				id: null,
				name: "New York Times",
			},
			author: "Andrew Keh",
			title: "U.S. Men’s Soccer Team Clinches World Cup Berth",
			description:
				"Five years after a calamitous night cost them a World Cup berth, the United States took the field in Costa Rica and, by merely avoiding a calamitous defeat, earned a place in Qatar.",
			url: "https://www.nytimes.com/2022/03/30/sports/usmnt-costa-rica-world-cup-qualifying.html",
			urlToImage:
				"https://static01.nyt.com/images/2022/03/30/multimedia/30soccer-usmnt/30soccer-usmnt-facebookJumbo.jpg",
			publishedAt: "2022-03-31T03:18:13Z",
			content:
				"The maturation of his young players would become the predominant plotline of the competition. And the lessons, in that regard, kept coming.\r\nOnly four members of the current roster Christian Pulisic,… [+1136 chars]",
		},
		{
			source: {
				id: null,
				name: "New York Times",
			},
			author: "Rory Smith",
			title: "Messi, Ronaldo and Soccer’s Golden Sunset",
			description:
				"This year’s World Cup will be the last for some household names, meaning soccer will go into the tournament with one elite and emerge with quite another.",
			url: "https://www.nytimes.com/2022/03/25/sports/soccer/messi-ronaldo-world-cup.html",
			urlToImage:
				"https://static01.nyt.com/images/2022/03/25/multimedia/25rory-ronaldo/25rory-ronaldo-facebookJumbo.jpg",
			publishedAt: "2022-03-25T16:08:07Z",
			content:
				"This World Cup will extinguish the light of a whole galaxy. It will, most likely, be the final time Luka Modric, Thiago Silva, Daniel Alves, Manuel Neuer, Thomas Müller, Jordi Alba, Ángel Di María, L… [+2208 chars]",
		},
		{
			source: {
				id: null,
				name: "New York Times",
			},
			author: "Kurt Streeter",
			title: "Should Russian Athletes Be Barred From Competition?",
			description:
				"Our columnist examines whether the soft power of sport should be wielded against Russia, penalizing athletes with little or no say in its actions.",
			url: "https://www.nytimes.com/2022/03/14/sports/russian-athletes-banned.html",
			urlToImage:
				"https://static01.nyt.com/images/2022/03/14/sports/14streeter-sot-print/14streeter-sot1-facebookJumbo.jpg",
			publishedAt: "2022-03-14T09:47:26Z",
			content:
				"But the bans are not complete.\r\nMany Russian athletes continue to prosper right in front of us. Individual soccer players can still participate in European soccer leagues. Ovechkin leads a robust Rus… [+912 chars]",
		},
		{
			source: {
				id: "reuters",
				name: "Reuters",
			},
			author: "Reuters Editorial",
			title: "Abramovich puts Chelsea soccer club up for sale - Reuters",
			description:
				"Russian businessman Roman Abramovich said on Wednesday he would sell Chelsea Football Club, 19 years after buying it and setting the team on a path to sporting glory, and promised to donate money from the sale to help victims of the war in Ukraine.",
			url: "https://www.reuters.com/video/watch/idsYXm?now=true",
			urlToImage:
				"https://ajo.prod.reuters.tv/api/v2/img/62200341e4b085d396fd4d2b-1646265153291?location=LANDSCAPE",
			publishedAt: "2022-03-03T00:18:21Z",
			content:
				"Posted \r\nRussian businessman Roman Abramovich said on Wednesday he would sell Chelsea Football Club, 19 years after buying it and setting the team on a path to sporting glory, and promised to donate … [+57 chars]",
		},
		{
			source: {
				id: "reuters",
				name: "Reuters",
			},
			author: null,
			title: "Brawl during soccer match in Mexico leaves 22 injured - Reuters",
			description:
				"Mexican authorities said at least 22 people have been injured in a brawl on Saturday when soccer fans stormed the field during a top flight match between mid-table Queretaro and last year's Liga MX champions Atlas.",
			url: "https://www.reuters.com/lifestyle/sports/brawl-during-soccer-match-mexico-leaves-22-injured-2022-03-06/",
			urlToImage:
				"https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=77",
			publishedAt: "2022-03-06T05:13:00Z",
			content:
				"MEXICO CITY, March 5 (Reuters) - Mexican authorities said at least 22 people have been injured in a brawl on Saturday when soccer fans stormed the field during a top flight match between mid-table Qu… [+1077 chars]",
		},
		{
			source: {
				id: "reuters",
				name: "Reuters",
			},
			author: null,
			title: "Three people in critical condition after Mexican soccer brawl - Reuters",
			description:
				"Three people were in critical condition on Sunday after violent clashes at a soccer match in the Mexican state of Queretaro left more than two dozen people hospitalized, and officials said they would prosecute some assailants for attempted murder.",
			url: "https://www.reuters.com/lifestyle/sports/three-people-critical-condition-after-mexican-soccer-brawl-2022-03-06/",
			urlToImage:
				"https://www.reuters.com/resizer/wr6ml8kFo1KKxAuX_vrgKMu8Lfo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VJ2HG5EAURNRDC4PNN4SRUSEXE.jpg",
			publishedAt: "2022-03-06T19:08:00Z",
			content:
				"MEXICO CITY, March 6 (Reuters) - Three people were in critical condition on Sunday after violent clashes at a soccer match in the Mexican state of Queretaro left more than two dozen people hospitaliz… [+2026 chars]",
		},
		{
			source: {
				id: null,
				name: "New York Times",
			},
			author: "Rory Smith",
			title: "Poland Refused to Play Russia Once. It May Have to Do So Again.",
			description:
				"Poland’s stars cornered FIFA by threatening to boycott a World Cup qualifier. Now, as Russia appeals the decision, Robert Lewandowski, Wojciech Szczesny and their teammates may have to double down.",
			url: "https://www.nytimes.com/2022/03/14/sports/soccer/poland-russia-fifa.html",
			urlToImage:
				"https://static01.nyt.com/images/2022/03/14/multimedia/14soccer-poland2/14soccer-poland2-facebookJumbo.jpg",
			publishedAt: "2022-03-14T15:07:57Z",
			content:
				"Jordan Henderson, the Liverpool captain, spearheaded a campaign to help raise donations for the National Health Service at the height of the pandemic, after crude attempts by lawmakers in Britain to … [+1284 chars]",
		},
	]
	constructor() {
		super()
		console.log("Constructor from News component")
		this.state = {
			articles: this.articles,
			loading: false,
		}
	}
	render() {
		return (
			<div>
				<h2>React News - Sports Headlines</h2>
				<div className="container row m-auto">
					{this.state.articles.map((article) => {
						return (
							<div className="col-md-4 m-auto" key= {article.url}>
								<NewsItem
									title={article.title}
									description={article.content}
									imgUrl={article.urlToImage}
									newsUrl={article.url}
								/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
