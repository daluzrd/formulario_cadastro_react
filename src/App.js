import React, { Component, Fragment } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>Formulário de cadastro</h1>
				<FormularioCadastro />
			</Fragment>
		);
	}
}

export default App;
