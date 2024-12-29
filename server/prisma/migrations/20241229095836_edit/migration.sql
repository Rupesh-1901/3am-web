/*
  Warnings:

  - You are about to drop the column `name` on the `JobSeekerUser` table. All the data in the column will be lost.
  - You are about to drop the column `resume` on the `JobSeekerUser` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `JobSeekerUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginType` to the `JobSeekerUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `JobSeekerUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobSeekerUser" DROP COLUMN "name",
DROP COLUMN "resume",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "loginType" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
