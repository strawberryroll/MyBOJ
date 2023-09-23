#include <bits/stdc++.h>
using namespace std;

int arr_input[1000005];
int arr_count[2000005];

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n, x;

	int count = 0;

	cin >> n;
	for (int i=0; i < n; i++)
		cin >> arr_input[i];
	cin >> x;

	

	for (int i = 0; i < n; i++) {
		if (x - arr_input[i] >= 0) {
			if (arr_count[x - arr_input[i]] == 1)
				count++;
			arr_count[arr_input[i]]++;
		}

	}

	cout << count;
	
	



}