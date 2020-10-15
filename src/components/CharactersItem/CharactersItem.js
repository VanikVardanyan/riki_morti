import React, { memo } from 'react';
import classnames from 'classnames/bind';

import styles from './style.module.scss';

const cx = classnames.bind(styles);

const CharactersItem = ({ name, species, gender, origin,	location, image, id, status }) => {
  const nameId = `#${name.replace(/-|\s/g,"").toLowerCase()}ID${id}`;

	return (
		<div className={cx('item')}>
      <div className={cx('item_container')}>
        <div className={cx('item_imageSection')}>
          <img src={image} alt={name} className={cx('item_image')}/>
        </div>
        <div className={cx('item_info')}>
          <div className={cx('item_nameId')}>{nameId}</div>
          <div className={cx('item_nameSection')}>
            <div className={cx('item_name')}>
              {name}
            </div>
            <div className={cx('item_status', `item_status__${status}`)}>
              {status}
            </div>
          </div>
          <div className={cx('item_descriptionWrapper')}>
            <div className={cx('item_description')}>Категория: {species}</div>
            <div className={cx('item_description')}>Пол: {gender}</div>
            <div className={cx('item_description')}>Начало: {origin}</div>
            <div className={cx('item_description')}>Местоположение: {location}</div>
          </div>
        </div>
      </div>
		</div>
	);
};

export default memo(CharactersItem);
