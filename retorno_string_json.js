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
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(tarefas),
  };
};
