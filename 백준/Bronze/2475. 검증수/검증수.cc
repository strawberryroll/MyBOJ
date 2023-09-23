#include <bits/stdc++.h>
using namespace std;


int main(void) {

	int N;
	int sum = 0;
	for (int i = 0; i < 5; i++) {
		cin >> N;
		sum += pow(N,2);	
	}
	cout << sum % 10;
		
}
