import React from 'react';
import classnames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { getLoading } from '../../store/selectors';

import styles from './style.module.scss';

const cx = classnames.bind(styles);

const Loader = () => {
  const isLoading = useSelector(getLoading);

  return (
    <div className={cx('loader', {
      loader__show: isLoading,
    })}>
      <div className={cx('loader_spinner')} />
    </div>
  );
};

export default Loader;
