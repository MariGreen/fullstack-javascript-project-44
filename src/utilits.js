const getRandomInclusive = (min, max) => {
  const bottom = Math.ceil(min);
  const top = Math.floor(max);
  return Math.floor(Math.random() * (top - bottom + 1) + bottom);
};

export default getRandomInclusive;
