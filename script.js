window.onload = () => {
  
  const input = document.querySelector('.input');
  const deleteButton = document.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    const value = input.value.trim();
    input.value = value.substring(0, value.length - 1);
  });
  
}