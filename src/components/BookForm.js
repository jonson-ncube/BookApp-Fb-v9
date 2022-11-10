import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useFirestore } from '../hooks/useFirestore'

export default function BookForm() {
	const { user } = useAuthContext()
	const [newBook, setNewBook] = useState('')
	const { addDocument } = useFirestore('books')

	const handleSubmit = e => {
		e.preventDefault()
		addDocument({ title: newBook, uid: user.uid })

		setNewBook('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>Add a new book title:</span>
				<input
					required
					type='text'
					onChange={e => setNewBook(e.target.value)}
					value={newBook}
				/>
			</label>
			<button>Add</button>
		</form>
	)
}
