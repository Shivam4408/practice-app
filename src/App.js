import './App.css';
import ApiTest from './component/apiTest';
import StoreTest from './component/storeTest';
import { Provider } from 'react-redux';
import store from './redux/store/storeRedux';

function App() {
  return (
    <div className="App">
      <h1>Hello moto!</h1>
      {/*<ApiTest/>*/}
      <Provider store = {store}>
      <StoreTest/>
      </Provider>
    </div>
  );
}

export default App;
