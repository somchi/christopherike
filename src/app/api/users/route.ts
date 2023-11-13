import { NextResponse } from 'next/server';
import prisma from '@/app/_libs/prisma';

export async function GET() {
  const data = await prisma.user.findMany();
  const res = NextResponse.json(data);
  return res;
}
