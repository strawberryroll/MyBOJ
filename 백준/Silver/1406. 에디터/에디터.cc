#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	string N;
	cin >> N;

	list<char> L;
	for (auto c : N)
		L.push_back(c);
	
	auto cursor = L.end();

	
	int M;
	cin >> M;

	char com;
	char chr;

	for (int i = 0; i < M; i++) {
		cin >> com;


		switch (com) {
		case 'L':
			if (cursor != L.begin())
				cursor--;
			break;
		case 'D':
			if (cursor != L.end())
				cursor++;
			break;
		case 'B':
			if (cursor != L.begin()) {
				cursor--;
				cursor = L.erase(cursor);
			}
			break;
		case 'P':
			cin >> chr;
			L.insert(cursor, chr);
			break;
		}
	}

	for (auto i : L) cout << i;
	
}