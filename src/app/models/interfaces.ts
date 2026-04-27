export interface IChuleton {
  id?: string; // Útil para identificar cada pedido
  tipo: string;
  origen: string;
  peso: number;
  maduracion: number;
  cantidad: number;
}