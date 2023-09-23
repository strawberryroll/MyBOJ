#include <bits/stdc++.h>
using namespace std;


int main(void) {
	int T, R;
	string s;

	cin >> T;
	for (int i = 0; i < T; i++) {
		cin >> R >> s;
		for (int j = 0; j < s.size(); j++) {
			for (int i = 0; i < R; i++)
				cout << s[j];

		}
		cout << '\n';
	}


}