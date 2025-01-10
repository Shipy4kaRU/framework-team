import { FC, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { BASE_URL } from '../../../constants/BASE_URL';

interface PictureProps {
  pictureLink: string;
  isEnter: boolean;
}

const Picture: FC<PictureProps> = ({ pictureLink, isEnter }) => {
  const [hasError, setHasError] = useState<boolean>(false);

  const errorHandler = () => {
    setHasError(true);
  };

  useEffect(() => {
    const img = new Image();
    img.onerror = errorHandler;
    img.src = `${BASE_URL}${pictureLink}`;
  }, [pictureLink]);

  return (
    <div className={styles.wrapper} style={{ backgroundColor: '#575757' }}>
      <img
        style={{
          visibility: hasError ? 'hidden' : 'visible',
        }}
        src={`${BASE_URL}${pictureLink}`}
        alt="Picture Name"
        className={`${styles.picture} ${isEnter ? styles.scale : ''}`}
        onError={errorHandler}
      />
    </div>
  );
};

export default Picture;
