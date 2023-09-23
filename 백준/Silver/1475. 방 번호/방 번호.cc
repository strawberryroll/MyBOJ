#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N;
	cin >> N;

	string s = to_string(N);
	int arr_count[10] = {};


	for (char c : s)
		arr_count[c - '0']++;


	int num_first = 0;
	int num_second = 0;
	int num_max = 0;

	for (int i = 0; i < 10; i++) {
		if (i != 6 && i != 9)
			num_first = max(num_first, arr_count[i]);
		else
			num_second += arr_count[i];
	}
	num_second = num_second / 2 + num_second % 2;
	num_max = max(num_first, num_second);

	cout << num_max;
}