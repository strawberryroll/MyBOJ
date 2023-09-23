#include <bits/stdc++.h>
using namespace std;

int main(void) {
	int sum = 0;
	int tmp = 0;
	int count = 0;
	string X;
	cin >> X;

	sum = X[0] - '0';
	while (X.length() > 1) {
		sum = tmp;
		for (int i = 0; i < X.length(); i++) {
			sum += X[i]-'0';
		}
		X = to_string(sum);
		count += 1;
	}


	cout << count << '\n';


	if (sum >= 3) {
		if (sum % 3 == 0)
			cout << "YES";
		else
			cout << "NO";
	}
	else
		cout << "NO";
	
		



}