#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int A, B, C;
	cin >> A >> B >> C;
	int mul = A * B * C;

	string s = to_string(mul);

	int freq[15] = {};

	for (char ch : s) 
		freq[ch - '0']++;
	
	for (int i = 0; i < 10; i++)
		cout << freq[i] << '\n';
	
}