import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/features/Footer";
import Header from "./components/features/Header";
import Bloods from "./pages/bloods/Bloods";
import Login from "./pages/user/Login";
import RegisterScreen from "./pages/user/Register";
import AddDonor from "./pages/donors/AddDonor";
import ListDonors from "./pages/donors/ListDonors";
import { useSelector } from "react-redux";
import Toast from "./components/features/Toast";
function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Router>
      <Header />
      <Toast />
      <Routes>
        {/* <Route path="/login" element={<Login />} />*/}
        <Route path="/" element={<Bloods />} />
        {/*<Route path="/register" element={<RegisterScreen />} />*/}
        <Route path="/add-donor" element={<AddDonor />} />
        <Route path="/list-donors" element={<ListDonors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
