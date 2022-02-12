import PasteModel from '../mongo/model';
import { generateTrafficObj } from './TrafficHelpers';

/**
 * Gathers Traffic from db
 *
 * @return {{[key:number]:number}}
 * Key: Time of day, Value: Number of pastes created at that time
 */
export const traffic = async () => {
  const traffic = generateTrafficObj();
  try {
    const initialData = await PasteModel.find({});
    initialData.forEach((paste) => {
      traffic[paste.date.getHours()]++;
    });
    return traffic;
  } catch (error) {
    console.log(error);
  }
};
