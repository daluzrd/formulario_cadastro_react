 export function formataCpf(cpf) {
 	cpf = cpf.replace(/\D/g, "");
 	if (cpf.length > 3)
 		cpf = cpf.substring(0, 3) + "." + cpf.substring(3, cpf.length);
 	if (cpf.length > 7)
 		cpf = cpf.substring(0, 7) + "." + cpf.substring(7, cpf.length);
 	if (cpf.length > 11) 
 		cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, cpf.length);
 	if (cpf.length > 14) cpf = cpf.substring(0, 14);
  return cpf;
}

export function validaCpfQuantidadeDigitos(cpf) {
	cpf = cpf.replace(/\D/g, "");
	if (cpf.length === 11) return { valido: true, texto: "" };
	return { valido: false, texto: "CPF deve ter 11 dígitos!" };
}

export function calculaSomaCpf(cpf, contador, soma = 0) {
	if (contador === 0) return Number.parseInt(cpf[contador]) * (contador + soma);

	return (
		Number.parseInt(cpf[contador]) * (contador + soma) +
		calculaSomaCpf(cpf, contador - 1, soma)
	);
}

export function calculaRestoCpf(total) {
	const resto = total % 11;
	if (resto === 10 || resto === 11) return 0;
	return resto;
}

export function validaCpfDigito10(cpf) {
	cpf = cpf.replace(/\D/g, "");

	const total = calculaSomaCpf(cpf, 8, 1);
	const resto = calculaRestoCpf(total);

	if (resto === Number.parseInt(cpf[9])) return { valido: true, texto: "" };

	return { valido: false, texto: "CPF não é válido!" };
}

export function validaCpfDigito11(cpf) {
	cpf = cpf.replace(/\D/g, "");

	const total = calculaSomaCpf(cpf, 9);
	const resto = calculaRestoCpf(total);

	if (resto === Number.parseInt(cpf[10])) return { valido: true, texto: "" };

	return { valido: false, texto: "CPF não é válido!" };
}

export function validaCpf(cpf) {
	let tempErros = validaCpfQuantidadeDigitos(cpf);
	if (tempErros.valido) tempErros = validaCpfDigito10(cpf);
	if (tempErros.valido) tempErros = validaCpfDigito11(cpf);
	return tempErros;
}
