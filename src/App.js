import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import "./App.css";
import { Container } from "@material-ui/core";

function cadastrar(dados) {
	console.log(dados);
}

function App() {
	return (
		<Container maxWidth="sm">
			<h1>Formulário de cadastro</h1>
			<FormularioCadastro cadastrar={cadastrar} />
		</Container>
	);
}

export default App;
