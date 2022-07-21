import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withDraw, diposit } from './Store/Action';

function App() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  return (
    <div className="App">
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br />
      <button onClick={() => dispatch(diposit(+amount))}>DIPOSIT</button>
      <button onClick={() => dispatch(withDraw(+amount))}>WITHDRAW</button>
      <br/>

      {selector}
    </div>
  );
}

export default App;
