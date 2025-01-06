import { FC } from 'react';
import styles from './styles.module.scss';
import image from '../../../icons/image.png';

interface PictureProps {}

const Picture: FC<PictureProps> = ({}) => {
  return <img src={image} alt="Picture Name" className={styles.picture} />;
};

export default Picture;
