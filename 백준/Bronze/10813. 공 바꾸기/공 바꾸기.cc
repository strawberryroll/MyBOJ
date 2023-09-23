#include <bits/stdc++.h>
using namespace std;

int main(void) {
	int N, M;
	int arr[105] = {};
	cin >> N >> M;

	for (int k=1; k<=N; k++) {
		arr[k] = k;
	}

	while (M--) {
		int i, j;
		cin >> i >> j;
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}

	for (int k = 1; k <= N; k++) {
		cout << arr[k] << " ";
	}


}