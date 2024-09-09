import React, { useState } from "react";
import { processTransactions } from "./utils/utility";
import transactions from "./utils/transactions.js";
import Transaction from "./components/index.jsx";

import "./App.css";

function App() {
  const { monthlyPoints, totalPoints } = processTransactions(transactions); // passing the all transaction record which is store in the file
  return (
    <div className="App">
      <h1>Reward Points</h1>
      <Transaction monthlyPoints={monthlyPoints} totalPoints={totalPoints} />
    </div>
  );
}

export default App;
