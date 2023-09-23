#include <bits/stdc++.h>
using namespace std;

//int arr[];

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n;
	int sum = 0;
	cin >> n;
	
	for (int i = 0; i < n; i++) {
		int k;
		cin >> k;
		sum += k;
	}
	cout << sum - (n - 1);

}