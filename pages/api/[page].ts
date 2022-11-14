import { ControllerFactory, Module } from 'lib/factory';
import { NextApiRequest, NextApiResponse } from 'next';

const pageHandler = ({ query }: NextApiRequest, res: NextApiResponse) => {
  const controller = ControllerFactory.getInstance(Module.page);
  res.status(200).json(controller.getPageByName(query.page as string));
};

export default pageHandler;
