import { createPlanCard as createPlan1 } from './Plan_1.ts'
import { createPlanCard as createPlan2 } from './Plan_2.ts'
import { createPlanCard as createPlan3 } from './Plan_3.ts'

export function createPlan(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'plan'
  section.className = 'block block--plan'
  section.innerHTML = `
    <div class="block__inner">
      <h2>Выберите свой план</h2>
      <div class="plan__grid"></div>
    </div>
  `

  const grid = section.querySelector<HTMLDivElement>('.plan__grid')!
  grid.append(createPlan1(), createPlan2(), createPlan3())

  return section
}
