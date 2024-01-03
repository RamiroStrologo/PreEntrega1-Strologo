import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/client";

export async function getAllProducts() {
  const prodRef = collection(db, "products");
  const snapshot = await getDocs(prodRef);
  if (!snapshot.empty) {
    const allGamesCol = snapshot.docs.map((docs) => ({
      id: docs.id,
      ...docs.data(),
    }));
    return allGamesCol;
  } else return null;
}
export async function getProductsByConsole(consola) {
  const productsRef = query(
    collection(db, "products"),
    where("category", "==", consola)
  );
  const snapshot = await getDocs(productsRef);
  if (!snapshot.empty) {
    const gamesCollection = snapshot.docs.map((docs) => ({
      id: docs.id,
      ...docs.data(),
    }));
    return gamesCollection;
  } else return null;
}

export async function getConsolaInfo(consola) {
  const consolesRef = query(
    collection(db, "consoles"),
    where("name", "==", consola)
  );
  const snapshot = await getDocs(consolesRef);

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    };
  } else return null;
}

export async function getProductById(gameId) {
  const productsRef = doc(db, "products", gameId);
  const snapshot = await getDoc(productsRef);
  if (!snapshot.empty) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } else return null;
}

const productsJs = {
  getAllProducts,
  getProductsByConsole,
  getConsolaInfo,
  getProductById,
};
export default productsJs;
