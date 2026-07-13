export function createFooter(): HTMLElement {
  const footer = document.createElement('footer')
  footer.id = 'footer'
  footer.className = 'block block--footer'
  footer.innerHTML = `
    <div class="block__inner">
      <p>&copy; ${new Date().getFullYear()} MySite. Все права защищены.</p>
    </div>
  `
  return footer
}
