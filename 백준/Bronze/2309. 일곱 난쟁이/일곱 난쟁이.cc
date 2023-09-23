#include <iostream>
#include <algorithm>

using namespace std;

int main() {
	int arr[9] = { 0 };
	int total[7] = { 0 };
	int sum = 0;
	int tmp_sum = sum;
	int tmp1; int tmp2;

	for (int i = 0; i < 9; i++) {
		cin >> arr[i];
		sum += arr[i];
	}

	sort(arr, arr + 9);
	
	tmp_sum = sum;
	for (int i = 0; i < 8; i++) {
		for (int j = i + 1; j < 9; j++) {
			tmp1 = i; tmp2 = j;
			tmp_sum -= arr[tmp1];
			tmp_sum -= arr[tmp2];
				
			if (tmp_sum == 100) {
				for (int i = 0; i < 9; i++) {
					if (i != tmp1 && i != tmp2)
						cout << arr[i] << "\n";
				}
				return 0;

				
				
				
			}
			tmp_sum = sum;
		}
	}
}