import './Section1.scss';
import popularDishes from '../../../data/Popular'; // Оновлений шлях
import type { Dish } from '../../../data/Popular'; // Оновлений шлях
import Food from '../../../assets/homepage/png/Food.png';
import Pizza from '../../../assets/homepage/svg/Pizza.svg';
import Hotdog from '../../../assets/homepage/svg/Hotdog.svg';
import Doughnut from '../../../assets/homepage/svg/Doughnut.svg';
import Icecream from '../../../assets/homepage/svg/Icecream.svg';
import Zongzi from '../../../assets/homepage/svg/Zongzi.svg';
import chicken from '../../../assets/homepage/png/chicken.png';
import burger from '../../../assets/homepage/png/burger.png';
import star from '../../../assets/homepage/svg/Star.svg';
import plus from '../../../assets/homepage/svg/plus.svg';
import { useOrder } from '../../../context/OrderContext'; // Оновлений шлях

function Section1() {
  const { addOrder } = useOrder();

  const handleAddToOrder = (dish: Dish) => {
    addOrder(dish);
  };

  return (
    <section className="section1">
      <div className="section1-container1">
        <div className="section1-box1">
          <div className="section1-box1__textbox">
            <h1 className="section1-box1__textbox-title">50% OFF</h1>
            <p className="section1-box1__textbox-text">Daily Deals</p>
          </div>
          <img src={Food} alt="food" className="section1-box1__img" />
        </div>
        <div className="section1-box2">
          <div className="section1-box2__cont section1-box2__cont--color1">
            <p className="section1-box2__cont-text">Pizza</p>
            <img src={Pizza} alt="pizza" className="section1-box2__cont-img" />
          </div>
          <div className="section1-box2__cont section1-box2__cont--color2">
            <p className="section1-box2__cont-text">Asian</p>
            <img src={Hotdog} alt="hotdog" className="section1-box2__cont-img" />
          </div>
          <div className="section1-box2__cont section1-box2__cont--color1">
            <p className="section1-box2__cont-text">Donat</p>
            <img src={Doughnut} alt="doughnut" className="section1-box2__cont-img" />
          </div>
          <div className="section1-box2__cont section1-box2__cont--color3">
            <p className="section1-box2__cont-text">Ice</p>
            <img src={Icecream} alt="icecream" className="section1-box2__cont-img" />
          </div>
          <div className="section1-box2__cont section1-box2__cont--color4">
            <p className="section1-box2__cont-text">Asian</p>
            <img src={Zongzi} alt="zongzi" className="section1-box2__cont-img" />
          </div>
        </div>
      </div>
      <div className="section1-container2">
        <h2 className="section1-container2__title">Nearby Resturents</h2>
        <div className="section1-container2__wrap">
          <div className="section1-box">
            <img src={chicken} alt="chicken" className="section1-box__img" />
            <div className="section1-box-wrap">
              <div className="section1-box-wrap__category">
                <p className="section1-box-wrap__category-text">Healthy</p>
              </div>
              <p className="section1-box-wrap__text">The Chicken King</p>
              <div className="section1-box-wrap__cont">
                <img src={star} alt="star" className="section1-box-wrap__cont-img" />
                <p className="section1-box-wrap__cont-text">4.8</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <img src={burger} alt="burger" className="section1-box__img" />
            <div className="section1-box-wrap">
              <div className="section1-box-wrap__category">
                <p className="section1-box-wrap__category-text">Trending</p>
              </div>
              <p className="section1-box-wrap__text">The Burger King</p>
              <div className="section1-box-wrap__cont">
                <img src={star} alt="star" className="section1-box-wrap__cont-img" />
                <p className="section1-box-wrap__cont-text">4.8</p>
              </div>
            </div>
          </div>
          <div className="section1-box">
            <img src={chicken} alt="chicken" className="section1-box__img" />
            <div className="section1-box-wrap">
              <div className="section1-box-wrap__category">
                <p className="section1-box-wrap__category-text">Healthy</p>
              </div>
              <p className="section1-box-wrap__text">The Chicken King</p>
              <div className="section1-box-wrap__cont">
                <img src={star} alt="star" className="section1-box-wrap__cont-img" />
                <p className="section1-box-wrap__cont-text">4.8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section1-container3">
        <h2 className="section1-container3__title">Most Popular</h2>
        <div className="section1-container3-wrap">
          {popularDishes.map((dish: Dish) => (
            <div key={dish.id} className="section1-box">
              <img src={dish.image} alt={dish.title} className="section1-box__img" />
              <div className="section1-box__category">
                <p className="section1-box__category-text">{dish.category}</p>
              </div>
              <p className="section1-box__text">{dish.title}</p>
              <div className="section1-box__cont">
                <img src={star} alt="star" className="section1-box__cont-img" />
                <p className="section1-box__cont-text">{dish.rating}</p>
              </div>
              <div className="section1-box__price">
                <p className="section1-box__price-text">${dish.price}</p>
                <button
                  className="section1-box__price-btn"
                  onClick={() => handleAddToOrder(dish)}
                >
                  <img src={plus} alt="plus" className="section1-box__price-btn-img" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section1;