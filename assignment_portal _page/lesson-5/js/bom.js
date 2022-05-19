const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
  const newChap = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listButton = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = newChap;
  listItem.appendChild(listButton);
  listButton.textContent = 'x';
  list.appendChild(listItem);

  listButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});

