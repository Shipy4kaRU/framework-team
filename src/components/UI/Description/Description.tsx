import { FC } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/hooks';

interface DescriptionProps {
  created: string;
  name: string;
  authorId: number;
  locationId: number;
  isEnter: boolean;
}

const Description: FC<DescriptionProps> = ({ created, name, authorId, locationId, isEnter }) => {
  const authors = useAppSelector((state) => state.paintsData.authors);
  const locations = useAppSelector((state) => state.paintsData.locations);

  return (
    <div className={styles.description}>
      <div className={`${isEnter ? styles.flyBottom : styles.flyUp} ${styles.text}`}>
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.title}>{created}</p>
      </div>
      <div className={`${isEnter ? styles.flyRight : styles.flyLeft} ${styles.text} ${styles.text2}`}>
        <p className={styles.header}>{authors.length > 0 && authors.find((author) => author.id === authorId)?.name}</p>
        <p className={styles.title}>
          {locations.length > 0 && locations.find((location) => location.id === locationId)?.location}
        </p>
      </div>
    </div>
  );
};

export default Description;
