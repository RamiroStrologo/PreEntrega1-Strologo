import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
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
    const total = cartCollection.reduce(
      (acc, item) => acc + item.cant * item.price,
      0
    );

    return { cart: cartCollection, total };
  } else {
    return { cart: [], total: 0 };
  }
}
export async function addProduct(product) {
  const cartRef = collection(db, "cart");
  await addDoc(cartRef, product);
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

export async function countCart() {
  const cartRef = collection(db, "cart");
  const snapshot = await getDocs(cartRef);
  if (!snapshot.empty) {
    const total = snapshot.docs.reduce((acc, doc) => acc + doc.data().cant, 0);
    return total;
  }
}
const cartJs = {
  getCart,
  addProduct,
  deleteProductCartById,
  deleteCart,
  modifyProductCart,
  countCart,
};
export default cartJs;
