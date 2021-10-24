import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5A00',
    },
  },
});

export const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Footer />
        <Switch />
        <Route path="/" />
        <Route path="/restaurents" />
        <Route path="/categories" />
        <Route path="/about-us" />
        <Route path="/login" />
      </Router>
    </ThemeProvider>
  </div>
);
