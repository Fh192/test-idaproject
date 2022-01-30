export function createAlert(message) {
  const app = document.getElementById('app');
  
  const alert = document.createElement('div');
  alert.classList.add('alert');

  const alertMessage = document.createElement('span');
  alertMessage.innerHTML = message;

  alert.appendChild(alertMessage);

  setTimeout(() => {
    deleteAlert(alert);
  }, 1000);

  app.appendChild(alert);

  return alert;
}

export function deleteAlert(alert) {
  alert.classList.add('alert__close');

  setTimeout(() => {
    alert.remove();
  }, 3000);
}
