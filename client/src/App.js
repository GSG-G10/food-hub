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
    secondary: {
      main: '#2C2C2C',
    },
    white: {
      main: '#fff',
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'capitalize',
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
