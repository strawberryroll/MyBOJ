#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int T;
	string s;

	cin >> T;
	while (T--) {
		cin >> s;
		cout << s[0] << s[s.length()-1] << '\n';
	}
}