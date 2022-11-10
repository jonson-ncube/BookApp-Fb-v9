import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDpi2xyytnWLgDAKXYbyljhptSe61pet5g',
	authDomain: 'cooking-jay.firebaseapp.com',
	projectId: 'cooking-jay',
	storageBucket: 'cooking-jay.appspot.com',
	messagingSenderId: '754997797920',
	appId: '1:754997797920:web:d7b65a29476d4de5d80845',
}

// init firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
