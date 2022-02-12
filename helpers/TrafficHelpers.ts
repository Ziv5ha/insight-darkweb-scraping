/**
 * Generates an empty Traffic object
 *
 * @return {{[key:number]:number}}
 * Key: Time of day, Value: 0
 */
export const generateTrafficObj = () => {
  const traffic: { [key: number]: number } = {};
  for (let i = 0; i < 24; i++) {
    traffic[i] = 0;
  }
  return traffic;
};
