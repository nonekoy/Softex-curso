import string
from typing import Counter


strng= (input("digite uma palavra: "))
contador= Counter(strng)
print("essa palavra tem ",contador," letras")
print("essa string em maiúscula fica: ", strng.upper())
print("e em minúsculas fica: ", strng.lower())