import firebase from "firebase";


// Test 1
it('Functioning test suite', () => {
    expect(1).toEqual(1);
});

// Test 2
const config = {
    apiKey: "AIzaSyB_gNM-Sq_N1WT-codtDE_WtOBg0q3GIZ0",
    authDomain: "tweeter-19786.firebaseapp.com",
    databaseURL: "https://tweeter-19786-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);
it('Connection to Firebase database', () => {
    let connectionRef = firebase.database().ref(".info/connected");
    connectionRef.on("value", (snap) => {
        expect(snap.exists()).toEqual(true);
    });
});

// Test 3
it('Retrieve data from database', () => {
    let response = firebase.database().ref('test').get().then((snapshot) => {
        console.log(snapshot);
    });

    return response;
});

// Test 4
it('Write data to database', () => {
    let response = firebase.database().ref('test').set({
        test: 'passed'
    });

    return response;
});