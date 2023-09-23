#include <iostream>
using namespace std;

int main() {
	long long A, B;
	long long task_1;

	cin >> A >> B;

	if (A > B) {
		task_1 = A - B - 1;
		cout << task_1 << endl;

		for (long long i = B+1; i < A; i++) 
			cout << i << " ";
		
	}
		
	else if (B > A) {
		task_1 = B - A - 1;
		cout << task_1 << endl;

		for (long long i = A+1; i < B; i++)
			cout << i << " ";

	}

	else {
		task_1 = 0;
		cout << task_1 << endl;

	}
		

	

	
}