import { auth, db } from "../services/firebase";

export function signup(username, email, password) {
    // Check that the username is available
    // If available push username to database of used usernames
    // Sign up the user
    // Change user displayName to username
    return auth().createUserWithEmailAndPassword(email, password)
    .then(function(result) {
        return result.user.updateProfile({
            displayName: username
        })
    }).catch(function (error) {
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