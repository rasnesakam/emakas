/*
  Warnings:

  - Added the required column `uri` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "uri" VARCHAR(30) NOT NULL;
