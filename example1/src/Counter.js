import React,{useState} from 'react';
import OddEvenResult from './OddEven';

const Counter = ({intialValue}) => {
    
    console.log("카운터 호출");
    const [count, setCount] = useState(intialValue);
    //count으로 값 불러오고 setCount로 값 넣어주기

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>
    );
}

export default Counter;