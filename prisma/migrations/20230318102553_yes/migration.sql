-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gigs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "total_stars" INTEGER DEFAULT 0,
    "star_num" INTEGER DEFAULT 0,
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
INSERT INTO "new_gigs" ("category", "cover_image", "deliverytime", "description", "features", "id", "image", "price", "revision_number", "short_description", "star_num", "title", "total_stars", "userId") SELECT "category", "cover_image", "deliverytime", "description", "features", "id", "image", "price", "revision_number", "short_description", "star_num", "title", "total_stars", "userId" FROM "gigs";
DROP TABLE "gigs";
ALTER TABLE "new_gigs" RENAME TO "gigs";
CREATE UNIQUE INDEX "gigs_id_key" ON "gigs"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
