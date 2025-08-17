const display = document.getElementById('display');
let currentInput = '';
let resultShown = false;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === '=') {
      try {
        const formattedInput = currentInput
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-');

        const result = eval(formattedInput);
        display.textContent = result;
        currentInput = result.toString();
        resultShown = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else if (value === '+/-') {
      if (currentInput !== '') {
        if (currentInput.startsWith('-')) {
          currentInput = currentInput.substring(1);
        } else {
          currentInput = '-' + currentInput;
        }
        display.textContent = currentInput;
      }
    } else if (value === '%') {
      currentInput = (parseFloat(currentInput) / 100).toString();
      display.textContent = currentInput;
    } else if (value === '()') {
      if (!currentInput.includes('(')) {
        currentInput += '(';
      } else if (currentInput.includes('(') && !currentInput.includes(')')) {
        currentInput += ')';
      }
      display.textContent = currentInput;
    } else {
      if (resultShown && !isNaN(value)) {
        currentInput = value;
        resultShown = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});

// ✅ Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
    if (resultShown && !isNaN(key)) {
      currentInput = key;
      resultShown = false;
    } else {
      currentInput += key;
    }
    display.textContent = currentInput;
  } else if (key === 'Enter' || key === '=') {
    try {
      const formattedInput = currentInput
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-');

      const result = eval(formattedInput);
      display.textContent = result;
      currentInput = result.toString();
      resultShown = true;
    } catch {
      display.textContent = 'Error';
      currentInput = '';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
  } else if (key.toLowerCase() === 'c') {
    currentInput = '';
    display.textContent = '0';
  }
});
