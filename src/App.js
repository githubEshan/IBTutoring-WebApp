import About from "./components/About";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import { Resources } from "./components/Resources";
import SignUp from "./components/SignUp";
import { Auth0Provider } from '@auth0/auth0-react';


const domain = "dev-lzoz3iechykcp05s.us.auth0.com"
const clientId = "8RKpXYvsslmVzZaZmmdjxdw8QOz4OaVH"

export default function App() {




  let component
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />
      break
    case "/Login":
      component = <Login />
      break
    case "/Resources":
      component = < Resources />
      break
    case "/SignUp":
      component = <SignUp />
      break
    case "/About":
      component = <About />
      break
  }
  return (
    <>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        < Navbar />
        {component}
      </Auth0Provider>
    </>)

}
