window.onload = () => {
  
  function sweetalert(icon, title, text, position) {
    swal.fire({
      icon: icon,
      title: title,
      text: text,
      position: position
    });
  }
  
  function deleteCharacter() {
    const text = document.querySelector('.text');
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
      const value = text.textContent.length;
      text.textContent = text.textContent.substring(0, value - 1);
      if (value == 1) sweetalert('success', 'Success', 'habis :)', 'center');
    });
  }
  
  deleteCharacter();
  
}