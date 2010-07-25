#include <stdio.h>

int main(){
  int i, j, sum = 0;

  for(j = 0; j < 100; j++) {
    for(i = 0; i < 1000000; i++){
      sum += i;
      sum = sum % 7123;
    }
  }
  /*   printf("%d\n", sum); */
}
