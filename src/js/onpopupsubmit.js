export default function onPopupSubmit(evt) {
  evt.preventDefault();
  if (this.popupInput.validity.valid) {
    this.popupInput.className = 'popup__input';
    this.popupInput.placeholder = 'Введите псевдоним';
    this.user = this.popupInput.value;
    console.log(this.user);
    this.ws = new WebSocket(this.baseURL);
    this.ws.binaryType = 'blob';

    this.ws.addEventListener('open', () => {
      const data = JSON.stringify({ type: 'registration', name: this.user });
      this.ws.send(data);
      console.log('connected');
    });

    this.ws.addEventListener('close', (e) => {
      console.log('connection closed', e);
    });

    this.ws.addEventListener('error', (e) => {
      console.log('error:', e);
    });

    this.ws.addEventListener('message', this.onMessage);
  } else {
    this.changePlaceholder('Заполните пожалуйста это поле');
  }
}
