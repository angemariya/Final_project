
export const ApplyFilter = (items, {fromPrice, toPrice, sortOrder, discountedOnly}) => {
    const filteredItems = discountedOnly
        ? items
            .filter((item) => item.discont_price !== item.price)
            .filter((item) => {
              return (
                (!fromPrice ||
                  (item.discont_price || item.price) >= Number(fromPrice)) &&
                (!toPrice ||
                  (item.discont_price || item.price) <= Number(toPrice))
              );
            })
        : items.filter((item) => {
            return (
              (!fromPrice ||
                (item.discont_price || item.price) >= Number(fromPrice)) &&
              (!toPrice || (item.discont_price || item.price) <= Number(toPrice))
            );
          });
  
      const sortedItems =
        filteredItems &&
        filteredItems.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.price - b.price;
          } else if (sortOrder === "desc") {
            return b.price - a.price;
          }
          return 0;
        });
    return sortedItems;
  }