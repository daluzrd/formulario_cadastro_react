import React from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import "./App.css";
import { Container } from "@material-ui/core";

function App() {
	return (
		<Container maxWidth="sm">
			<h1>Formulário de cadastro</h1>
			<FormularioCadastro />
		</Container>
	);
}

export default App;
