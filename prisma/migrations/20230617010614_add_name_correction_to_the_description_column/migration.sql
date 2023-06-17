/*
  Warnings:

  - You are about to drop the column `descripition` on the `Group` table. All the data in the column will be lost.
  - Added the required column `description` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" DROP COLUMN "descripition",
ADD COLUMN     "description" TEXT NOT NULL;
