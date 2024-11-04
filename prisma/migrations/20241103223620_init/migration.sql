-- AlterTable
ALTER TABLE "Tarefas" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id");
