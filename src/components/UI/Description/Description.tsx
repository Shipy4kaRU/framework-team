import { FC } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { useRef, useEffect, useState } from 'react';

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
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  const [firstHidden, setFirstHidden] = useState<boolean>(false);
  const [secondHidden, setSecondHidden] = useState<boolean>(false);

  useEffect(() => {});

  return (
    <div className={styles.description}>
      <div className={`${isEnter ? styles.flyBottom : styles.flyUp} ${styles.text}`} ref={firstText}>
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.title}>{created}</p>
      </div>
      <div className={`${isEnter ? styles.flyRight : styles.flyLeft} ${styles.text}`} ref={secondText}>
        <p className={styles.header}>{authors && authors.length > 0 && authors.find((author) => author.id === authorId)?.name}</p>
        <p className={styles.title}>
          {locations && locations.length > 0 && locations.find((location) => location.id === locationId)?.location}
        </p>
      </div>
    </div>
  );
};

export default Description;
