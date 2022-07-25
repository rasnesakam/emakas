/*
  Warnings:

  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "blog" DROP CONSTRAINT "blog_categoryId_fkey";

-- DropTable
DROP TABLE "blog";

-- DropTable
DROP TABLE "category";

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SEOTag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "metaDataId" TEXT,

    CONSTRAINT "SEOTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SEODesc" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(120) NOT NULL,

    CONSTRAINT "SEODesc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetaData" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visible" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT NOT NULL,
    "categoryId" TEXT,
    "tagId" TEXT,
    "sEODescId" TEXT NOT NULL,

    CONSTRAINT "MetaData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "featuredImg" VARCHAR(48) NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MetaDataToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SEOTag_name_key" ON "SEOTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MetaData_postId_key" ON "MetaData"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "MetaData_sEODescId_key" ON "MetaData"("sEODescId");

-- CreateIndex
CREATE UNIQUE INDEX "_MetaDataToTag_AB_unique" ON "_MetaDataToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MetaDataToTag_B_index" ON "_MetaDataToTag"("B");

-- AddForeignKey
ALTER TABLE "SEOTag" ADD CONSTRAINT "SEOTag_metaDataId_fkey" FOREIGN KEY ("metaDataId") REFERENCES "MetaData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaData" ADD CONSTRAINT "MetaData_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaData" ADD CONSTRAINT "MetaData_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetaData" ADD CONSTRAINT "MetaData_sEODescId_fkey" FOREIGN KEY ("sEODescId") REFERENCES "SEODesc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MetaDataToTag" ADD CONSTRAINT "_MetaDataToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "MetaData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MetaDataToTag" ADD CONSTRAINT "_MetaDataToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
