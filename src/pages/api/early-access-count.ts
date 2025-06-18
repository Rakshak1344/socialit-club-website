import type { NextApiRequest, NextApiResponse } from 'next';
import { getEmailCount, EMAIL_SETS } from '@/lib/kv';

type ResponseData = {
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const count = await getEmailCount(EMAIL_SETS.EARLY_ACCESS);
    return res.status(200).json({ count });
  } catch (error) {
    console.error('Error getting early access count:', error);
    return res.status(500).json({ count: 0 });
  }
} 