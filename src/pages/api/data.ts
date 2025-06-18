import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllEmails } from '@/lib/kv';

type ResponseData = {
  earlyAccess: string[];
  subscribers: string[];
  earlyAccessCount: number;
  subscribersCount: number;
  totalCount: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const data = await getAllEmails();
    return res.status(200).json({
      earlyAccess: data.earlyAccess,
      subscribers: data.waitlist,
      earlyAccessCount: data.earlyAccessCount,
      subscribersCount: data.waitlistCount,
      totalCount: data.totalCount
    });
  } catch (error) {
    console.error('Error reading data:', error);
    return res.status(500).json({
      earlyAccess: [],
      subscribers: [],
      earlyAccessCount: 0,
      subscribersCount: 0,
      totalCount: 0
    });
  }
} 