const statusConversion = (status) => {
  switch (status) {
    case 'in progress':
      return 'Em Progresso';
    case 'pending':
      return 'Pendente';
    case 'done':
      return 'Pronto';
    default:
      return 'done';
  }
};

export default statusConversion;
