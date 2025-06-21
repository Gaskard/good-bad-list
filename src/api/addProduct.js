import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export async function addProduct(product) {
	try {
		await addDoc(collection(db, "products"), product);
	} catch (error) {
		console.error("Ошибка добавления:", error);
	}
}