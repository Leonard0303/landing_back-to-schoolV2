import './style.css'
import { createHeader } from './components/Header.ts'
import { createPlan } from './components/Plans/Plan_general.ts'
import { createWhatYouGet } from './components/WhatYouGet.ts'
import { createTablet } from './components/Tablet.ts'
import { createFooter } from './components/Footer.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(
  createHeader(),
  createPlan(),
  createWhatYouGet(),
  createTablet(),
  createFooter(),
)
