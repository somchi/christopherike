import { Prisma } from '@prisma/client';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const user = await Prisma.user;
}
