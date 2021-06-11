import "./App.css";
import Header from "./Header/Header";
import Balance from "./Balance/Balance";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import NewTransaction from "./NewTransaction/NewTransaction";
import {TransProvider} from "./TransContex";
function App() {
  return (
    <div className="Container">
      <TransProvider>
        <Header />
        <Balance />
        <TransactionHistory />
        <NewTransaction />
      </TransProvider>
    </div>
  );
}

export default App;
