function Tweet(props) {

  // liked値と、likedの値をセットするための関数setLikeを定義
  // デフォルト値はfalseにする
  const [liked, setLike] = React.useState(false);

  const toggleLike = React.useCallback(() => {
    // falseとtrueをその時の状態によって切り替える
    setLike(!liked);
  }
  );

  return (
    <div className="tweet">
      <div className="icon-container">{props.icon}</div>
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{props.displayName}</span>
          <span className="account-name">@{props.accountName}</span>
        </div>
        <div className="content">{props.content}</div>
        <div className="status-action">
          {/* liked == true なら '❤️', liked != true つまりfalseなら '♡' */}
          <span onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
        </div>
      </div>
    </div>
  );
}