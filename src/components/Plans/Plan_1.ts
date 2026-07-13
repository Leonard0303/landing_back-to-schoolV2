export function createPlanCard(): HTMLElement {
  const card = document.createElement('div')
  card.className = 'plan-card'
  card.innerHTML = `
    <span class="plan-card__tag">1 ПЛАН</span>
    <h3>ВСЁ ВКЛЮЧЕНО</h3>
    <ul class="plan-card__features">
      <li>Интернет 500 Мбит/с</li>
      <li>SIM-карта</li>
      <li>Планшет</li>
      <li>TV+</li>
    </ul>
    <div class="plan-card__icons">
      <span class="plan-card__icon">🌐</span>
      <span class="plan-card__icon">📝</span>
      <span class="plan-card__icon">📱</span>
      <span class="plan-card__icon">📺</span>
    </div>
    <p class="plan-card__price">11 990 <span>₸/мес</span></p>
    <button class="plan-card__button" type="button">ПОДКЛЮЧИТЬ</button>
  `
  return card
}
