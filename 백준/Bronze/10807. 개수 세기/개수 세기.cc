#include <bits/stdc++.h>
using namespace std;

int arr[201];

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N;
	int d;
	int v;

	cin >> N;
	for (int i=0; i<N; i++) {
		cin >> d;
		if (d < 0)
			arr[100 - d]++;
		else
			arr[d]++;
	}

	cin >> v;

	if (v < 0)
		cout << arr[100 - v];
	else
		cout << arr[v];
}