import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export async function getProduct() {
	const sortCollection = query(collection(db, "products"), orderBy("createdAt", "asc"));
	const querySnapshot = await getDocs(sortCollection);
	return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}