import './Recommended.scss'
import chicken from '../../assets/homepage/png/chickenHell.png'
import SweDish from '../../assets/homepage/png/SweDish.png'
function Recommended() {
  return (
    <section className="recommended">
        <h2 className="recommended__title">Recommended</h2>
        <div className="recommended-container">
            <img src={chicken} alt="chicken" className="recommended-container__img" />
            <p className="recommended-container__text">Chicken Hell</p>
        </div>
        <div className="recommended-container">
            <img src={SweDish} alt="sweDish" className="recommended-container__img" />
            <p className="recommended-container__text">Swe Dish</p>
        </div>
        <div className="recommended-container">
            <img src={chicken} alt="chicken" className="recommended-container__img" />
            <p className="recommended-container__text">Chicken Hell</p>
        </div>
    </section>
  )
}

export default Recommended