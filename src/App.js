import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import AddExpense from './Pages/AddExpense/AddExpense';
import Navbar from './Core/Navbar';
import GlobalState from "./Context/GlobalState";
import Editform from './Pages/Edit/Editform';

function App() {
  return (
    <Router>
      <GlobalState>
      <Navbar/>
      <Switch>
        <Route exact={true} path='/' component={Homepage}/>
        <Route exact={true} path='/addexpense' component={AddExpense}/>
        <Route exact={true} path='/edit/:id' component={AddExpense}/>
      </Switch>
      </GlobalState>
    </Router>
  );
}

export default App;
