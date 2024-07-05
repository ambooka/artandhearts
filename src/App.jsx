import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ThemeProvider from './theme';
import Router from './routes/sections';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
