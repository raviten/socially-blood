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
      twitterConn,
      logoutBtnActive
    } = this.getLoginStatus()
    let facebookProvider = new firebase.auth.FacebookAuthProvider();
    facebookProvider.addScope('publish_actions');


    this.state = {
      googleConn: googleConn,
      facebookConn: facebookConn,
      twitterConn: twitterConn,
      logoutBtnActive: logoutBtnActive,
      googleProvider: new firebase.auth.GoogleAuthProvider(),
      facebookProvider: facebookProvider,
      twitterProvider: new firebase.auth.TwitterAuthProvider()
    }
  }

  getLoginStatus() {
    let googleConn = false,
      facebookConn = false,
      twitterConn = false,
      logoutBtnActive = false;
    if (ls.get('facebookAccess')) {
      facebookConn = true;
      logoutBtnActive = true;
    }
    if (ls.get('twitterAccess')) {
      twitterConn = true;
      logoutBtnActive = true;
    }
    return {
      googleConn,
      facebookConn,
      twitterConn,
      logoutBtnActive
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

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // Need to populate his access tokens here
        console.log(user);
      } else {
        // No user is signed in.
      }
    });
  }

  componentDidUpdate() {

  }



  facebookLogin() {
    let self = this;
    // firebase.auth().signInWithRedirect(this.state.facebookProvider);
    firebase.auth().signInWithPopup(this.state.facebookProvider).then(function(result) {
      let userId = result.user.uid;
      console.log('result', result);
      let d = {
        'token': result.credential.accessToken,
        'fbid': result.additionalUserInfo.profile.id
      }
      ls.set('facebookAccess', d);
      firebase.database().ref('users/' + userId + '/creds/facebook').set(d);
      firebase.database().ref('users/' + userId + '/profile/').set({
        'email': result.additionalUserInfo.profile.email,
        'first_name': result.additionalUserInfo.profile.first_name,
        'last_name': result.additionalUserInfo.profile.last_name,
        'gender': result.additionalUserInfo.profile.gender,
      });
      self.setState({
        'facebookConn': true
      });
    }).catch(function(error) {
      console.log('error', error);
      // Handle Errors here.
    });
  }

  twitterLogin() {
    let self = this;
    firebase.auth().signInWithPopup(this.state.twitterProvider).then((result) => {
      let userId = result.user.uid;
      console.log("twitter login result", result);
      var d = {
        'token': result.credential.accessToken,
        'secret': result.credential.secret,
        'screen_name': result.additionalUserInfo.profile.screen_name,
        'id_str': result.additionalUserInfo.profile.id_str
      };
      ls.set('twitterAccess', d);
      firebase.database().ref('users/' + userId + '/creds/twitter').set(d);
      firebase.database().ref('users/' + userId + '/profile/').set({
        'email': result.additionalUserInfo.profile.email,
        'first_name': result.additionalUserInfo.profile.name,
        'last_name': '',
        'gender': result.additionalUserInfo.profile.gender || '',
      });
      self.setState((prevStat) =>({'twitterConn':true}))
    }).catch((error) => {
      console.log('error', error);
      //more code
    });
  }

  logout() {
    firebase.auth().signOut().then(function() {
      ls.remove('facebookAccess');
      ls.remove('twitterAccess');
      self.setState({
        'facebookConn': false,
        'twitterConn': false,
        'logoutBtnActive': false
      });
      console.log('logged out');
    }, function(error) {
      console.log('error');
    });
  };

  render() {
    return (
      <div>
        <RaisedButton label="Login with Facebook"
            labelColor="#FFF"
            backgroundColor="#3b5998"
            onClick={this.facebookLogin.bind(this)}
            disabled={this.state.facebookConn}
        />
        <RaisedButton label="Login with Twitter"
            labelColor="#FFF"
            backgroundColor="#3b5998"
            onClick={this.twitterLogin.bind(this)}
            disabled={this.state.twitterConn}
        />
        <RaisedButton label="Logout"
            labelColor="#FFF"
            backgroundColor="#3b5998"
            onClick={this.logout.bind(this)}
            disabled={!this.state.logoutBtnActive}
        />
      </div>
    );
  }
}