import {db} from '../firebase.js'
import {doc, deleteDoc} from "firebase/firestore"


export async function removeProduct(id) {
	try {
		await deleteDoc(doc(db, "products", id));
	}
	catch (error) {
		console.error("Ошибка удаления:", error);
	}
}