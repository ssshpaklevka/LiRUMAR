/**
 * Функция для экранирования специальных символов в сообщении.
 * Эта функция добавляет обратный слэш перед символами, которые имеют специальное значение
 * (например, * для жирного текста, . для точек, - для дефисов и — для длинных тире).
 *
 * @param {string} message
 * @returns {string}
 */
function escapeMessage(message: string): string {
  const specialCharacters = ['.', '-', '!', '+', '[', ']', '(', ')', '='];

  let escapedMessage = message;
  specialCharacters.forEach((char) => {
    const regex = new RegExp(`\\${char}`, 'g');
    escapedMessage = escapedMessage.replace(regex, `\\${char}`);
  });

  return escapedMessage;
}
export default escapeMessage;
