import React from 'react';
import PropTypes from 'prop-types';

/* Material UI imports*/
import DropDownMenu from 'material-ui/DropDownMenu/DropDownMenu';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import TextField from "material-ui/TextField/TextField";
import FlatButton from "material-ui/FlatButton/FlatButton";
import RaisedButton from "material-ui/RaisedButton/RaisedButton";
import SelectField from 'material-ui/SelectField';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const ls = require('local-storage');

/* App based imports*/
import Connectors from './Connectors';

export default class MainLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      selectedBloodGroup: "A+",
      "mobile": "",
      "error": false,
      "errorMessageMobile": "",
      "endTime": "6 hours",
      "location": {}
    }
  }


  changeBloodGroup(event, key, value) {
    var selectedBloodGroup = value;
    this.setState({
      selectedBloodGroup: selectedBloodGroup
    });
  }

  updateMobile(event) {
    var mobile = event.target.value;
    if (mobile > 9999999999) {
      return;
    }
    this.setState({
      mobile: mobile
    });
  }

  updateEndTime(event, key, value) {
    this.setState({
      endTime: value
    });
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          location: position
        });
      },
      (error) => alert(error.message), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  postOnFb(m) {
    let d = ls.get('facebookAccess');
    let url = "https://graph.facebook.com/v2.10/" + d.fbid + "/feed/";
    url = url + "?access_token=" + d.token;
    fetch(url, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "message": m
      })
    }).then(function(res) {
      console.log(res);
      return res.json();
    }).then(function(d) {
      console.log(d);
    }).catch(function(err) {
      console.log(err);
    });
  }

  submitForm() {
    if (this.state.mobile == "") {
      this.setState({
        errorMessageMobile: "This field is required"
      });
      return;
    } else if (this.state.mobile < 1000000000) {
      this.setState({
        errorMessageMobile: "Invalid Mobile Number"
      });
      return;
    } else {
      this.setState({
        errorMessageMobile: ""
      })
      /*generate message*/
      this.postOnFb("This is posted from #SociallyBlood");
    }
  }

  render() {
    var endTimeArray = [];
    for (var i = 1; i <= 24; i++) {
      var value = i + " hours";
      endTimeArray.push(<MenuItem key={i} value={value} primaryText={value} />);
    }
    var location = this.state.location;
    return (
      <div>
      <Connectors/>
      <Card>
        <CardHeader/>
        <CardTitle> Please fill below form</CardTitle>
        <div style={{marginLeft: 50}}>
          <div style={{marginTop: 20}}>
            <SelectField value={this.state.selectedBloodGroup}
                          floatingLabelText="Your Blood Group"
                          onChange={this.changeBloodGroup.bind(this)}>
                {
                  this.state.bloodGroups.map(function(blood, index) {
                    return (<MenuItem key={index} value={blood} primaryText={blood} />)
                  })
                }
            </SelectField>
          </div>
          <div>
            <TextField hintStyle={{color: "#AAA"}}
                    floatingLabelStyle={{color: "#AAA"}}
                    value={this.state.mobile}
                    errorText={this.state.errorMessageMobile}
                    type="number"
                    min={0}
                    onChange={this.updateMobile.bind(this)}
                    hintText="10 Digit Mobile Number*"
                    floatingLabelText="Mobile Number*"
            />
          </div>
          <div style={{marginTop: 20}}>
              <SelectField value={this.state.endTime}
                            floatingLabelText="Ends In:"
                            onChange={this.updateEndTime.bind(this)}>
                {endTimeArray}
              </SelectField>

          </div>
          <div style={{marginTop: 20}}>
            <RaisedButton label="Set Location" onClick={this.getLocation.bind(this)} />
            { location.coords
              ? <div style={{marginTop: 20}}>
                  <div>Latitude: {location.coords.latitude}</div>
                  <div>Longitude: {location.coords.longitude}</div>
                </div>
              : ""
            }
          </div>
           <CardActions style={{marginLeft: 100, marginTop: 100}}>
            <RaisedButton label="Submit"
                    backgroundColor="#32CD32"
                    labelColor="#FFF"
                    style={{marginBottom: 100}}
                    onClick={this.submitForm.bind(this)}/>
          </CardActions>
        </div>
      </Card>
      </div>
    );
  }
}