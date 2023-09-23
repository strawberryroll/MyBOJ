#include <bits/stdc++.h>
using namespace std;


int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N;
	cin >> N;

	for (int i = 0; i < N; i++) {
		for (int j = 0; j <= i; j++)
			cout << "*";
		for (int k = 2 * N; k > 2 * (i + 1); k--)
			cout << " ";
		for (int l = 0; l <= i; l++)
			cout << "*";
		cout << '\n';
	}

	for (int i = 1; i < N; i++) {
		for (int j = N; j > i; j--)
			cout << "*";
		for (int k = 0; k < i * 2; k++)
			cout << " ";
		for (int l = N; l > i; l--)
			cout << "*";
		cout << '\n';
	}
}