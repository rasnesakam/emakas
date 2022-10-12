/*
  Warnings:

  - Added the required column `featuredImg` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "featuredImg" VARCHAR(48) NOT NULL,
ADD COLUMN     "published" INTEGER NOT NULL DEFAULT 0;
