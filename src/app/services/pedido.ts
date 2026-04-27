import { Injectable, signal, effect, computed } from '@angular/core';
import { IChuleton } from '../models/interfaces';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  // Signal principal con la lista de pedidos
  private _pedidos = signal<IChuleton[]>(this.getLocalStorage());

  // Signal computada: Se actualiza sola cuando cambia _pedidos
  totalPedidos = computed(() => 
    this._pedidos().reduce((acc, p) => acc + p.cantidad, 0)
  );

  constructor() {
    // Efecto: Cada vez que el signal cambia, guardamos en LocalStorage
    effect(() => {
      localStorage.setItem('pedidos_chuleton', JSON.stringify(this._pedidos()));
    });
  }

  get pedidos() { return this._pedidos.asReadonly(); }

  addPedido(pedido: IChuleton) {
    this._pedidos.update(prev => [...prev, pedido]);
  }

  private getLocalStorage(): IChuleton[] {
    const data = localStorage.getItem('pedidos_chuleton');
    return data ? JSON.parse(data) : [];
  }
}