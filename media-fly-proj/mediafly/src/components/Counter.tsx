import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { increment, decrement, incrementByAmount } from '../state/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return <div>
        {/* <h1>hey</h1> */}
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(incrementByAmount(20))}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
};

export default Counter;