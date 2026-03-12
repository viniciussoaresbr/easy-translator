import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'switch-svg',
  template: `
    <svg
      (click)="switch()"
      class="cursor-pointer transition-transform hover:scale-110 active:scale-95"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 7L20 7M20 7L16 3M20 7L16 11M16 17L4 17M4 17L8 21M4 17L8 13"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  `,
})
export class SwitchSvgComponent implements OnInit {
  @Output() switchEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  switch() {
    this.switchEvent.emit();
  }
}
