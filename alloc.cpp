#include <stdio.h>
#include <stdlib.h>

int main(){
    int *pnt;
    int num, i;
    printf("Digite o tamanho da lista :  ");
    scanf("%i",&num);
    pnt = (int*) malloc(num*sizeof(int));
    for (i=0; i<num;i++){
        printf("Digite o %do numero: ", i+1);
        scanf("%i", &pnt[i]);
    }
    printf("lista final: ");
    for (i=0; i<num; i++){
		printf("%i  ",pnt[i]);
	}
    free(pnt);
    printf("\nApos liberar espaco:  ");
    printf("%d", pnt);
    return 0;
}
