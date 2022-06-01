import React from "react";

const FormNewsletter = () => {
  return (
    <div style={{ margin: "5%" }}>
      <p>Se inscreva na newsletter</p>
      <div style={{ display: "flex" }}>
        <p>Receba no seu e-mail nossas novidades e cupons de desconto</p>
        <form>
          <input type="text" name="name" placeholder="Digite seu nome" />
          <input type="text" name="email" placeholder="Digite seu e-mail" />
          <input
            type="text"
            name="videogame"
            placeholder="Qual seu videogame?"
          />
          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default FormNewsletter;
