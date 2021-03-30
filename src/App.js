import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import "./App.css";
import { Container } from "@material-ui/core";

class App extends Component {
	render() {
		return (
			<Container maxWidth="sm">
				<h1>Formulário de cadastro</h1>
				<FormularioCadastro />
			</Container>
		);
	}
}

export default App;
