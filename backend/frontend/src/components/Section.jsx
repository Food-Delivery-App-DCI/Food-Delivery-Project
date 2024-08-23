/* eslint-disable react/no-unescaped-entities */
import "../style/Section.css";
import hamburguer from "../../assets/hamburguer.webp";
import indianFood from "../../assets/indian.webp";
import pizza2 from "../../assets/pizza2.webp";
import deliveryMan from "../../assets/deliveryman.png";

function Section() {
  return (
    <>
      <section className="user-section">
        <h3 className="love">Why Choose DelivEats Delivery?</h3>
        <div className="images">
          <div className="image-block">
            <img src={hamburguer} alt="Fast Delivery" className="food-image" />
            <p className="image-description">
              At DelivEats, we prioritize speed without compromising quality.
              Our rapid delivery service ensures your food arrives hot and
              fresh, no matter where you are in the city.
            </p>
          </div>
          <div className="image-block">
            <img src={indianFood} alt="Quality Food" className="food-image" />
            <p className="image-description">
              Our wide selection of partner restaurants guarantees that you'll
              always find exactly what you're craving. From gourmet meals to
              comfort food, we've got it all, delivered right to your door.
            </p>
          </div>
          <div className="image-block">
            <img src={pizza2} alt="Special Offers" className="food-image" />
            <p className="image-description">
              Don't miss out on our exclusive deals and discounts. DelivEats
              offers special promotions daily, making it easier than ever to
              enjoy your favorite meals at unbeatable prices.
            </p>
          </div>
        </div>

        <div className="img-text">
          <p className="text1">
            DelivEats is committed to delivering exceptional service, ensuring
            that every order is handled with care. From lightning-fast delivery
            to mouth-watering meals, we bring convenience and flavor to your
            doorstep. Join thousands of satisfied customers and experience the
            DelivEats difference today!
          </p>
          <img
            src={deliveryMan}
            alt="Delivery Man Holding Pizzas Boxes"
            className="footer-image"
          />
        </div>
      </section>
    </>
  );
}

export default Section;
