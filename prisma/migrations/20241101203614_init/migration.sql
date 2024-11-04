-- CreateTable
CREATE TABLE "Tarefas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "custo" DOUBLE PRECISION NOT NULL,
    "dataLimite" TIMESTAMP(3) NOT NULL,
    "ordemApresentacao" INTEGER NOT NULL,

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tarefas_nome_key" ON "Tarefas"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Tarefas_ordemApresentacao_key" ON "Tarefas"("ordemApresentacao");
