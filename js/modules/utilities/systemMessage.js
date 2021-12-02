export function systemMessage(type, content, container) {
  const element = document.querySelector(container);

  element.innerHTML = `<div class="message ${type}">${content}</div>`
}