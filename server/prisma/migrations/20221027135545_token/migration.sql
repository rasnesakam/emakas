-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "user_name" VARCHAR(25) NOT NULL,
    "surname" VARCHAR(25) NOT NULL,
    "email" VARCHAR(25) NOT NULL,
    "passwordHash" VARCHAR(64) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTokens" (
    "id" TEXT NOT NULL,
    "iss" VARCHAR(20) NOT NULL,
    "aud" VARCHAR(20) NOT NULL,
    "exp" VARCHAR(10) NOT NULL,

    CONSTRAINT "UserTokens_pkey" PRIMARY KEY ("id")
);
