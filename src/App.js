import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';
import Countdown from './countdown';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

var clientid='520218560267-39dp0bdqc3ljaipsra25b783v5hja38t.apps.googleusercontent.com'

function App() {

  const clientId='520218560267-1cscm13162dbnog260uc6mk0hoe16f9v.apps.googleusercontent.com'

  const [loggedIn,setLoggedIn] = useState(false)

  const responseGoogle = (response) => {
    console.log(response);

    console.log('hello');

    setLoggedIn(true)

  }


useEffect(() => {
  const initClient = () => {
        gapi.client.init({
        clientId: clientId,
        scope: ''
      });
   };
   gapi.load('client:auth2', initClient);
});

  const logout=()=>{
  console.log('log out');
  }

  return (
    <div className="App">
      {
        loggedIn?
        <Countdown/>:
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
       // onFailure={}
        cookiePolicy={'single_host_origin'}
      />

      }
    </div>
  );
}

export default App;
