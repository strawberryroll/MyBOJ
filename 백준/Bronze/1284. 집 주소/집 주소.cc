#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	
	while (true) {

		string s;
		int sum = 1;
		cin >> s;
		

		if (s != "0") {
			for (int i = 0; i < s.length(); i++) {
				if (int(s[i] - '0') == 1)
					sum += 2;
				else if (int(s[i] - '0') == 0)
					sum += 4;
				else
					sum += 3;
				sum += 1;
			}
			cout << sum << '\n';
		}

		else {
			return 0;
		}
	
	}
	
}