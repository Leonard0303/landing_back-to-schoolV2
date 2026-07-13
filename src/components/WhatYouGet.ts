export function createWhatYouGet(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'what-you-get'
  section.className = 'block block--what-you-get'
  section.innerHTML = `
    <div class="block__inner">
      <h2>Что вы получаете</h2>
      <div class="wyg-row">
        <div class="wyg-item">
          <div class="wyg-icon"></div>
          <h4>Высокая скорость</h4>
          <p>Домашний интернет до 500 Мбит/с</p>
        </div>
        <div class="wyg-item">
          <div class="wyg-icon"></div>
          <h4>Современный планшет</h4>
          <p>Для учёбы, общения, просмотра видео и любимых приложений</p>
        </div>
        <div class="wyg-item">
          <div class="wyg-icon"></div>
          <h4>Телевидение TV+ kids</h4>
          <p>Детский контент — онлайн-кинотеатры и телеканалы</p>
        </div>
        <div class="wyg-item">
          <div class="wyg-icon"></div>
          <h4>Выгодные условия подключения</h4>
          <p>Специальная цена и быстрое оформление заявки.</p>
        </div>
      </div>

      <h2 class="wyg-subtitle">Подключиться очень просто!</h2>
      <div class="wyg-steps">
        <div class="wyg-step">
          <span class="wyg-step__num">1</span>
          <div class="wyg-icon"></div>
          <p>Оставьте заявку</p>
        </div>
        <span class="wyg-arrow">&rarr;</span>
        <div class="wyg-step">
          <span class="wyg-step__num">2</span>
          <div class="wyg-icon"></div>
          <p>Менеджер свяжется с вами</p>
        </div>
        <span class="wyg-arrow">&rarr;</span>
        <div class="wyg-step">
          <span class="wyg-step__num">3</span>
          <div class="wyg-icon"></div>
          <p>Выберите удобную дату подключения</p>
        </div>
        <span class="wyg-arrow">&rarr;</span>
        <div class="wyg-step">
          <span class="wyg-step__num">4</span>
          <div class="wyg-icon"></div>
          <p>Получайте максимум от пакета!</p>
        </div>
      </div>
    </div>
  `
  return section
}
