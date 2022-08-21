def organizai(listona):
    for i in range(1, len(listona)):
        back = listona[i]
        j = i - 1
        while j>= 0 and back < listona[j]:
            listona[j + 1] = listona[j]
            j = j - 1
        listona[j + 1] = back

lista = [9, 5, 7, 3, 11, 17, 1, 19, 15]
organizai(lista)
print("lista:")
print(lista)            

