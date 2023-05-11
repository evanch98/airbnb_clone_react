import { PrismaClient } from "@prisma/client";

// to be able to use throughout the code
declare global {
  var prisma: PrismaClient | undefined
}

// recommended practice for next 13
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') globalThis.prisma = client

export default client;
