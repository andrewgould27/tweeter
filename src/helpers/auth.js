import { auth } from "../services/firebase";

export function signup(username, email, password) {
    auth().createUserWithEmailAndPassword(email, password)
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