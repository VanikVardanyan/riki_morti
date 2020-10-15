import React from 'react';
import { useSelector } from 'react-redux';

import CharactersItem from '../CharactersItem';
import { getCharacters } from '../../store/selectors';

import styles from './style.module.scss';

const CharactersWrapper = () => {
  const characters = useSelector(getCharacters);

  return (
    <div className={styles.wrapper}>
      {characters.length ? (
        <div className={styles.wrapper_succesMessage}>В базе вселенной удолось найти : </div>
      ) : (
        <div className={styles.wrapper_succesMessage}>
          <div>Ничего не найдено</div>
          <div className={styles.wrapper_errorSub}>
            Возможно, в далеких уголках вселенной есть ответ, но не в этой маленькой части данных
          </div>
        </div>
      )}
      <div className={styles.wrapper_items}>
        {characters.map((elem) => (
          <CharactersItem
            key={elem.id}
            image={elem.image}
            name={elem.name}
            species={elem.species}
            gender={elem.gender}
            origin={elem.origin}
            location={elem.location}
            status={elem.status}
            id={elem.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersWrapper;
