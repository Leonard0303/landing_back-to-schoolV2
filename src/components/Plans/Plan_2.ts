export function createPlanCard(): HTMLElement {
  const card = document.createElement('div')
  card.className = 'plan-card'
  card.innerHTML = `
    <span class="plan-card__tag">2 ПЛАН</span>
    <h3>ПЛАНШЕТ + SIM</h3>
    <ul class="plan-card__features">
      <li>Планшет</li>
      <li>1 SIM-карта</li>
    </ul>
    <div class="plan-card__icons">
      <span class="plan-card__icon">📱</span>
      <span class="plan-card__icon">📝</span>
    </div>
    <p class="plan-card__price">6 990 <span>₸/мес</span></p>
    <button class="plan-card__button" type="button">ПОДКЛЮЧИТЬ</button>
  `
  return card
}
