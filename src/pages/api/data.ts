import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

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
    const dataDir = path.join(process.cwd(), 'data');
    
    // Read early access data
    const earlyAccessFile = path.join(dataDir, 'early-access.json');
    let earlyAccess: string[] = [];
    if (fs.existsSync(earlyAccessFile)) {
      const earlyAccessContent = fs.readFileSync(earlyAccessFile, 'utf-8');
      earlyAccess = JSON.parse(earlyAccessContent);
    }

    // Read subscribers data
    const subscribersFile = path.join(dataDir, 'subscribers.json');
    let subscribers: string[] = [];
    if (fs.existsSync(subscribersFile)) {
      const subscribersContent = fs.readFileSync(subscribersFile, 'utf-8');
      subscribers = JSON.parse(subscribersContent);
    }

    // Calculate total unique emails
    const uniqueEmails = new Set([...earlyAccess, ...subscribers]);
    
    return res.status(200).json({
      earlyAccess,
      subscribers,
      earlyAccessCount: earlyAccess.length,
      subscribersCount: subscribers.length,
      totalCount: uniqueEmails.size
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