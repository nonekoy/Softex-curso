const pessoas = [
    { nome: 'João', idade: 30, profissão: 'Engenheiro', cidade: 'São Paulo' },
    { nome: 'Maria', idade: 25, profissão: 'Designer', cidade: 'Rio de Janeiro' },
    { nome: 'Carlos', idade: 35, profissão: 'Médico', cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 28, profissão: 'Professor', cidade: 'Salvador' }
  ];
  for (const pessoa of pessoas) {
    console.log('Dados da pessoa:');
    for (const propriedade in pessoa) {
      console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
    console.log('---'); 
  }