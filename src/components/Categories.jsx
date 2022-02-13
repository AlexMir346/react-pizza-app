import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div>
      <div className="categories">
        <div className="hamburger">
          <HamburgerMenu>
            {items.map((name, index) => (
              <p
                className={activeCategory === index ? 'active-selected-hamburger' : ''}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}>
                {name}
              </p>
            ))}
          </HamburgerMenu>
        </div>
        <ul>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
                key={`li_${name}_${index}`}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: 0, items: [] };

export default Categories;
