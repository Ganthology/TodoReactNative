import realm from '../Realm/realm';

export const resetSelectedItemsHandler = () => {
  const todolistData = realm.objects('TodoItem');

  const selectedItems = todolistData.filtered('isSelected == true');

  for (let item of selectedItems) {
    realm.write(() => {
      item.isSelected = false;
    });
  }
};
