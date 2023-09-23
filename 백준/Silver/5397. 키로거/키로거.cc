#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	int N;
	cin >> N;

	string s;
	
	while (N--) {
		cin >> s;
		list <char> L;
		auto t = L.begin();
		
		for (auto c : s) {
			if (c == '<')
			{
				if (t != L.begin())
					t--;
			}

			else if (c == '>')
			{
				if (t != L.end())
					t++;
			}

			else if (c == '-')
			{
				if (t != L.begin()) {
					t--;
					t = L.erase(t);
				}
					
			}

			else {
				L.insert(t, c);
			}
		}
		
		for (auto i : L)
			cout << i;
		
		cout << '\n';


	}
}