import type { NextApiRequest, NextApiResponse } from 'next';
import { encrypt } from '../../utils/aes';
import { ResponseData } from '../../types/response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<string>>
) {
  const s = req.body?.data;
  try {
    const data = await encrypt(s);
    res.status(200).json({ c: 0, d: data });
  } catch (e: any) {
    res.status(200).json({ c: -1, m: e.message });
  }
}
