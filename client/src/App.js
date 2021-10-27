import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
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
      main: '#FFFFFF',
      contrastText: '#242424',
    },
    facebookBlue: {
      main: '#5777B9',
      contrastText: '#fff',
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
  <>
    <CssBaseline />
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
  </>
);
