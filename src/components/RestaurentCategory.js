import ItemListMenu from "./ItemListMenu.js";

const RestaurentCategory = ({ data , showItemList, setShowItemList,setCategoryIndex}) => {
  //lifting the state up
  const { itemCards, title } = data?.card?.card;
  //const [showItemList, setShowItemList] = useState(false);


  const handleClick = () => {
    // setShowItemList(!showItemList);
    setCategoryIndex()
    setShowItemList(!showItemList)
  };
  return (
    <div
      className="border-b-2 border-gray-300 p-4 m-4 cursor-pointer "
      onClick={handleClick}
    >
      <div className="flex justify-between ">
        <div className="font-semibold text-lg">
          {title}({itemCards.length})
        </div>
        <div>{showItemList ? "⬆️" : "⬇️"}</div>
      </div>
      <div className="m-4">
        {itemCards.map(
          (item) =>
            showItemList && (
              <ItemListMenu key={item?.card?.info?.id} data={item} />
            )
        )}
      </div>
    </div>
  );
};

export default RestaurentCategory;
