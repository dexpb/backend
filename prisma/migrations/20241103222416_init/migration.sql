/*
  Warnings:

  - The primary key for the `Tarefas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `custo` on the `Tarefas` table. All the data in the column will be lost.
  - You are about to drop the column `dataLimite` on the `Tarefas` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Tarefas` table. All the data in the column will be lost.
  - You are about to drop the column `ordemApresentacao` on the `Tarefas` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Tarefas_ordemApresentacao_key";

-- AlterTable
ALTER TABLE "Tarefas" DROP CONSTRAINT "Tarefas_pkey",
DROP COLUMN "custo",
DROP COLUMN "dataLimite",
DROP COLUMN "id",
DROP COLUMN "ordemApresentacao";
