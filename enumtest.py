import enum

class candidatos(enum.Enum):
    candidato_X= 889
    candidato_Y= 847
    candidato_Z= 515
    branco= 0

votoX= int(0)
votoY= int(0)
votoZ= int(0)
votob= int(0)
while True:
    print("Vote em um dos candidatos, seus respectivos números são:")
    print("X = 889, Y= 847, Z=515, caso erre o número ou digite zero o voto é anulado.")
    try:
        voto= int(input("Voto em: "))
        if voto == 889:
            votoX+=1
        elif voto == 847:
            votoY+=1
        elif voto == 515:
            votoZ+=1
        else:
            votob+=1
        print("Deseja continuar a votação?")
        try:
            cont= int(input("se sim digite 1, qualquer outro valor encerrará a votação\n"))
            if cont==1:
                True
            else:
                break
        except:
            break
    except:
        print("Tente novamente.")

if (votoX>votoY) and (votoX>votoZ):
    print(f"O vencedor da votação foi o {candidatos.candidato_X.value} com {votoX} votos.")
    print(f"E tiveram no total {votob} votos brancos ou nulos.")
    print(f"o {candidatos.candidato_Y.value} teve {votoY} votos.")
    print(f"e o {candidatos.candidato_Z.value} teve {votoZ} votos.")
elif (votoY>votoX) and (votoY>votoZ):
    print(f"O vencedor da votação foi o {candidatos.candidato_Y.value} com {votoY} votos.")
    print(f"E tiveram no total {votob} votos brancos ou nulos.")
    print(f"o {candidatos.candidato_X.value} teve {votoX} votos.")
    print(f"e o {candidatos.candidato_Z.value} teve {votoZ} votos.")
elif (votoZ>votoY) and (votoZ>votoX):
    print(f"O vencedor da votação foi o {candidatos.candidato_Z.value} com {votoZ} votos.")
    print(f"E tiveram no total {votob} votos brancos ou nulos.")
    print(f"o {candidatos.candidato_X.value} teve {votoX} votos.")
    print(f"e o {candidatos.candidato_Y.value} teve {votoY} votos.")
else:
    print("Houve um problema na votação e não teve vencedor.")
    