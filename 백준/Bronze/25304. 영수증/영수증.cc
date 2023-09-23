#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);
    
	int X;
	int N;
	cin >> X;
	cin >> N;
	int a;
	int b;
	int sum = 0;
	for (int i = 0; i < N; i++) {
		cin >> a >> b;
		sum += a * b;
	}

	if (X == sum)
		cout << "Yes";
	else
		cout << "No";
	
}