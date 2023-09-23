#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int T;
	cin >> T;

	long long  a, b, result=1;
	while (T--) {
		cin >> a >> b;
		result = 1;

		for (int i = 0; i < b; i++) {
			result *= a;
			result %= 10;
		}
		if (result == 0)
			result = 10;

		cout << result << '\n';
	}


}
