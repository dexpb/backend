/*
  Warnings:

  - Added the required column `status` to the `Tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tarefas" ADD COLUMN     "status" BOOLEAN NOT NULL;
