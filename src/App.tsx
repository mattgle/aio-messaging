import Sidebar from './components/Sidebar/Sidebar';
import { AppRouter } from './navigation/AppRouter';

// TODO: Delete unused components like Footer and Header

function App() {
  return (
    <div className="appContainer">
      <Sidebar />
      <AppRouter />
    </div>
  );
}

export default App;
