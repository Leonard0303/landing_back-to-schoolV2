export function createHeader(): HTMLElement {
  const header = document.createElement('header')
  header.className = 'block block--header'
  header.innerHTML = `
    <div class="block__inner">
      <div class="header-promo">
        <span class="header-promo__tag">BACK TO SCHOOL</span>
        <h1 class="header-promo__title">УЧИСЬ. ОБЩАЙСЯ.<br><span>ДОСТИГАЙ!</span></h1>
        <p class="header-promo__text">Интернет, мобильная связь, ТВ и планшет — всё для успешного старта нового учебного года.</p>
        <button class="header-promo__button" type="button">ПОДКЛЮЧИТЬ СЕЙЧАС</button>
        <p class="header-promo__note">Менеджер свяжется с вами в ближайшее время</p>
      </div>
    </div>
  `
  return header
}
