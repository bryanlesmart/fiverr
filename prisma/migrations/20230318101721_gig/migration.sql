-- CreateTable
CREATE TABLE "gigs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "total_stars" INTEGER NOT NULL DEFAULT 0,
    "star_num" INTEGER NOT NULL DEFAULT 0,
    "price" REAL NOT NULL DEFAULT 0,
    "image" TEXT,
    "cover_image" TEXT,
    "short_description" TEXT,
    "deliverytime" TEXT NOT NULL,
    "revision_number" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    CONSTRAINT "gigs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "gigs_id_key" ON "gigs"("id");
