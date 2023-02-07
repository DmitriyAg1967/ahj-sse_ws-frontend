export default function onChatSubmit(evt) {
  evt.preventDefault();
  if (this.chatInput.value !== '') {
    const data = JSON.stringify({
      type: 'message',
      content: this.chatInput.value,
      name: this.user,
    });
    this.ws.send(data);
    this.chatInput.value = '';
    console.log('Сообщение отправлено');
  }
}
