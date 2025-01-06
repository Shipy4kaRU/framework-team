import { FC } from 'react';
import { Picture, Description } from '../../constants/components';
import styles from './styles.module.scss';

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <div className={styles.card}>
      <Picture />
      <Description />
    </div>
  );
};

export default Card;
