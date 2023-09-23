#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int a, b, c;
	int longest = 0;
	int sum = 0;
	int rest = 0;

	cin >> a >> b >> c;
	sum = a + b + c;
	longest = max(a, max(b, c));
	rest = sum - longest;

	while (rest <= longest) 
		longest -= 1;
	
	cout << rest + longest;

	

	
}