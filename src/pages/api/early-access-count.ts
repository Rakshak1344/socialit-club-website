import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type ResponseData = {
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const earlyAccessFile = path.join(process.cwd(), 'data', 'early-access.json');
    
    if (!fs.existsSync(earlyAccessFile)) {
      return res.status(200).json({ count: 0 });
    }

    const fileContent = fs.readFileSync(earlyAccessFile, 'utf-8');
    const subscribers = JSON.parse(fileContent);
    
    return res.status(200).json({ count: subscribers.length });
  } catch (error) {
    console.error('Error getting early access count:', error);
    return res.status(500).json({ count: 0 });
  }
} 