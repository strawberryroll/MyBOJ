#include <bits/stdc++.h>
using namespace std;


int main(void) {
	
	int N;
	cin >> N;

	

	for (int i = 0; i < N; i++) {
		for (int j = N-1; i < j; j--) {
			cout << " ";
		}
		for (int k = 1; k <= i+1; k++) {
			cout << "*";
		}
		
		cout << '\n';
	}
		
}
