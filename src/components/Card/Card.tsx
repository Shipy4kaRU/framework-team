import { FC } from 'react';
import { Picture, Description } from '../../constants/components';
import styles from './styles.module.scss';
import { IPaintings } from '../../interfaces/interfaces';

interface CardProps {
  data: IPaintings[];
}

const Card: FC<CardProps> = ({ data }) => {
  return data.map((picture, index) => (
    <div key={index} className={styles.card}>
      <Picture pictureLink={picture.imageUrl} />
      <Description created={picture.created} name={picture.name} />
    </div>
  ));
};

export default Card;
