import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client";

export default async function createOrder(nom, num, email) {
  const order = {
    nombre: nom.current.value,
    telefono: num.current.value,
    email: email.current.value,
  };
  const orderCollection = collection(db, "orders");
  return addDoc(orderCollection, order).then(({ id }) => {
    return id;
  });
}
