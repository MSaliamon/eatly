import './SearchSection1.scss';
import searchMini from '../../../assets/Search/SearchMini.svg';
import search from '../../../assets/Search/search.svg';
import { useState } from 'react';
import { recommendedItems } from '../../../data/Recomended';
import type { RecommendedItem } from '../../../data/Recomended';

const SearchSection1: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const isSearching = searchTerm.trim().length > 0;
  const filteredItems = isSearching
    ? recommendedItems.filter((item: RecommendedItem) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <section className="search">
      <label className="search__label">
        <img src={searchMini} alt="searchMini" className="search__label-img" />
        <input
          type="text"
          className="search__label-input"
          placeholder="search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </label>
      {isSearching ? (
        <div className="recommended">
          {filteredItems.map((item: RecommendedItem, index: number) => (
            <div key={index} className="recommended-container">
              <img src={item.image} alt={item.name} className="recommended-container__img" />
              <p className="recommended-container__text">{item.name} - {item.price}</p>
            </div>
          ))}
          {filteredItems.length === 0 && <p className="search-container1__text">No results found</p>}
        </div>
      ) : (
        <div className="search-container1">
          <img src={search} alt="search" className="search__container1-img" />
          <p className="search-container1__text">Search Anything</p>
        </div>
      )}
    </section>
  );
};

export default SearchSection1;