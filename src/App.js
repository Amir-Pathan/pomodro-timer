import { useEffect,useState } from 'react';
import './App.css';
import Countdown from './countdown';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

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
