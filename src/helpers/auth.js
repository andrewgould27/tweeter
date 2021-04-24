import firebase from "firebase";

import { auth, db } from "../services/firebase";

export async function signup(username, email, password) {
    // Check that the username is available
    // If available push username to database of used usernames
    // Sign up the user
    // Change user displayName to username

    let currUser;

    return auth().createUserWithEmailAndPassword(email, password)
    .then(function(result) {
        currUser = result;
        result.user.updateProfile({
            displayName: username
        })
    })
    .then(function(result) {
        console.log(currUser);
        db.ref('user-id/' + username).set({
            uid: currUser.user.uid
        })
    })
    .catch(function (error) {
        return error;
    });
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signout()
{
    return auth().signOut();
}