#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(const string &str) {
    int left = 0;
    int right = str.length() - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

int main() {
    string inputString;
    cout << "Masukkan string untuk dicek: ";
    cin >> inputString;

    if (isPalindrome(inputString)) {
        cout << "\"" << inputString << "\" adalah palindrom!" << endl;
    } else {
        cout << "\"" << inputString << "\" bukan palindrom." << endl;
    }

    return 0;
}
