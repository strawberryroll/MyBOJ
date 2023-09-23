#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	string a, b;
	
	cin >> a;
	cin >> b;

	int arr1[30] = {};
	int arr2[30] = {};

	
	for (int i = 0; i < a.length(); i++) {
		arr1[a[i] - 'a'] += 1;
	}
	for (int j = 0; j < b.length(); j++) {
		arr2[b[j] - 'a'] += 1;
	}
	
	int count = 0;

	for (int k = 0; k < size(arr1); k++) {
		if (arr1[k] == 0 || arr2[k] == 0) {
			count += arr1[k];
			count += arr2[k];
		}
		else {
			if (arr1[k] > arr2[k])
				count += arr1[k] - arr2[k];
			else if (arr1[k] < arr2[k])
				count += arr2[k] - arr1[k];
			else
				count += arr1[k] - arr2[k]; //count += 0

		}
	}
	
	cout << count;
}