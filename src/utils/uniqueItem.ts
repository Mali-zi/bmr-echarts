const uniqueItems = (arr: string[]) => {
  const uniqueIds = new Set();

  const uniqueValues = arr.filter((a) => {
    const isDuplicate = uniqueIds.has(a);

    uniqueIds.add(a);

    if (!isDuplicate) {
      return true;
    }

    return false;
  });

  return uniqueValues;
};

export default uniqueItems;
