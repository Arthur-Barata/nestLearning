-- AlterTable
ALTER TABLE "Products" ADD COLUMN "Updated" DATETIME;
ALTER TABLE "Products" ADD COLUMN "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "Updated" DATETIME;
ALTER TABLE "User" ADD COLUMN "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "User" ADD COLUMN "password" TEXT;
