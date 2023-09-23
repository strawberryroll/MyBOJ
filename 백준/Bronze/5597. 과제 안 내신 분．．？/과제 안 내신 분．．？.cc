#include <bits/stdc++.h>
#define NUM 35
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);



	int n;
	int arr[NUM] = {};

	for (int j=0; j<NUM - 7; j++) {
		cin >> n;
		arr[n]++;
	}
	
	for (int i = 1; i <= NUM-5; i++) {
		if (arr[i] == 0)
			cout << i << '\n';
	}
}