import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";

export async function addProduct(product) {
	try {
		const docRef = await addDoc(collection(db, "products"), {
			...product,
			createdAt: serverTimestamp(),
		});
		return {id: docRef.id, ...product};
	} catch (error) {
		console.error("Ошибка добавления:", error);
	}
}