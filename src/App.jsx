import Header from "./component/header";
import Profile from "./component/Profile";
import Footer from "./component/Footer";

function App() {
  return (
      <div className="main-class">
        <div className="header-content"> 
          <Header />
        </div>

        <div className="center-content">
        <Profile />
        </div>

        <div className="footer-content">
        <Footer />
        </div>
    </div>
  )
}

export default App;