import React from 'react'
import Table from './Table/Table'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from './DetailData/Main'

function App() {

  const showDetailData=(data)=>{
    //console.log(data);
  
  }
  return (
    <div className="App">
     <div className="nav">Nab Bar Area</div>
     <div className="body">
     <div className="worldMarket"> World Market</div>
     <div className="mainbody">
      <Router>
      <Switch>
      
        <Route path="/details/:stocks">
        <Main />
        </Route>
        <Route path="/">
      <Table
      detailData={showDetailData} />
        </Route>
      
      </Switch>
      </Router>
      </div>
      <div className="news">News Area</div>
    </div>
    </div>
  )
}

export default App
