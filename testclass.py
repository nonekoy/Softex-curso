
class elevador:
    peso= float
    andares= [1, 2, 3, 4, 5, 6]
    def pesomax(peso,y):
        max = peso+ y
        if max <= 1000:
            print("funcionando normalmente.")
        else:
            print("por favor, retire peso do elevador.")
    
def andar(piso):
    print("defina o andar atual:")
    try:
        andaratual = int(input)
        print("indo ao andar ",andaratual)
    except (andaratual> len.andares+1)|(andaratual<1):
        print("andar não existente.")
        print("ainda no andar ",andaratual)
    
class andares:
    andar= ["terreo", ]
        


    