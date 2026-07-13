export function createTablet(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'tablet'
  section.className = 'block block--tablet'
  section.innerHTML = `
    <div class="block__inner">
      <div class="tablet-promo">
        <h2 class="tablet-promo__title">Подготовьтесь к новому учебному году уже сегодня!</h2>
        <p class="tablet-promo__text">Оставьте заявку. Мы перезвоним и поможем выбрать оптимальный план.</p>
        <button class="tablet-promo__button" type="button">ПОДКЛЮЧИТЬ СЕЙЧАС</button>
        <p class="tablet-promo__note">Продолжая действие, вы принимаете условия<br><a href="#">Политики конфиденциальности</a></p>
      </div>
      <div class="tablet-promo__space"></div>
    </div>
  `
  return section
}
