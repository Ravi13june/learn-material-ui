import "./App.css";
import Navbar from "./components/Navbar";
import LoginSection from "./components/LoginSection";
import { ThemeProvider, createTheme  } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary:{
      main:'#D3FR23'
    },
    surface:{
      main:'#FF0000'
    }
  },
  typography:{
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
 
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <section>
      <Navbar />
      <LoginSection />
    </section>
    </ThemeProvider>
  );
}

export default App;
