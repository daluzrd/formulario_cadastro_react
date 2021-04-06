import {
	Button,
	TextField
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as Cep from "../../data/cep.js";
import UfList from "../../data/uf.js";

function DadosEntrega({ cadastrar }) {
	const [cep, setCep] = useState("");
	const [endereco, setEndereco] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [uf, setUf] = useState("");
	const [erros, setErros] = useState({ cep: { valido: true, texto: "" } });
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (isSubmitted && erros.cep.valido)
			cadastrar({ cep, endereco, numero, complemento, bairro, cidade, uf });
		else setIsSubmitted(false);
	}, [isSubmitted]); //eslint-disable-line

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				setErros(Cep.validaCep(cep));
				setIsSubmitted(true);
			}}
		>
			<TextField
				id="cep"
				label="CEP"
				type="text"
				variant="outlined"
				margin="normal"
				placeholder="_____-__"
				error={!erros.cep.valido}
				helperText={erros.cep.texto}
				required
				value={cep}
				onChange={(event) => {
					setCep(Cep.formataCep(event.target.value));
				}}
				onBlur={(event) => {
					setErros(Cep.validaCep(cep));
				}}
			/>
			<TextField
				id="endereco"
				label="Endereço"
				type="text"
				variant="outlined"
				margin="normal"
				fullWidth
				required
				value={endereco}
				onChange={(event) => {
					setEndereco(event.target.value);
				}}
			/>
			<TextField
				id="numero"
				label="Número"
				type="text"
				variant="outlined"
				margin="normal"
				required
				value={numero}
				onChange={(event) => {
					setNumero(event.target.value.replace(/\D/g, ""));
				}}
			/>
			<TextField
				id="complemento"
				label="Complemento"
				type="text"
				variant="outlined"
				margin="normal"
				value={complemento}
				onChange={(event) => {
					setComplemento(event.target.value);
				}}
			/>
			<TextField
				id="bairro"
				label="Bairro"
				type="text"
				variant="outlined"
				margin="normal"
				required
				value={bairro}
				onChange={(event) => {
					setBairro(event.target.value);
				}}
			/>
			<TextField
				id="cidade"
				label="Cidade"
				type="text"
				variant="outlined"
				margin="normal"
				required
				value={cidade}
				onChange={(event) => {
					setCidade(event.target.value);
				}}
			/>
			<TextField
				id="uf"
				label="UF"
				type="text"
				variant="outlined"
				margin="normal"
				required
				value={uf}
				onChange={(event) => setUf(event.target.value)}
			/>
			{/* <FormControl variant="outlined">
				<InputLabel id="demo-simple-select-outlined-label">UF</InputLabel>
				<Select
					id="uf"
					margin="normal"
					id="outlined-age-native-simple"
				>
					{UfList.map((value) => {
						return <MenuItem value={value}>{value}</MenuItem>;
					})}
				</Select>
			</FormControl> */}
			<Button type="submit" variant="contained" color="primary" fullWidth>
				Finalizar Cadastro
			</Button>
		</form>
	);
}

export default DadosEntrega;
