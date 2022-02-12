import { filteredArrayesByKeywords } from './analysisHelpers';
import PasteModel from '../mongo/model';

/**
 * Gathers analytics from db
 *
 * categories: porn, dataleaks, drugs, currency and other
 * @return {Object} containing the number of pastes in every category
 */
export const analysis = async () => {
  try {
    const initialData = await PasteModel.find({});
    const [filteredPorn, filterOutPorn] = filteredArrayesByKeywords(
      initialData,
      [
        'porn',
        'p0rn',
        'sex',
        's3x',
        'orgy',
        'fuck',
        'girl',
        'rape',
        'hot',
        'pussy',
      ]
    );
    const [filteredDataleaks, filterOutDataleaks] = filteredArrayesByKeywords(
      filterOutPorn,
      ['information', 'data', 'leak', 'database', 'credit', 'password']
    );
    const [filteredDrugs, filterOutDrugs] = filteredArrayesByKeywords(
      filterOutDataleaks,
      ['cocaine', 'buprenorphine', 'meth', 'hashish', 'drug', 'mushroom']
    );
    const [filteredMoney, filterOutMoney] = filteredArrayesByKeywords(
      filterOutDrugs,
      ['bitcoin', 'paypal', 'cryptocurrency', 'etherium']
    );
    return {
      total: initialData.length,
      porn: filteredPorn.length,
      dataleaks: filteredDataleaks.length,
      drugs: filteredDrugs.length,
      currency: filteredMoney.length,
      other: filterOutMoney.length,
    };
  } catch (error) {
    console.log(error);
  }
};
