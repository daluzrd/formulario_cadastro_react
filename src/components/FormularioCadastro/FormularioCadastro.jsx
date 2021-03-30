import React from "react";
import {
	Button,
	FormControlLabel,
	FormGroup,
	Switch,
	TextField,
} from "@material-ui/core";

function FormularioCadastro() {
	let nome = "";
	let sobrenome = "";
	let cpf = "";
	let promocoes = true;
	let novidades = true;

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				console.log(nome);
				console.log(sobrenome);
				console.log(cpf);
				console.log(promocoes);
				console.log(novidades);
			}}
		>
			<TextField
				onChange={(event) => {
					nome = event.target.value;
				}}
				type="text"
				id="nome"
				label="Nome"
				variant="outlined"
				margin="normal"
				fullWidth
			/>
			<TextField
				onChange={(event) => {
					sobrenome = event.target.value;
				}}
				type="text"
				id="sobrenome"
				label="Sobrenome"
				variant="outlined"
				margin="normal"
				fullWidth
			/>
			<TextField
				onChange={(event) => {
					cpf = event.target.value;
				}}
				type="text"
				id="cpf"
				label="CPF"
				variant="outlined"
				margin="normal"
				fullWidth
			/>
			<FormGroup row>
				<FormControlLabel
					id="promocoes"
					label="Promoções"
					control={
						<Switch
							color="primary"
							onChange={(event) => {
								promocoes = event.target.value;
							}}
							defaultChecked={true}
						/>
					}
				/>
				<FormControlLabel
					id="novidades"
					label="Novidades"
					control={
						<Switch
							color="primary"
							onChange={(event) => {
								novidades = event.target.value;
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
