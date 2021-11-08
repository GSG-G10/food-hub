import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Register } from './components/Register';
import { AuthProvider } from './firebase/firebaseContext';
import { Categories } from './pages/Categories';
import { Category } from './pages/Category';
import { Restaurants } from './pages/Restaurants';
import { Restaurant } from './pages/Restaurant';
import { CartProvider } from './context/CartContext';

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
    <Router>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Switch>
              <Route exact path="/" />
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/restaurants">
                <Restaurants />
              </Route>
              <Route exact path="/categories">
                <Categories />
              </Route>
              <Route exact path="/category/:id">
                <Category />
              </Route>
              <Route exact path="/restaurants/:id">
                <Restaurant />
              </Route>
              <Route path="/about-us" />
              <Route path="/login" />
            </Switch>
            <Footer />
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </>
);
