const urlParams = new URLSearchParams(window.location.search);
const colors = urlParams.getAll('color')
const messages = urlParams.getAll('message')
const contentList = [{ color: 'default', message: 'Prioritizer' }, ...messages.map((message, index) => ({ color: colors[index], message }))]
let currentIndex = 0

function handleClick() {
  currentIndex = (currentIndex + 1) % contentList.length
  const currentContent = contentList[currentIndex]
  document.body.classList = currentContent.color || 'default'
  document.querySelector('.message').textContent = currentContent.message
}