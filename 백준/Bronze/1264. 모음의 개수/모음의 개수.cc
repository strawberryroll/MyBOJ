#include <bits/stdc++.h>
using namespace std;


int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	while (true) {
		string s;
		getline(cin, s);

		int count = 0;
		if (s != "#") {
			for (auto c : s) {
				if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
					count++;
				if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U')
					count++;


			}
			cout << count << '\n';
		}

		else {
			exit(0);
		}	
	}
	
}