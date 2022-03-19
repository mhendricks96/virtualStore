import './App.css';
import CategoriesList from './components/CategoriesList'
import Footer from './components/Footer'
import Header from './components/Header'
// import Products from './components/Products'
import { Provider } from 'react-redux'
import createReduxStore from './store'

const store = createReduxStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <CategoriesList />
        {/* <Products /> */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
