const getRandomIntegerNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);

  return array[randomIndex];
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};

export {getRandomArrayItem, getRandomIntegerNumber, formatTime};
