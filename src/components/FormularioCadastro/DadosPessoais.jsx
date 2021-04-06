import React, { useEffect, useState } from "react";
import {
	Button,
	FormControlLabel,
	FormGroup,
	Switch,
	TextField,
} from "@material-ui/core";
import * as Cpf from "../../data/cpf.js";


function DadosPessoais({ cadastrar }) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCpf] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if(isSubmitted && erros.cpf.valido){
			cadastrar({
				nome,
				sobrenome,
				cpf,
				promocoes,
				novidades,
			});
		}
		else 
			setIsSubmitted(false);
	},[isSubmitted]);//eslint-disable-line

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();				
				setErros({ cpf: Cpf.validaCpf(cpf) });
				setIsSubmitted(true);
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
					setCpf(Cpf.formataCpf(event.target.value));
				}}
				onBlur={() => {
					setErros({ cpf: Cpf.validaCpf(cpf) });
				}}
				error={!erros.cpf.valido}
				helperText={erros.cpf.texto}
				type="text"
				id="cpf"
				label="CPF"
				variant="outlined"
				margin="normal"
				fullWidth
				placeholder="___.___.___-__"
				required={true}
			/>
			<FormGroup row>
				<FormControlLabel
					id="promocoes"
					label="Promoções"
					control={
						<Switch
							color="primary"
							checked={promocoes}
							onChange={(event) => {
								setPromocoes(event.target.checked);
							}}
						/>
					}
				/>
				<FormControlLabel
					id="novidades"
					label="Novidades"
					control={
						<Switch
							color="primary"
							checked={novidades}
							onChange={(event) => {
								setNovidades(event.target.checked);
							}}
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

export default DadosPessoais;
