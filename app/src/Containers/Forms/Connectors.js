import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
// import 'firebase/database';
// const firebaseui = require('firebaseui');
const ls = require('local-storage');

export default class Connectors extends React.Component {

  constructor(props) {
    super(props);
    let {googleConn, facebookConn, twitterConn} = this.getLoginStatus()
    this.state = {
      googleConn: googleConn,
      facebookConn: facebookConn,
      twitterConn: twitterConn,

      googleProvider: new firebase.auth.GoogleAuthProvider(),
      facebookProvider: new firebase.auth.FacebookAuthProvider(),
      twitterProvider: new firebase.auth.TwitterAuthProvider()
    }
  }

  getLoginStatus() {
    let googleConn = false,
      facebookConn = false,
      twitterConn = false;
    if(ls.get('facebookAccess')) {
      facebookConn = true;
    }
    return {googleConn, facebookConn, twitterConn}
  }

  componentDidMount() {
    this.nativeFB();
  }

  componentDidUpdate() {
    
  }

  // facebookPopUp2() {
  //   var uiConfig = {
  //     callbacks: {
  //       signInSuccess: function(currentUser, credential, redirectUrl) {
  //         console.log('yay');
  //         return true;
  //       },
  //       uiShown: function() {
  //         document.getElementById('loader').style.display = 'none';
  //       }
  //     },
  //     credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  //     queryParameterForWidgetMode: 'mode',

  //     // queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
  //     // signInSuccessUrl: './second.html',
      
  //     signInFlow: 'popup',
      
  //     signInOptions: [
  //       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     ],
  //   };

  //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
  //   ui.start('#firebaseui-auth-container', uiConfig);
  // }

  nativeFB() {
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '435244583535721',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  facebookLogin() {
    firebase.auth().signInWithPopup(this.state.facebookProvider).then(function(result) {
      console.log('here', result);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      ls.set('facebookAccess', result);
      this.setState({'facebookConn': true})
      // ...
    }).catch(function(error) {
      console.log('error', error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  render() {
    var config = {
      apiKey: "AIzaSyDuEaisA0lm5lTKCMCbj02SPEXETxG9Qbw",
      authDomain: "socially-blood.firebaseapp.com",
      databaseURL: "https://socially-blood.firebaseio.com",
      projectId: "socially-blood",
      storageBucket: "socially-blood.appspot.com",
      messagingSenderId: "150982221530"
    };
    firebase.initializeApp(config);

    return (
      <div>
        <RaisedButton label="Login with Facebook"
            labelColor="#FFF" 
            backgroundColor="#3b5998" 
            onClick={this.facebookLogin.bind(this)}
            disabled={this.state.facebookConn}
        />
      </div>
    );
  }
}