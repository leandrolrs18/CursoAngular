import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
// criar a função a ser vinculada via event binding a partir da view

public exibirAlerta(): void {
  console.log('Event disparado..')
  alert('Event disparado..')
}
}
