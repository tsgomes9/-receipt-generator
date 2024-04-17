export default function FormatDate(date: string): string {
    // Separar a data em ano, mês e dia
    const [ano, mes, dia] = date.split('-') ;

    // Array de meses por extenso
    const mesesPorExtenso = [
        'janeiro', 'fevereiro', 'março', 'abril',
        'maio', 'junho', 'julho', 'agosto', 
        'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    // Obter o mês por extenso a partir do número do mês
    const mesPorExtenso = mesesPorExtenso[parseInt(mes) - 1];

    // Retornar a data formatada
    return `${dia} de ${mesPorExtenso} de ${ano}`;
}