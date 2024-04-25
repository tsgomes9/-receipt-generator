export default function SelectPayType(payType: number): string {
    switch (payType) {
      case 1:
        return 'Dinheiro';
      case 2:
        return 'Pix';
      case 3:
        return 'Cartão de Crédito';
      default:
        return 'Dinheiro';
    }
  }