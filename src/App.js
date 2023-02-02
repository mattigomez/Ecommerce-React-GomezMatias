import './App.css';
import ShopProvider from './context/ShopProvider';
import MainNavigator from './navigations';

function App() {
  return (
  <ShopProvider>
    <MainNavigator/>
  </ShopProvider>
  );
}

export default App;
