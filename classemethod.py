class pessoa:
    nome = ""
    idade = int
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade


class trabalhador(pessoa):
    setor = ""
    salario= float
    def __init__(self, nome, idade, setor, salario):
        pessoa.__init__(self, nome, idade)
        self.setor = setor
        self.salario = salario
    def trabalhando(self):
        print("trabalhando atualmente.")

class gerenciar(trabalhador):
    lider = bool
    supervisionado = ""
    def __privar__(self, supervisionado, lider):
        self.supervisionado= supervisionado
        self.lider= lider
        trabalhador.__init__(self, setor)
        

vini = trabalhador("vinicius", 23, "comunicações", 15000)
vini.trabalhando()