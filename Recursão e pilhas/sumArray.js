function sumArray(arr) {
  // Caso base: se o array estiver vazio, retorna 0
  if (arr.length === 0) {
    return 0;
  }

  const firstElement = arr[0];

  const restOfArray = arr.slice(1);

  return firstElement + sumArray(restOfArray);
}

export default sumArray;