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

	// useEffectを使って最初の一回だけ動かす
	// 第二引数の[]の中は、変化を監視しておきたい変数を入れる。なければ空。
	// => その値が変化したら
	// 再びuseEffect内が呼ばれる。
	React.useEffect(() => {
		getAxiosDemo();
	}, []);

	// async / awaitを使用しない場合 => 使用してください
	// const getAxiosDemo = () => {
	// 	axios.get('https://jsondata.okiba.me/v1/json/fflCr210428043107')
	// 		.then(response => {
	// 			let tweets = response.data
	// 			for (let i = 0; i < tweets.length; i++) {
	// 				let tweet = tweets[i]
	// 				console.log('tweet.id', tweet.id) // user.id 1
	// 				console.log('tweet.icon', tweet.icon) // user.name JavaScript
	// 				console.log('tweet.displayName', tweet.displayName) // user.age 19
	// 				console.log('tweet.accountName', tweet.accountName) // user.url "https://json.okiba.me/"
	// 				console.log('tweet.countent', tweet.content)
	// 			}
	// 			setTweets(tweets);
	// 		}).catch(error => {
	// 			console.log(error)
	// 		});
	// };

	const getAxiosDemo = async () => {
		try {
			const res = await axios.get('https://jsondata.okiba.me/v1/json/GrG7i210430064836')
			console.log(res)
			setTweets(res.data);
		} catch (e) {
			console.error(e);
		}
	};

	// getAxiosDemo()；

	// tweetにはinputされた内容が渡される
	// prevはそれまでのtweet。...prevとすると、これまでの全てのtweetのデータを取れる
	// [tweet, ...prev]は、過去のtweetであるprevに、新しいtweetを追加して更新している
	// addTweet関数はuseCallbackで作成する
	// useseCallbackを使用しないと、毎回生成されてしまい重くなる
	// 毎回作成していると重くなるので……
	const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

	return (
		<div>
			<TweetInput addTweet={addTweet} />
			<Timeline tweets={tweets} />
			{/* <StateTest /> */}
		</div>
	);
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);