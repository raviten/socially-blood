import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white,blue600, grey900,grey600,black} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

const AppTheme = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  },

   charGap:{
    paddingTop: 5,
  },

/************************Common*******************************************/
 
  
  tabs: {
    width: 200,
    float: 'left' 
  },

 scroll:{
    height:460,
    overflowY:scroll,
  },

  backgroundColor:{
    backgroundColor:white
  },

  chartTitle:{
   color:black,
   textTransform: "uppercase"
  },
   

   marginTop:{
    "marginTop":20
  },
  navigation: {
    fontSize: 15,
    fontWeight: 400,
    color: grey600,
    paddingBottom: 15,
    display: 'block',
    float:"right",
    marginRight: 36
    
  },
  title:{
    fontWeight: 700,
    color: "#666",
    float: "left",
    width: "auto",
    margin: 0,
    padding: 0,
    fontSize: 20,
    opacity: .9,
    textTransform: "uppercase"
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,

  },
  swipeable: {
    clear: 'left',
    paddingTop: 10,
  },
  grid: {
    paddingLeft: 5,
  },

/*********************************ZyloLens*****************************************/


  tabs: {
    width: 500,
    float: 'left'
  },

   
   textL:{
    position: "relative",
    fontFamily: "sans-serif",
    fontWeight: "normal",
    float:"left"
   },

   
   textR:{
    position: "relative",
    fontFamily: "sans-serif",
    fontWeight: "normal",
    float:"right",
    marginRight: 42
   },

   dropdownL:{
    "width":"250",
    "float":"left",
    right:137,
    top:20
           },

   dropdownR:{
    "width":"200",
    "float":"right",
    left: 178,
    top:20
           },

  /********************************promotion************************************/
     promDropdownL:{
    "width":"250",
    "float":"left",
    right: 24,
    top: 3,
           },
    promTextM:{
          position: "relative",
          fontFamily: "sans-serif",
          fontWeight: "normal",
          float:"left",
          left:22    
    },
   promDropdownR:{
    "width":"280",
    "float":"right",
    left: 72,
    top:20
   },

   promDropdownR1:{
    position:"relative",
    float: "left",
    right: 43,
    width: 200,
   },
    
  promTextR:{
    position: "relative",
    fontFamily: "sans-serif",
    fontWeight: "normal",
    float: "left",
    right: "21",
   },

   promDate:{
    float:"left",

  },
   promDateL:{
    top: 9,
    left: 22,
    position:"relative",
   },
   promDateR:{
    top: 9,
    position:"relative",
   },


   promTest:{
    top: 20,
    position:"relative",
    right:16,
    backgroundColor:grey600,
    height: "28px"
   },


   /************************************CustomerProfile***********************************/

   CusName:{
    fontWeight: 700,
    color: "#666",
    float: "left",
    width: "auto",
    margin: 0,
    padding: 0,
    fontSize: 16,
    opacity: .9,
    textTransform: "uppercase"
  },

  profileRow:{ 
    paddingLeft:0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom:0,

    },

  profileRowR:{ 
    paddingLeft:0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom:0,

    },
  
 profileText1:{
    paddingLeft:10,
    marginBottom:3,
    marginTop:0,
    fontWeight:600,
    lineHeight:1.2,
    fontSize:12,
 },
 profileText2:{
    paddingLeft:10,
    marginBottom:0,
    marginTop:2,
    fontSize:12, 
 },

  profileRowColumn1:{
    width:80,
    padding:0,
    textAlign:"center"
  },
  profileTextR1:{
    paddingLeft:15,
    marginBottom:3,
    marginTop:0,
    lineHeight:1.2
  },
  profileTextR2:{
    paddingLeft:15,
    marginBottom:0,
    marginTop:2,
    fontWeight:600,
    fontSize:12,
    lineHeight:1.2, 
  },
  profileTextR3:{
    paddingLeft:15,
    marginBottom:3,
    marginTop:0,
    lineHeight:2,
    fontSize:12,
  },
  profileTextR4:{
    paddingLeft:4,
    marginBottom:10,
    marginTop:0,
    lineHeight:2,
    fontSize:12,
    border:"1px solid lightgrey",
    borderLeftWidth: "4px",
    borderRadius: "4px",
     width: "250px",
  },
  
  profileMonthIncome:{
    position:"relative",
    top:25,
    paddingLeft:15,
    marginBottom:0,
    marginTop:2,
    fontWeight:600 
  },

  myProgress1: {
  width: "220",
  backgroundColor: "#ddd",
  borderRadius: "18px",
  height:"16px",
  position:"relative",
  top:10,
 
},

  myBar1 :{
  width: "70%",
  height: "30px",
  backgroundColor: "#4CAF50",
  borderRadius: "18px",
  height:"16px",
},
myProgress2: {
  width: "220",
  backgroundColor: "#ddd",
  position:"relative",
  top:40,
  borderRadius: "18px",
  height:"16px",
},

  myBar2 :{
  width: "30%",
  height: "30px",
  backgroundColor: "black",
  borderRadius: "18px",
  height:"16px"
},

 CPHeading:{
   
    fontSize: "large",
    fontWeight: 700,
    color: "#666",
    opacity: .9,
    textTransform: "uppercase",
    paddingLeft:"16px"
 },

 myProgress3 : {
  width: "220",
  backgroundColor: "#ddd",
  borderRadius: "18px",
  height:"16px",
  marginTop:"8px"
},

 myBar3 :{
  width: "100%",
  height: "30px",
  borderRadius: "18px",
  height:"16px",
  backgroundColor: "green",
},
 myBar4 :{
  width: "80%",
  height: "30px",
  borderRadius: "18px",
  height:"16px",
  backgroundColor: "red",
},
 myBar5 :{
  width: "80%",
  height: "30px",
  borderRadius: "18px",
  height:"16px",
  backgroundColor: "blue",
},

    
});


export default AppTheme;