import { Component, input } from '@angular/core';
import { IChuleton } from '../../../models/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chuleton-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class ChuletonCardComponent {
  // Usamos el nuevo sistema de inputs de Angular (Signal Inputs)
  pedido = input.required<IChuleton>();
}