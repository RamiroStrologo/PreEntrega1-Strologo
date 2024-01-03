import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/client";

export async function getCart() {
  const cartRef = collection(db, "cart");
  const snapshot = await getDocs(cartRef);

  if (!snapshot.empty) {
    const cartCollection = snapshot.docs.map((docs) => ({
      id: docs.id,
      ...docs.data(),
    }));
    const totalCost = cartCollection.reduce(
      (acc, item) => acc + item.cant * item.price,
      0
    );
    const totalItems = cartCollection.reduce((acc, doc) => acc + doc.cant, 0);
    return { cart: cartCollection, totalCost, totalItems };
  } else {
    return { cart: [], totalCost: 0, totalItems: 0 };
  }
}
export async function addProduct(product) {
  const productRef = query(
    collection(db, "cart"),
    where("title", "==", product.title)
  );
  const cartSnapshot = await getDocs(productRef);

  if (cartSnapshot.size === 0) {
    await addDoc(collection(db, "cart"), product);
  } else {
    const cartDoc = cartSnapshot.docs[0];
    const newQuantity = product.cant;
    await updateDoc(doc(db, "cart", cartDoc.id), { cant: newQuantity });
  }
}

export async function modifyProductCart(cardItemId, newCant) {
  const productRef = doc(db, "cart", cardItemId);
  updateDoc(productRef, { cant: newCant });
}
export async function deleteProductCartById(cartItemId) {
  const productRef = doc(db, "cart", cartItemId);
  await deleteDoc(productRef);
}
export async function deleteCart() {
  const cartCollection = collection(db, "cart");
  const snapshot = await getDocs(cartCollection);
  // Elimina cada documento en la colección
  snapshot.docs.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });
}

const cartJs = {
  getCart,
  addProduct,
  deleteProductCartById,
  deleteCart,
  modifyProductCart,
};
export default cartJs;
