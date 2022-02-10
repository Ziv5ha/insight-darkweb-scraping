import PasteModel from '../mongo/model';
import { generateTrafficObj } from './TrafficHelpers';

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
