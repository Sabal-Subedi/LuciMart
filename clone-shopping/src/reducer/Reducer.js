export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD TO BASKET":
      return [
        ...state,
        {
          id: action.basket.id,
          title: action.basket.title,
          price: action.basket.price,
          rating: action.basket.rating,
          image: action.basket.image,
          itemid: Math.random() * 1000,
        },
      ];

    case "REMOVE FROM BASKET":
      return state.filter((s) => s.itemid !== action.itemid);
    default:
      return state;
  }
};
