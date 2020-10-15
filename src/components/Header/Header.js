import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';

import { useDispatch } from 'react-redux';
import { charactersSearch } from '../../store/actions';

import styles from './style.module.scss';

const cx = classnames.bind(styles);

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(charactersSearch(searchValue));
  },[searchValue, dispatch]);

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className={cx('header')}>
      <div className={cx('header_titleSection')}>
        <div className={cx('header_title')}>РИК И МОРТИ</div>
        <div className={cx('header_subtitle')}>База данных героев</div>
      </div>
      <div className={cx('header_searchSection')}>
        <input
          className={cx('header_input')}
          type="number"
          onChange={handleChange}
          value={searchValue}
          placeholder="Введите номер серии"
        />
      </div>
    </div>
  );
};

export default Header;
