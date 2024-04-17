export default function NumberToText(numero: number): string {
    const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const especiais = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const dezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const centenas = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

    if (numero === 0) {
        return 'zero';
    } else if (numero < 10) {
        return unidades[numero];
    } else if (numero < 20) {
        return especiais[numero - 10];
    } else if (numero < 100) {
        const dezena = dezenas[Math.floor(numero / 10) - 2];
        const unidade = numero % 10 !== 0 ? unidades[numero % 10] : '';
        return unidade ? `${dezena} e ${unidade}` : dezena;
    } else if (numero < 1000) {
        const centena = centenas[Math.floor(numero / 100) - 1];
        const dezenaUnidade = numero % 100;
        return dezenaUnidade !== 0 ? `${centena} e ${NumberToText(dezenaUnidade)}` : centena;
    } else if (numero < 1000000) {
        const milhar = Math.floor(numero / 1000);
        const resto = numero % 1000;
        const milharPorExtenso = milhar === 1 ? 'mil' : NumberToText(milhar) + ' mil';
        const restoPorExtenso = resto !== 0 ? ' e ' + NumberToText(resto) : '';
        return milharPorExtenso + restoPorExtenso;
    } else {
        return 'Número fora do intervalo de conversão.';
    }
}
