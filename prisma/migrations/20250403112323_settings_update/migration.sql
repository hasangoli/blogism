/*
  Warnings:

  - Added the required column `favIcon` to the `Settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallDarkLogo` to the `Settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallLogo` to the `Settings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "favIcon" TEXT NOT NULL,
    "smallLogo" TEXT NOT NULL,
    "smallDarkLogo" TEXT NOT NULL,
    "headerLogo" TEXT NOT NULL,
    "headerDarkLogo" TEXT NOT NULL,
    "footerLogo" TEXT NOT NULL,
    "footerDarkLogo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "homeTitle" TEXT NOT NULL,
    "homeSubTitle" TEXT NOT NULL,
    "contactTitle" TEXT NOT NULL,
    "contactSubTitle" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);
INSERT INTO "new_Settings" ("contactSubTitle", "contactTitle", "description", "email", "facebook", "footerDarkLogo", "footerLogo", "headerDarkLogo", "headerLogo", "homeSubTitle", "homeTitle", "id", "instagram", "linkedIn", "phone", "siteName", "telegram", "twitter") SELECT "contactSubTitle", "contactTitle", "description", "email", "facebook", "footerDarkLogo", "footerLogo", "headerDarkLogo", "headerLogo", "homeSubTitle", "homeTitle", "id", "instagram", "linkedIn", "phone", "siteName", "telegram", "twitter" FROM "Settings";
DROP TABLE "Settings";
ALTER TABLE "new_Settings" RENAME TO "Settings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
