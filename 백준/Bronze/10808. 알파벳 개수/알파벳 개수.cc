#include <iostream>
#include <cstring>
using namespace std;

int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	char s[105] = "";
	int total[30] = {0};
	int num = 0;
	cin >> s;


	int i = 0;
	while (s[i] != NULL) {
		num = s[i] - 'a';
		total[num]++;
		i++;
	}

	for (int i = 0; i < 26; i++)
		cout << total[i] << " ";

	

}