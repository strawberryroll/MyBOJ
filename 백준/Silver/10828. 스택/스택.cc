#include <bits/stdc++.h>
using namespace std;

int main(void) {
	cin.tie(0);
	ios::sync_with_stdio(0);

	int N;
	cin >> N;

	stack<int> S;

	while (N--) {
		string s;
		cin >> s;

		if (s == "push") {
			int i;
			cin >> i;
			S.push(i);
		}
		
		if (s == "pop") {
			if (S.empty())
				cout << "-1" << '\n';
			else
			{
				cout << S.top() << '\n';
				S.pop();
			}
		}

		if (s == "size") {
			cout << S.size() << '\n';

		}

		if (s == "empty") {
			if (S.empty())
				cout << "1" << '\n';
			else
				cout << "0" << '\n';
		}

		if (s == "top") {
			if (S.empty())
				cout << "-1" << '\n';
			else
				cout << S.top() << '\n';


		}
	}
}