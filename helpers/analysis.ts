import { filteredArrayesByKeyword } from './analysisHelpers';
import PasteModel from '../mongo/model';

export const analysis = async () => {
  try {
    const initialData = await PasteModel.find({});
    const [filteredPorn, filterOutPorn] = filteredArrayesByKeyword(
      initialData,
      ['porn', 'p0rn', 'sex', 's3x']
    );
    const [filteredDataleaks, filterOutDataleaks] = filteredArrayesByKeyword(
      filterOutPorn,
      ['information', 'data', 'leak', 'database', 'credit', 'password']
    );
    const [filteredDrugs, filterOutDrugs] = filteredArrayesByKeyword(
      filterOutDataleaks,
      ['cocaine', 'buprenorphine', 'meth', 'hashish']
    );
    const [filteredMoney, filterOutMoney] = filteredArrayesByKeyword(
      filterOutDrugs,
      ['bitcoin', 'paypal']
    );
    return {
      total: initialData.length,
      porn: filteredPorn.length,
      dataleaks: filteredDataleaks.length,
      drugs: filteredDrugs.length,
      money: filteredMoney.length,
      other: filterOutMoney.length,
    };
  } catch (error) {
    console.log(error);
  }
};
