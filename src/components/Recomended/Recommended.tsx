import './Recommended.scss';
import { recommendedItems } from '../../data/Recomended'; // Імпорт константи
import type { RecommendedItem } from '../../data/Recomended'; // Імпорт типу

function Recommended() {
  return (
    <section className="recommended">
      <h2 className="recommended__title">Recommended</h2>
      {recommendedItems.map((item: RecommendedItem, index: number) => (
        <div key={index} className="recommended-container">
          <img src={item.image} alt={item.name} className="recommended-container__img" />
          <p className="recommended-container__text">{item.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Recommended;