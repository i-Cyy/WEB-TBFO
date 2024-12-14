function startSimulation() {
    const inputString = document.getElementById('inputString').value;
    const result = document.getElementById('result');
    const tapeContainer = document.getElementById('tape');
    const pointerContainer = document.getElementById('pointer');

    if (!inputString) {
        result.textContent = "Please enter a string!";
        result.style.color = 'red';
        return;
    }

    let turingTape = inputString.split('');
    let left = 0;
    let right = turingTape.length - 1;
    let isPalindrome = true;

    tapeContainer.textContent = turingTape.join(' ');
    pointerContainer.textContent = ' '.repeat(left * 2) + '^' + ' '.repeat((right - left) * 2) + '^';
    result.textContent = "Checking...";
    result.style.color = 'black';

    function step() {
        if (left >= right) {
            if (isPalindrome) {
                result.textContent = `\"${inputString}\" is a palindrome!`;
                result.style.color = 'green';
            } else {
                result.textContent = `\"${inputString}\" is not a palindrome.`;
                result.style.color = 'red';
            }
            return;
        }

        if (turingTape[left] !== turingTape[right]) {
            isPalindrome = false;
        }

        // Highlighting mismatched or matched characters
        const tapeHighlight = turingTape.map((char, index) => {
            if (index === left || index === right) {
                return turingTape[left] === turingTape[right] ? `<span style='color:green;'>${char}</span>` : `<span style='color:red;'>${char}</span>`;
            }
            return char;
        });

        tapeContainer.innerHTML = tapeHighlight.join(' ');
        pointerContainer.textContent = ' '.repeat(left * 2) + '^' + ' '.repeat((right - left) * 2) + '^';

        left++;
        right--;

        setTimeout(step, 1000);
    }

    step();
}
