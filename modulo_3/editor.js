// Implementação do padrão Observer
class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(event) {
    this.observers.forEach(observer => observer.update(event));
  }
}

// Classe Editor (Observable)
class Editor extends Observer {
  openFile() {
    console.log("Arquivo aberto.");
    this.notify("open");
  }

  saveFile() {
    console.log("Conteúdo salvo no arquivo.");
    this.notify("save");
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber, 0, text);
  }

  removeLine(lineNumber) {
    this.lines.splice(lineNumber, 1);
  }

  printContent() {
    console.log("Conteúdo do editor de texto:");
    this.lines.forEach((line, index) => console.log(`Linha ${index + 1}: ${line}`));
  }
}

// Criação e uso do TextEditor
const textEditor = new TextEditor();

// Subscrição aos eventos "open" e "save"
textEditor.subscribe({
  update: event => console.log(`Evento recebido: ${event}`)
});

// Simulação de entrada do usuário
console.log("Digite linhas de texto. Envie 'EOF' para encerrar:");

let lineNumber = 1;
while (true) {
  const userInput = prompt(`Linha ${lineNumber}: `);

  if (userInput === "EOF") {
    break;
  }

  textEditor.insertLine(lineNumber - 1, userInput);
  lineNumber++;
}

// Salvando e imprimindo o conteúdo do editor
textEditor.saveFile();
textEditor.printContent();
