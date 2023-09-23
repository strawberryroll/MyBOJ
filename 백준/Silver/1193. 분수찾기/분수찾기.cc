#include <iostream>
using namespace std;

int main() {
	int line = 1;
	int i = 1;
	int n;
	
	cin >> n;

	while (n > i) {
		n -= i;
		i += 1;
		line += 1;
	}

	if (line % 2 == 0)
		cout << n << "/" << line + 1 - n;
	else
		cout << line + 1 - n << "/" << n;




}