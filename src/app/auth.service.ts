import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import firebase from 'firebase/app'
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
providedIn: 'root'
})

export class AuthenticationService {
userData: Observable<firebase.User>;

constructor(private angularFireAuth: AngularFireAuth,private router: Router) {
this.userData = angularFireAuth.authState;
}
/* Sign up */
SignUp(email: string, password: string) {
this.angularFireAuth

.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
window.alert('You are logged in');
this.router.navigate(['/home']);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}

/* Sign in */
SignIn(email: string, password: string) {

this.angularFireAuth


.signInWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully logged in!');
window.alert('You are Successfully logged in!');
this.router.navigate(['/home']);
}
)
.catch(err => {
console.log('Something is wrong:',err.message);
window.alert('Something is wrong,please try again');
});
return !!localStorage.getItem('token')
}

/* Sign out */
SignOut() {
this.angularFireAuth

.signOut();
alert('You have been succesfully logged out, thank you for visiting!');
}



SendVerificationMail() {
  return this.angularFireAuth.currentUser.then(u => u.sendEmailVerification())
  .then(() => {
    this.router.navigate(['email-verification']);
  })
}    

ForgotPassword(passwordResetEmail) {
return this.angularFireAuth.sendPasswordResetEmail(passwordResetEmail)
.then(() => {
  window.alert('Password reset email sent, check your inbox.');
}).catch((error) => {
  window.alert(error)
})
}

// loggedIn(){
//     this.router.navigate(['/home']);
//     return !!localStorage.getItem('token')

// }

private updateUserData(userData) {
    // Sets user data to firestore on login
   // const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: userData.uid,
      email: userData.email,
      displayName: userData.displayName,
      photoURL: userData.photoURL
    }
}


}
