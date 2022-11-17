import { getDataByPageName } from '@/lib/queries';
import { NextApiRequest, NextApiResponse } from 'next';

const pageHandler = ({ query }: NextApiRequest, res: NextApiResponse) => {
  const pageName = query.page as string;
  res.status(200).json(getDataByPageName(pageName));
};

export default pageHandler;
