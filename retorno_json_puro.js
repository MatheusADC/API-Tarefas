export const handler = async (event) => {
  const tarefas = [
    {
      descricao: "Estudar Java, Angular e Typescript",
      status: "pendente",
    },
    {
      descricao: "Escrever o TCC sobre Redes Neurais Convolucionais",
      status: "finalizada",
    },
    {
      descricao: "Reunião com a equipe de desenvolvimento (10h)",
      status: "pendente",
    },
  ];
  return tarefas;
};
