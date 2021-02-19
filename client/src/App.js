import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { History } from './components/History';
import { CompleteHistory } from './components/CompleteHistory';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact>
            <div className="container">
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <History />
              <AddTransaction />
            </div>
          </Route>

          <Route path="/CompleteHistory" exact>
           <div className="container">
            <CompleteHistory />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
