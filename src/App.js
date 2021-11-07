import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import AddExpense from './Pages/AddExpense/AddExpense';
import Navbar from './Core/Navbar';
import GlobalState from "./Context/GlobalState";


function App() {
  return (
    <Router>
      <GlobalState>
      <Navbar/>
      <Switch>
        <Route exact={true} path='/' component={Homepage}/>
        <Route exact={true} path='/addexpense' component={AddExpense}/>
      </Switch>
      </GlobalState>
    </Router>
  );
}

export default App;
