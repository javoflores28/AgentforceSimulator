import AppLogo from './AppLogo.png'
import './App.css';
import BootstrapMessaging from './bootstrapMessaging';
import ImageBackground from './ImageBackground.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AppLogo} className="App-logo" alt="logo" />
        <BootstrapMessaging />
      </header>
    </div>
  );
}

export default App;
