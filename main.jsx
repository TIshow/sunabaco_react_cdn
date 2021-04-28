function App() {
	// useStateでツイート配列を取得する
	// 初期値は今まで通り
	// const [tweets, setTweets] = React.useState([
	// 	{
	// 		id: 0,
	// 		icon: '🌽',
	// 		displayName: 'もろこし太郎',
	// 		accountName: 'morokoshi',
	// 		content: '今日も1日もろこしがうまい'
	// 	},
	// 	{
	// 		id: 1,
	// 		icon: '🦐',
	// 		displayName: 'エビデンス',
	// 		accountName: 'evidence',
	// 		content: 'かにみそたべたい'
	// 	}
	// ]);

	const [tweets, setTweets] = React.useState([]);

	React.useEffect(() => {
		getAxiosDemo();
	}, []);

	const getAxiosDemo = () => {
		axios.get('https://jsondata.okiba.me/v1/json/fflCr210428043107')
			.then(response => {
				let tweets = response.data
				for (let i = 0; i < tweets.length; i++) {
					let tweet = tweets[i]
					console.log('tweet.id', tweet.id) // user.id 1
					console.log('tweet.icon', tweet.icon) // user.name JavaScript
					console.log('tweet.displayName', tweet.displayName) // user.age 19
					console.log('tweet.accountName', tweet.accountName) // user.url "https://json.okiba.me/"
					console.log('tweet.countent', tweet.content)
				}
				setTweets(tweets);
			}).catch(error => {
				console.log(error)
			});
	};

	// addTweet関数はuseCallbackで作成する
	// これも毎回作成していると重くなるので
	const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);
	console.log(tweets);
	return (
		<div>
			<TweetInput addTweet={addTweet} />
			<Timeline tweets={tweets} />
		</div>
	);
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);