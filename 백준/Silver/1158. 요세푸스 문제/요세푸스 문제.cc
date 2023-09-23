#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	list<int> L;
	int N, K;
	cin >> N >> K;

	for (int i = 1; i <= N; i++)
		L.push_back(i);
	
	
	cout << "<";
	int index = 0;
	while (N>1) {
		index = (index + K - 1) % L.size();
		auto t = L.begin();
		for (int i = 0; i < index; i++)
			t++;
		cout << *t << ", ";
		t = L.erase(t);
		N--;
	}
	auto t = L.begin();
	cout << *t << ">";

}
