import './App.css';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import LiveStats from './components/LiveStats';
import Chart from './components/Chart';
import Footer from './components/Footer';

export default function App() {
  return (
    <DataProvider>
      <div className="dashboard">
        <Header />
        <LiveStats />
        <Chart />
        <Footer />
      </div>
    </DataProvider>
  );
}
