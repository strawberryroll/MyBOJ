#include <bits/stdc++.h>
using namespace std;


int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N;
	cin >> N;

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < i; j++)
			cout << " ";
		for (int k = 2 * N - 1; 2 * i < k; k--)
			cout << "*";
		cout << '\n';
	}
	for (int i = 1; i < N; i++) {
		for (int j = (2*N-1)/2-1; j >= i; j--)
			cout << " ";
		for (int k = 0; k < 2 * (i + 1) - 1; k++)
			cout << "*";
		cout << '\n';

	}
	
}

