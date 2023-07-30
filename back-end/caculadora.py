certo= True
num1= float
num2 = float
operator = str
def calculator(num1, num2, operator):
    if operator== "+":
        return num1 + num2
    if operator== "-":
        return num1 - num2
    if operator== "*":
        return num1 / num2
    if operator== "*":
        return num1 * num2

while certo:
    try:
        num1= float(input("digite o valor 1:  "))
        num2= float(input("digite o valor 2:  "))
        operator= str(input("digite o operador (+), (-), (/), (*):  "))
        if (operator!='+') and (operator!='-') and (operator!='/') and (operator!='*'):
            print("operador não existente")
            raise Exception
        if operator=="/" and num2==0:
            print("não pode ser dividido por zero")
            raise Exception
        print("resultado: ")
        print(calculator(num1,num2,operator))
        certo = False

    except:
        print("tente novamente")

