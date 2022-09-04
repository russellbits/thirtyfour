import './style.scss'
import typescriptLogo from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="board">
    <!-- row 1 -->
    <div><span class="emoji">&#x1F692;</span></div>
    <div><span class="emoji">&#x1F68C;</span></div>
    <div><span class="emoji">&#x1F684;</span></div>
    <!-- row 2 -->
    <div><span class="emoji">&#x1F695;</span></div>
    <div><span class="emoji">&#x1F699;</span></div>
    <div><span class="emoji">&#x1F69A;</span></div>
    <!-- row 3 -->
    <div><span class="emoji">&#x1F680;</span></div>
    <div><span class="emoji">&#x1F683;</span></div>
    <div><span class="emoji">&#x1F693;</span></div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
