export default function FormatCPF(cpf: string): string {
    
    cpf = cpf.replace(/\D/g, '');
    
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }