import styles from './Card.module.scss';
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCardFavourite } from "../../redux/cardsReducer";
import { removeCard } from "../../redux/cardsReducer";

const Card = props => {
    const cardId = props.cardId;
  const [favouriteValue, setFavouriteValue] = useState(props.isFavourite);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setFavouriteValue(!favouriteValue);
    dispatch(toggleCardFavourite(cardId));
  };

  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

    return (
        <li className={styles.card}>{props.title}{" "}
        <button
        onClick={handleClick}
        className={clsx(styles.button, props.isFavourite && styles.isActive)}
      >
        <span className={"fa fa-star"} />
      </button>
      <button onClick={deleteCard} className={styles.button}>
          <i className={"fa fa-trash"} />
        </button>
    </li>
    );
};

export default Card;