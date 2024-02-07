

import './App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
    <Provider store={store}> 
      <Main />
    </Provider>
    <Footer />
    </div>
  );
}

export default App;
