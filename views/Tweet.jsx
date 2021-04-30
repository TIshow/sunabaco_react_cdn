function Tweet(props) {

  const [liked, setLike] = React.useState(false);

  // const toggleLike = () => {
  //   console.log('aaa')
  //   setLike(!liked);
  // };

  const toggleLike = React.useCallback(() => {
    console.log('aaa');
    setLike((prev) => !prev), [setLike]
  }
  );

  console.log('bbb')

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
          <span onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
        </div>
      </div>
    </div>
  );
}