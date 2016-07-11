import React from 'react';
import Outfits from './outfits';
import Firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9Cno5Zddfoq6IUIXNteK7HYDs3B5Bt-g",
  authDomain: "outfitter-f83f0.firebaseapp.com",
  databaseURL: "https://outfitter-f83f0.firebaseio.com",
  storageBucket: "outfitter-f83f0.appspot.com",
};

var fb = Firebase.initializeApp(config);
var rootRef = fb.database().ref();
var auth = fb.auth();

let App = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount() {
    this.login();
    let outfitsRef = rootRef.child("outfits");
  	this.bindAsArray(outfitsRef, "outfits");
	},

  login() {
    // Or with an email/password combination
    auth.signInWithEmailAndPassword( 'ari@ari-rose.com','Homerj');
  },

  saveOutfitToServer() {
  	this.firebaseRefs.outfits.push({
    	name: "ARI",
    	photo: "http://placehold.it/400/400",
    	weekday: "Wednesday"
  	});
  },

  render() {
  	return (
  		<Outfits outfits={this.state.outfits} saveToServer={this.saveOutfitToServer}/>
  	)
  }
});

export default App;