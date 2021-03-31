import React, { useState } from "react";
import {
	Button,
	FormControlLabel,
	FormGroup,
	Switch,
	TextField,
} from "@material-ui/core";

function formataCpf(cpf) {
	cpf = cpf.replace(/\D/g, "");
	if (cpf.length > 3)
		cpf = cpf.substring(0, 3) + "." + cpf.substring(3, cpf.length); //000.000.000-00
	if (cpf.length > 7)
		cpf = cpf.substring(0, 7) + "." + cpf.substring(7, cpf.length);
	if (cpf.length > 11)
		cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, cpf.length);
	if (cpf.length > 14) cpf = cpf.substring(0, 14);
	return cpf;
}

function validaDigito10(cpf) {
	cpf = cpf.replace(/\D/g, "");
	let total = 0;
	let resto;
	if (cpf.length === 11) {
		for (let i = 0; i < 9; i++) total += Number.parseInt(cpf[i]) * (i + 1);
		resto = total % 11;

		if (resto === 10 || resto === 11) resto = 0;
		if (resto === Number.parseInt(cpf[9])) return true;
	}
	return false;
}

function validaDigito11(cpf) {
	cpf = cpf.replace(/\D/g, "");
	let total = 0;
	let resto;
	if (cpf.length === 11) {
		for (let i = 0; i < 10; i++) {
			let multiplicacao = Number.parseInt(cpf[i]) * i;
			total += multiplicacao;
		}
		resto = total % 11;

		if (resto === 10 || resto === 11) resto = 0;
		if (resto === Number.parseInt(cpf[10])) return true;
	}
	return false;
}

function validaCpf(cpf) {
	if (!validaDigito10(cpf)) return false;
	return validaDigito11(cpf);
}

function FormularioCadastro() {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCpf] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (validaCpf(cpf)) {
					console.log(nome);
					console.log(sobrenome);
					console.log(cpf);
					console.log(promocoes);
					console.log(novidades);
				} else console.log("CPF inválido!");
			}}
		>
			<TextField
				value={nome}
				onChange={(event) => {
					setNome(event.target.value);
				}}
				type="text"
				id="nome"
				label="Nome"
				variant="outlined"
				margin="normal"
				fullWidth
				required={true}
			/>
			<TextField
				value={sobrenome}
				onChange={(event) => {
					setSobrenome(event.target.value);
				}}
				type="text"
				id="sobrenome"
				label="Sobrenome"
				variant="outlined"
				margin="normal"
				fullWidth
			/>
			<TextField
				value={cpf}
				onChange={(event) => {
					let tempCpf = event.target.value;
					tempCpf = formataCpf(tempCpf);
					setCpf(tempCpf);
				}}
				type="text"
				id="cpf"
				label="CPF"
				variant="outlined"
				margin="normal"
				fullWidth
				required={true}
			/>
			<FormGroup row>
				<FormControlLabel
					value={promocoes}
					id="promocoes"
					label="Promoções"
					control={
						<Switch
							color="primary"
							onChange={(event) => {
								setPromocoes(event.target.checked);
							}}
							defaultChecked={true}
						/>
					}
				/>
				<FormControlLabel
					value={novidades}
					id="novidades"
					label="Novidades"
					control={
						<Switch
							color="primary"
							onChange={(event) => {
								setNovidades(event.target.checked);
							}}
							defaultChecked={true}
						/>
					}
				/>
				<Button type="submit" variant="contained" color="primary">
					Cadastrar
				</Button>
			</FormGroup>
		</form>
	);
}

export default FormularioCadastro;
