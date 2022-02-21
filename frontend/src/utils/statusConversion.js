const statusConversion = (status) => {
  switch (status) {
    case 'in progress':
      return 'Em Progresso';
    case 'pending':
      return 'Pendente';
    case 'done':
      return 'Pronto';
    default:
      'done';
      break;
  }
};

export default statusConversion;