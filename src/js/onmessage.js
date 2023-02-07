export default function onMessage(e) {
  const data = JSON.parse(e.data);
  if (data.type === 'registration') {
    if (data.success) {
      this.popupInput.value = '';
      this.hidePopup();
      this.chatInput.focus();
      this.drawListUsers(data.activeUsers);
      this.drawListMessages(data.messages);
    } else if (!data.error) {
      this.changePlaceholder('Это имя уже занято');
    } else {
      this.changePlaceholder('Ошибка сервера');
      console.log(data.error);
    }
  }
  if (data.type === 'message') {
    if (data.success) {
      this.drawListMessages(data.messages);
    } else {
      this.showError();
      console.log(data.error);
    }
  }
  if (data.type === 'update') {
    if (data.success) {
      this.drawListUsers(data.activeUsers);
    } else {
      this.showError();
      console.log(data.error);
    }
  }
}
