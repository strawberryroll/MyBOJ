#include <stdio.h>

int main() {
	int a[3];
	int i, j;
	int tmp = 0;

	for (i = 0; i < 3; i++)
	{
		scanf("%d", &a[i]);
	}

	for (i = 0; i < 2; i++) {
		for (j = i+1; j < 3; j++) {
			if (a[i] > a[j]) {
				tmp = a[i];
				a[i] = a[j];
				a[j] = tmp;
			}
		}
	}

	for (int i = 0; i < 3; i++)
	{
		printf("%d ", a[i]);
	}

	return 0;
}