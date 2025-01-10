interface ItemsListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

function ItemsList<T>(props: ItemsListProps<T>): JSX.Element {
  return <>{props.items.map(props.renderItem)}</>;
}

export default ItemsList;
