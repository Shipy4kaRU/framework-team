import styles from './styles.module.scss';

interface ItemsListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

function ItemsList<T>(props: ItemsListProps<T>) {
  return <>{props.items.map(props.renderItem)}</>;
}

export default ItemsList;
