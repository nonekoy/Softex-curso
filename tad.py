class operac:
    def mult(x, y):
        multiply= (x * y)
        print("A multiplicação é: ", multiply)
        return multiply
    def div(x, y):
        try:
            divide= complex(x/y)
            print("a divisão é: ", divide)
            return divide
        except:
            print("divisão não possível.")
    def som(x, y):
        soma= complex(x + y)
        print("A soma é : ", soma)
        return soma
    def sub(x, y):
        subtr= complex(x- y)
        print("A subtração é :", subtr)
        return subtr

a = complex(2,5)
print('a =',a)
print('Type of a is',type(a))

b = complex(-2,3)
print('b =',b)
print('Type of b is',type(b))

multip =operac.mult(a,b)
print("número real= ", multip.real,"número imaginário= ",multip.imag)
divi =operac.div(a,b)
print("número real= ", divi.real,"número imaginário= ",divi.imag)
adi= operac.som(a,b)
print("número real= ", adi.real,"número imaginário= ",adi.imag)
subt= operac.sub(a,b)
print("número real= ", subt.real,"número imaginário= ",subt.imag)