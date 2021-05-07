// hooks（useState）を使うやり方
const UseStateTest = () => {
    const [count, setCount] = React.useState(0); //　useStateの定義, 初期値は0

    // クリックされたら、count を +1　する
    const handleClick = () => {
        setCount(() => count + 1);
    };

    // クリックされたら、count を -1　する
    const handleReduce = () => {
        setCount(() => count - 1);
    };

    return (
        <>
            <div>クリック回数： {count}</div>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleReduce}>-1</button>
        </>
    )
}