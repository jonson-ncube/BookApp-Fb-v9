import { useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
	const { dispatch } = useAuthContext()

	const [error, setError] = useState(null)

	const login = (email, password) => {
		setError(null)
		signInWithEmailAndPassword(auth, email, password)
			.then(res => dispatch({ type: 'LOGIN', payload: res.user }))
			.catch(error => setError(error.message))
	}

	return { login, error }
}
