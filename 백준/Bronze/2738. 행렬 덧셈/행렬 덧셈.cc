#include <bits/stdc++.h>
using namespace std;

int main(void) {
	int N, M;
	int arr1[100][100] = {};
	int arr2[100][100] = {};



	cin >> N >> M;
	

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++)
			cin >> arr1[i][j];
	}

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++)
			cin >> arr2[i][j];
	}

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++)
			cout << int(arr1[i][j]+arr2[i][j]) << ' ';
		cout << '\n';
	}

}
