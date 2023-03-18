-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT,
    "isSeller" BOOLEAN DEFAULT false
);
INSERT INTO "new_user" ("country", "description", "email", "id", "image", "isSeller", "phone", "username") SELECT "country", "description", "email", "id", "image", "isSeller", "phone", "username" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
