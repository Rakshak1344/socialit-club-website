import { Redis } from '@upstash/redis';

// Validate required environment variables
if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
  throw new Error('Missing required Redis environment variables. Please check your Vercel configuration.');
}

// Initialize Redis client with Vercel environment variables
const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

export const EMAIL_SETS = {
  WAITLIST: 'waitlist_emails',
  EARLY_ACCESS: 'early_access_emails'
} as const;

export async function addEmailToSet(setName: string, email: string): Promise<boolean> {
  try {
    const isMember = await redis.sismember(setName, email);
    if (isMember) {
      return false; // Email already exists
    }
    await redis.sadd(setName, email);
    return true;
  } catch (error) {
    console.error('Error adding email to set:', error);
    throw error;
  }
}

export async function getEmailCount(setName: string): Promise<number> {
  try {
    return await redis.scard(setName);
  } catch (error) {
    console.error('Error getting email count:', error);
    return 0;
  }
}

export async function getAllEmails(): Promise<{
  waitlist: string[];
  earlyAccess: string[];
  waitlistCount: number;
  earlyAccessCount: number;
  totalCount: number;
}> {
  try {
    const [waitlist, earlyAccess] = await Promise.all([
      redis.smembers(EMAIL_SETS.WAITLIST),
      redis.smembers(EMAIL_SETS.EARLY_ACCESS)
    ]);

    const uniqueEmails = new Set([...waitlist, ...earlyAccess]);

    return {
      waitlist,
      earlyAccess,
      waitlistCount: waitlist.length,
      earlyAccessCount: earlyAccess.length,
      totalCount: uniqueEmails.size
    };
  } catch (error) {
    console.error('Error getting all emails:', error);
    return {
      waitlist: [],
      earlyAccess: [],
      waitlistCount: 0,
      earlyAccessCount: 0,
      totalCount: 0
    };
  }
} 