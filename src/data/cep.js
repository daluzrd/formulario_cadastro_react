export function formataCep(cep) {
	cep = cep.replace(/\D/g, "");
	if (cep.length > 5) {
		cep = cep.substring(0, 5) + "-" + cep.substring(5, cep.length);
	}
	if (cep.length > 9) {
		cep = cep.substring(0, 9);
	}
	return cep;
}

export function validaCep(cep) {
	cep = cep.replace(/\D/g, "");
	if (cep.length === 8) return { cep: { valido: true, texto: false } };
	else return { cep: { valido: false, texto: "CEP deve ter 8 dígitos" } };
}
