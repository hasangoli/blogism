-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "headerLogo" TEXT NOT NULL,
    "footerLogo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "homeTitle" TEXT NOT NULL,
    "homeSubTitle" TEXT NOT NULL,
    "contactTitle" TEXT NOT NULL,
    "contactSubTitle" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "featuredImage" TEXT,
    "content" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT,
    "avatar" TEXT,
    "description" TEXT,
    "twitter" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_email_key" ON "Author"("email");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
