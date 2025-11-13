import { Component } from '@angular/core';

@Component({
  selector: 'ds-send-button',
  standalone: true,
  template: `
    <button
      class="send-button"
      type="button"
      aria-label="Enviar mensagem"
    >
      <svg
        class="send-button__icon"
        viewBox="0 0 55 55"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="55" height="55" rx="27.5" fill="white" />
        <path
          d="M36.4844 15.4668C38.1445 14.4902 40.2441 15.9062 39.9512 17.8594L37.0703 36.7559C36.9238 37.4883 36.5332 38.0742 35.8984 38.4648C35.5078 38.6602 35.1172 38.7578 34.7266 38.7578C34.4336 38.7578 34.1406 38.709 33.8477 38.5625L28.3789 36.3164L26.2305 39.1973C24.9121 41.0039 22.0312 40.0762 22.0312 37.7812V33.6797L16.416 31.3848C14.6094 30.6523 14.4629 28.1621 16.1719 27.1855L36.4844 15.4668ZM24.375 37.7812L26.1328 35.3887L24.375 34.6562V37.7812ZM34.7266 36.4141L37.6562 17.4688L17.3438 29.1875L22.5684 31.3848L32.9199 22.4004C33.6035 21.7656 34.5801 22.6445 34.0918 23.4258L27.207 33.2891L34.7266 36.4141Z"
          fill="#432E65"
        />
      </svg>
    </button>
  `,
  styleUrl: './send-button.css',
})
export class SendButtonComponent {}
