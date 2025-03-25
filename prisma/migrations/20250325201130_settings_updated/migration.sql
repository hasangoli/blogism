/*
  Warnings:

  - Added the required column `footerDarkLogo` to the `Settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `headerDarkLogo` to the `Settings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Settings" ADD COLUMN     "footerDarkLogo" TEXT NOT NULL,
ADD COLUMN     "headerDarkLogo" TEXT NOT NULL;
