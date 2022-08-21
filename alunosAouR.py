import pandas as pd

df = pd.read_csv(r"alunosteste.csv")
media = (df["nota 1"]+df["nota 2"])/2
df["media"]= media
df.loc[(df.media>=7) & (df.faltas<=5),"resultado"]="aprovado"
df.loc[(df.faltas>5) | (df.media<7),"resultado"]="reprovado"
print(df)