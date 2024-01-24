from datetime import date
dataatual= date.today()
diaatual= dataatual.day
mesatual= dataatual.month
anoatual= dataatual.year
menu = True
while menu==True:
    print("digite a sua data de nascimento ")
    try:
        dia= int(input("Primeiro digite o dia: "))
        if (dia<32) and (dia>0):
            while menu == True:
                try:
                    mes= int(input("Agora o mês(em números): "))
                    if (mes>0) and (mes<13):
                        while menu == True:
                            try:
                                ano= int(input("Agora o ano (formato XXXX):"))
                                if (ano>1900) and (ano <2022):
                                    idade = anoatual - ano -1
                                    if (mesatual> mes):
                                        idade+=1
                                    elif (mesatual==mes) and (diaatual>=dia) :
                                        idade+=1
                                    print(f"Sua idade é {idade}")
                                    menu = False                            
                            except:
                                print("valor inexistente")
                    else:
                        print("tente novamente.")
                except:
                    print("tente novamente.")
        else:
            print("Valor inexistente.")
    except:
        print("tente novamente.")