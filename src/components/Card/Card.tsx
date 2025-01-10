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
  console.log(isLoading);

  return (
    <div
      className={`${styles.card} ${isLoading ? styles.loading : ''}`}
      onMouseEnter={() => {
        setIsEnter(true);
      }}
      onMouseLeave={() => {
        setIsEnter(false);
      }}
    >
      {!isLoading && (
        <Picture pictureLink={picture.imageUrl} isEnter={isEnter} pictureName={isError ? 'Error loading' : picture.name} />
      )}
      <Description
        created={picture.created}
        name={isError ? 'Loading error' : picture.name}
        locationId={picture.locationId}
        authorId={picture.authorId}
        isEnter={isEnter}
      />
    </div>
  );
};

export default Card;
