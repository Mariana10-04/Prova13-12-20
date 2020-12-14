import React from 'react'
import './cadastro.css'

function msg() {
    alert("Agora foi");
  }

function cadastro() {
    return(
    <>
       <form action="/" method="post" id="casaDasto">

            <div>
                <label>
                    Nome: 
                    <input type="text" />
                </label>
            </div>

            <div>
				<label>
                    Email: 
                    <input type="text" />
                </label>
            </div>

            <div>
				<label>
                    Tel: 
                    <input type="text" />
                </label>
            </div>

            <div>
				<label>
                    Data de nascimento: 
                    <input type="text"/>
                </label>
            </div>

            <div>

            <button onClick={msg}>
                Inscrever-se
            </button>

            </div>
            
</form>
    </>
    );
}
export default cadastro;
