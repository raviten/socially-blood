import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import 'firebase/database';
// const firebaseui = require('firebaseui');
const ls = require('local-storage');

export default class Connectors extends React.Component {

  constructor(props) {
    super(props);
    let {
      googleConn,
      facebookConn,
      twitterConn
    } = this.getLoginStatus()
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
    if (ls.get('facebookAccess')) {
      facebookConn = true;
    }
    return {
      googleConn,
      facebookConn,
      twitterConn
    }
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDuEaisA0lm5lTKCMCbj02SPEXETxG9Qbw",
      authDomain: "socially-blood.firebaseapp.com",
      databaseURL: "https://socially-blood.firebaseio.com",
      projectId: "socially-blood",
      storageBucket: "socially-blood.appspot.com",
      messagingSenderId: "150982221530"
    };
    firebase.initializeApp(config);

    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     console.log(user);
    //     var db = firebase.database();
    //     var ref = db.ref("users");
    //     var usersRef = ref.child(userId);
    //     console.log(userId, usersRef);
    //     var d = {
    //         date_of_birth: "June 23, 1912",
    //         full_name: "Alan Turing"
    //       };
    //     console.log(d);
    //     usersRef.set(d);
    //     // User is signed in.
    //   } else {
    //     // No user is signed in.
    //   }
    // });
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

  facebookLogin() {
    let self = this;
    // firebase.auth().signInWithRedirect(this.state.facebookProvider);
    firebase.auth().signInWithPopup(this.state.facebookProvider).then(function(result) {
      let userId = result.user.uid;
      ls.set('facebookAccess', result.credential.accessToken);
      firebase.database().ref('users/' + userId + '/creds/facebook').set({
        'token': result.credential.accessToken
      });
      self.setState({
        'facebookConn': true
      });
    }).catch(function(error) {
      console.log('error', error);
      // Handle Errors here.
    });
  }

  render() {
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