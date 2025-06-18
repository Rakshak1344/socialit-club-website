import type { NextApiRequest, NextApiResponse } from 'next';
import { addEmailToSet, EMAIL_SETS } from '@/lib/kv';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const isNewEmail = await addEmailToSet(EMAIL_SETS.EARLY_ACCESS, email);
    
    if (!isNewEmail) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    return res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Error subscribing email:', error);
    return res.status(500).json({ message: 'Failed to subscribe' });
  }
} 