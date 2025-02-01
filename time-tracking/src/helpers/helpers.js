export const convertSeconds = ({ isWithOutSeconds = false, seconds }) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  const totalTime = isWithOutSeconds
    ? `${hours}h ${minutes}m`
    : `${hours}:${minutes}:${remainingSeconds}`;

  return totalTime;
};
