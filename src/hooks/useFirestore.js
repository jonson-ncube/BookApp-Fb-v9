import { db } from '../firebase/config'
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'

export const useFirestore = col => {
	const ref = collection(db, col)

	// add doc
	const addDocument = async obj => {
		await addDoc(ref, obj)
	}

	// delete doc
	const deleteDocument = async id => {
		await deleteDoc(doc(ref, id))
	}
	return { addDocument, deleteDocument }
}
