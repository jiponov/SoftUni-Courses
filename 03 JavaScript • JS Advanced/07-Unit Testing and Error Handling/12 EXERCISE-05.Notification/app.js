function notify(message) {  // 100/100

  let notificationElement = document.getElementById('notification');
  notificationElement.innerText = message;              // OR: notificationElement.textContent = message;
  notificationElement.style.display = 'block';

  // setTimeout(function(){
  // notificationElement.style.display = 'none';
  // }, 2000);

  notificationElement.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  });
}