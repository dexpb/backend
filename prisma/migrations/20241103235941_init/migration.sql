/*
  Warnings:

  - A unique constraint covering the columns `[ordemApresentacao]` on the table `Tarefas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `custo` to the `Tarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataLimite` to the `Tarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ordemApresentacao` to the `Tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tarefas" ADD COLUMN     "custo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dataLimite" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ordemApresentacao" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tarefas_ordemApresentacao_key" ON "Tarefas"("ordemApresentacao");
