import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
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
    return cartCollection;
  } else return null;
}
const cartJs = {
  getCart,
};
export default cartJs;
