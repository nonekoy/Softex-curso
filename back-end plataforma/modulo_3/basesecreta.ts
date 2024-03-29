class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senhaSecreta123"; // Senha da Base Secreta

  private constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta!");
    } else {
      console.log("Acesso negado. Senha incorreta!");
    }
  }
}

// Programa Principal
const agenteSecreto = SistemaSeguranca.getInstance();

// Agente tenta acessar a Base Secreta
agenteSecreto.acessarBaseSecreta("senhaIncorreta"); // Acesso negado. Senha incorreta!

agenteSecreto.acessarBaseSecreta("senhaSecreta123"); // Acesso concedido à Base Secreta!
