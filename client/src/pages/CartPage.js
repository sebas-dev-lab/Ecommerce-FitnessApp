import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import ShoppingCart from "../components/shoppingCart";
import ButtonBlock from "../components/custom/ButtonBlock";
import { useSelector, useDispatch } from "react-redux";
import {
  addProducts,
  deleteAllCart,
  getProductCart,
} from "../redux/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();

  let user = localStorage.getItem("token");

  if (localStorage.token) {
    var userId = user.id; //?? loguin o guest
  } else {
    var userId = 1;
  }

  useEffect(() => {
    function checkUsetData() {
      const item = localStorage.getItem("token");
      if (item) {
        setUserData(item);
      }
    }
    dispatch(getProductCart(userId));
    window.addEventListener("storage", checkUsetData);
    return () => {
      window.removeEventListener("storage", checkUsetData);
    };
  }, []);

  let productsCarts = useSelector((state) => state.users.carrito);
  const [userData, setUserData] = useState(null);

  const deleteAll = (e) => {
    e.preventDefault();
    dispatch(deleteAllCart(userId));
  };

  /* cambio de guest-login */
  if (!userData && !localStorage.token) {
    //??Guest
    if (localStorage.cart) {
      productsCarts = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  } else if (userData || localStorage.token) {
    if (localStorage.cart) {
      //?? Loguin
      productsCarts = JSON.parse(localStorage.getItem("cart"));
      dispatch(addProducts(userId, productsCarts));
      localStorage.removeItem("cart");
      setUserData(null); //evitar un loop
    }
  }

  return (
    <Container fluid={true} className="mt-4">
      <Row>
        <Col lg="8">
          <ShoppingCart items={productsCarts} />
        </Col>
        <Col lg="4">
          <ButtonBlock children={"Siguiente"} />
          <Button children={"Eliminar Carrito"} onClick={deleteAll} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
