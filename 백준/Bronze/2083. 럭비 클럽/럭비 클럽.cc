#include <bits/stdc++.h>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	string name;
	int age, weight;
	
	while (true) {
		cin >> name >> age >> weight;

		if (name != "#") {
			if (age > 17 || weight >= 80)
				cout << name << " " << "Senior" << '\n';
			else
				cout << name << " " << "Junior" << '\n';

		}

		else
			exit(0);


	}
	
}