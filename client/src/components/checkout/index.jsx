import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BagCheck, ArrowLeftCircle } from "react-bootstrap-icons";
import { Button, Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../custom/input";
import { useHistory } from "react-router-dom";
import { getOrders, updateStatusOrder } from "../../redux/actions/ordenActions";

const CheckoutForm = ({ direction = "" }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.userDetail.id);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const orders = useSelector((state) => state.order.allOrders);
  let productsCarts = useSelector((state) => state.users.carrito);
  let userOrder = orders.filter(
    (item) => item.userId === userId
  ); /* trae todas las ordenes con sus distintos estados del mismo usuario*/
  let orderStatus = userOrder.filter(
    (item) => item.status === "shopping_cart"
  ); /*trae la orden con estado shopping_cart*/
  let obj = orderStatus[0];
  let id;
  if (obj) id = obj.id;

  let status = "processing";

  const bye = function () {
    history.push("/products");
  };
  const handleClick = () => {
    setTimeout(bye, 1000);
    dispatch(updateStatusOrder(id, status, productsCarts, userId));
  };
  return (
    <Col
      lg="6"
      sm="10"
      xs="10"
      className="card shadow pl-3 pr-3 pb-4 pt-2 mb-3 mx-auto"
    >
      <Formik
        initialValues={{ direction }}
        validationSchema={Yup.object({
          direction: Yup.string()
            .min(4, "Debe tener al menos 4 caracteres")
            .max(50, "Debe tener 50 caracteres o menos")
            .required("Debes completar este campo"),
        })}
      >
        {({ isSubmitting, setFieldValue }) => {
          return (
            <Form>
              <Col className="rounded-lg text-center">
                <Row>
                  <Button
                    className="btn btn-light text-secondary btn-sm float-left"
                    onClick={() => history.push("/cart")}
                  >
                    <ArrowLeftCircle size={30} />
                  </Button>
                </Row>

                <Row className="d-block">
                  <BagCheck className="mb-1 mr-2" size={40} />
                  <h2>Confirma tu compra!</h2>
                </Row>
              </Col>
              <hr className="mt-0 mb-3" />
              {/* <h6>El total de tu compra es </h6> */}
              <Row>
                <Col>
                  <CustomInput
                    label="Direccion"
                    name="direction"
                    type="text"
                    placeholder="Domicilio de envio"
                  />
                </Col>
              </Row>
              <Button
                block
                className="bg-color-primary shadow-primary rounded-pill border-0"
                type="submit"
                onClick={handleClick}
              >
                {isSubmitting
                  ? "Gracias!"
                  : status === "shopping_cart"
                  ? "Gracias!"
                  : "comprar"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Col>
  );
};

export default CheckoutForm;
