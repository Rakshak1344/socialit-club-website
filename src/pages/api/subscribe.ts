import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

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

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    // Path to the subscribers file
    const subscribersFile = path.join(dataDir, 'subscribers.json');

    // Read existing subscribers or create new array
    let subscribers: string[] = [];
    if (fs.existsSync(subscribersFile)) {
      const fileContent = fs.readFileSync(subscribersFile, 'utf-8');
      subscribers = JSON.parse(fileContent);
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Add new email
    subscribers.push(email);

    // Save updated list
    fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));

    return res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Error saving subscription:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 