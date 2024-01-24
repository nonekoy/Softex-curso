def calcule(num1, num2, fun):
    if (fun==1):
        return num1 + num2
    elif (fun==2):
        return num1 - num2
    elif (fun==3):
        return num1 * num2
    elif (fun==4):
        return num1 / num2
    else:
        return "erro."

while True:
    numero1= int(input("Digite o primeiro número: "))
    numero2= int(input("Digite o segundo número: "))
    print("Soma-> 1 |Subtração-> 2 |multiplicação-> 3 |divisão-> 4| se deseja fechar,")
    print("pressione 0 e enter.")
    operac= int(input("Digite o tipo de operação: "))
    if (operac == 1)or(operac ==2)or(operac==3)or(operac==4):
        try:
            print(calcule(numero1, numero2,operac))
        except:
            print("erro.")
    elif (operac == 0):
        break
    else:
        print("erro tente novamente.")
