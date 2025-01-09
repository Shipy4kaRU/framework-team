import { FC, useState } from 'react';
import { Picture, Description } from '../../constants/components';
import styles from './styles.module.scss';
import { IPaintings } from '../../interfaces/interfaces';

interface CardProps {
  picture: IPaintings;
  isLoading: boolean;
  isError: boolean;
}

const Card: FC<CardProps> = ({ picture, isLoading, isError }) => {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => {
        setIsEnter(true);
      }}
      onMouseLeave={() => {
        setIsEnter(false);
      }}
    >
      <Picture pictureLink={picture.imageUrl} isEnter={isEnter} />
      <Description
        created={picture.created}
        name={picture.name}
        locationId={picture.locationId}
        authorId={picture.authorId}
        isEnter={isEnter}
      />
    </div>
  );
};

export default Card;
