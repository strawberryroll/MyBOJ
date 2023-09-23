#include <bits/stdc++.h>
using namespace std;


const int MX = 1000005;
int dat[MX];
int pos;

void push(int val) {
	dat[pos++] = val;
}

void pop() {
	pos--;
}

int top() {
	return dat[pos - 1];
}


int main(void) {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int k;
	cin >> k;

	while (k--) {
		int num;
		cin >> num;
		if (num == 0) {
			pop();
		}
		else {
			push(num);
		}
	}
	
	int total = 0;

	for (int i = 0; i < pos; i++) {
		total += dat[i];
	}

	cout << total;
}