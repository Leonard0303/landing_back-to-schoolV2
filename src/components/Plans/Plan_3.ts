export function createPlanCard(): HTMLElement {
  const card = document.createElement('div')
  card.className = 'plan-card'
  card.innerHTML = `
    <span class="plan-card__tag">3 ПЛАН</span>
    <h3>ПЛАНШЕТ</h3>
    <ul class="plan-card__features">
      <li>Планшет</li>
    </ul>
    <div class="plan-card__icons">
      <span class="plan-card__icon">📱</span>
    </div>
    <p class="plan-card__price">5 590 <span>₸/мес</span></p>
    <button class="plan-card__button" type="button">ПОДКЛЮЧИТЬ</button>
  `
  return card
}
