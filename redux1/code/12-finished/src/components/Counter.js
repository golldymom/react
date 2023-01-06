import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
//클래스 기반 컴포넌트 클래스에서 훅을 사용하려면 connect를 상위에 쓸것.
// class Counter extends Component {
  //메소드 추가 아래서 정의한 타입을 여기에 맵.
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1> //훅을 하기 위한 this.
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// export하기 위한 변수 설정. props설정을 해줌. 훅은 아닌 커넷트 함수. 훅을 사용할 수 없어서 설정.
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }
//디스패치 함수는 프롭스ㅔㅇ 저장. 키가 프랍 이름. 밸류는 또다른 함수 디스패치를 입력하고 액션 설정. 
//타입으로 액션 설정하는 듯.
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };
//위에 임포트한 connect를 이렇게 씀. 커넷트에는 변수가 2개가 있어야함.포인트를 할 뿐.
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
