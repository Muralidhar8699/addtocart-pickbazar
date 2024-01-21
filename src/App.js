import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increasedBy, increment, decrement } from './redux/slice/counterSlice';
import { useEffect } from 'react';
import { fetchProducts } from './redux/slice/productSlice';
import ProductList from './component/productlist';
import Header from './component/header';

function App() {
  // const counter = useSelector((state)=>state.Counter);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div className="App">
      {/* <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(increasedBy(100))}>increasedBy 100</button>
      {counter.value} */}
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
