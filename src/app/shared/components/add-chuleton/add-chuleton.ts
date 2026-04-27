import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PedidoService } from '../../../services/pedido';
import { IChuleton } from '../../../models/interfaces';

@Component({
  selector: 'app-add-chuleton',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-chuleton.html'
})
export class AddChuletonComponent {
  private fb = inject(FormBuilder);
  private pedidoService = inject(PedidoService);

  // Definimos el formulario con validaciones básicas
  public chuletonForm = this.fb.group({
    tipo: ['', [Validators.required]],
    origen: ['', [Validators.required]],
    peso: [1, [Validators.required, Validators.min(0.1)]],
    maduracion: [30, [Validators.required]],
    cantidad: [1, [Validators.required, Validators.min(1)]]
  });

  onSubmit() {
    if (this.chuletonForm.valid) {
      // Creamos el objeto con los datos del formulario
      const nuevoPedido = this.chuletonForm.value as IChuleton;
      
      // Lo mandamos al servicio (Singleton)
      this.pedidoService.addPedido(nuevoPedido);
      
      // Limpiamos el formulario para el siguiente
      this.chuletonForm.reset({ peso: 1, maduracion: 30, cantidad: 1 });
    }
  }
}