-- CreateTable
CREATE TABLE "inscriptions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "car_model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "car_brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "inscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "inscriptions_dni_key" ON "inscriptions"("dni");
