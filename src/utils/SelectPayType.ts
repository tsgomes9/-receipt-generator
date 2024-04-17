export default function SelectPayType(payType: number): string {
    switch (payType) {
      case 1:
        return 'Dinheiro';
      case 2:
        return 'Pix';
      case 3:
        return 'Cartão';
      default:
        return 'Forma de pagamento não especificada';
    }
  }