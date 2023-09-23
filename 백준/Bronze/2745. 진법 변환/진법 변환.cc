#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	string N;
	int B, result = 0;
	int num[30] = {};

	cin >> N >> B;

	for (int i = 0; i < 26; i++)
		num[i] = 10 + i;
	
	for (int i = 0; i < N.size(); i++) {
		if (int(N[i] - '0') < 10)
			result += int(N[i] - '0') * pow(B, N.size()-1-i);
		else
			result += num[N[i] - 'A'] * pow(B, N.size()-1-i);
	}
	
	cout << result;
	

	

}