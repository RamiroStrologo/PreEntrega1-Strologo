import { checkout } from "./checkout.module.css";
import ButtonSave from "../../components/buttonSave/ButtonSave";
import ButtonDelete from "../../components/buttonDelete/ButtonDelete";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import createOrder from "./checkJS";
import { CartContext } from "../../context/cartContext";

export default function Checkout() {
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idOrder, setIdOrder] = useState(null);
  const [emailError, setEmailError] = useState(false); // Nuevo estado para el error de email
  const { helpers } = useContext(CartContext);
  const nomRef = useRef(null);
  const numRef = useRef(null);
  const emailRef = useRef(null);

  const navigate = useNavigate();

  const handleTelefonoChange = (e) => {
    const inputValue = e.target.value;
    e.target.value = inputValue.replace(/\D/g, "");
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    // Utilizamos una expresión regular para validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(emailValue));
  };

  const handleConfirm = () => {
    if (nomRef.current.value && numRef.current.value && !emailError) {
      setConfirm(true);
    }
  };

  useEffect(() => {
    if (confirm) {
      setLoading(true);
      createOrder(nomRef, numRef, emailRef)
        .then((id) => {
          setIdOrder(id);
          helpers.deleteAll();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [confirm]);

  return (
    <div className={checkout}>
      {loading && <Loader />}
      {!loading && !idOrder ? (
        <>
          <span>Confirmar compra</span>
          <section>
            <div>
              <label htmlFor="nom">Nombre:</label>
              <input type="text" id="nom" ref={nomRef} />
            </div>
            <div>
              <label htmlFor="num">Telefono:</label>
              <input
                type="text"
                id="num"
                onChange={handleTelefonoChange}
                ref={numRef}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                ref={emailRef}
                onChange={handleEmailChange}
              />
              {emailError && (
                <span data-id="spanErrEmail"> {"Email no valido"}</span>
              )}
            </div>
            <div data-id="buttons">
              <ButtonSave onClick={handleConfirm} />
              <ButtonDelete
                onClick={() => {
                  navigate("/tienda/cart");
                }}
              />
            </div>
          </section>
        </>
      ) : (
        idOrder && (
          <div data-id="confirmOrder">
            <span>Compra finalizada</span>
            <span>{`ID de la orden: ${idOrder}`}</span>
            <ButtonSave
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        )
      )}
    </div>
  );
}
