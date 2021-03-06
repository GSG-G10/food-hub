import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Register } from './components/Register';
import { AuthProvider } from './firebase/firebaseContext';
import { Categories } from './pages/Categories';
import { Category } from './pages/Category';
import { Restaurants } from './pages/Restaurants';
import { Restaurant } from './pages/Restaurant';
import { Cart } from './pages/Cart';
import { Meal } from './pages/Meal';
import { CartProvider } from './context/CartContext';
import { LandingPage } from './pages/LandingPage';
import { NotFound } from './pages/NotFound';

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
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 500,
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
        <SnackbarProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <Header />
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
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
                <Route exact path="/meal/:id">
                  <Meal />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="*">
                  <NotFound />
                </Route>
                <Route path="/about-us" />
                <Route path="/login" />
              </Switch>

              <Footer />
            </ThemeProvider>
          </CartProvider>
        </SnackbarProvider>
      </AuthProvider>
    </Router>
  </>
);
