import React, { useEffect, useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	//declaracion de estados
	const [addTarea, setaddTarea] = useState("")
	const [lista, setLista] = useState([])
	const [boton, setBoton] = useState(false)

	//asignacion del evento onChange
	function handleLista(e) {
		setaddTarea(e.target.value)


	}
	function eliminar(index) {
		const arr = lista.filter((todo, index2) => {
			return index2 !== index

		})
		setLista(arr)
	}
	//asignacion del evento onSubmit

	function agregar(e) {
		e.preventDefault()
		setLista([...lista, addTarea])
		setaddTarea("")
	}
	useEffect(function () {
		console.log(lista);
	}, [lista])




	return (
		<div className="lista">
			<h1 className="h1 text-center">todos</h1>
		<div className="text-center w-50 mx-auto border border-light-subtle mt-4">
			
			<form onSubmit={agregar}>
				<div className="mb-3">

					<input type="text" value={addTarea} onChange={handleLista} className="form-control"  aria-describedby="emailHelp" />

				</div>

				<div className="mb-3">
					<ul className="list-group shadow p-1 mb-2 ">

						{
							lista.map((lista, index) => {
								return <li onMouseEnter={function () {

									setBoton(true)
								}} onMouseLeave={function () {
									setBoton(false)

								}} 
								className="list-group-item d-flex flex-row justify-content-between shadow p-2 mb-1">
									<p className="m-0 p-0">{lista}</p>
									{boton === true && <p className="text-danger opacity-50 m-o p-0" onClick={function () {
										eliminar(index)

									}}>X</p>}
								</li>
							})
						}


					</ul>
					<div className="items ms-4">
					
					{lista.length} <span>items restantes</span>
					</div>

				</div>

			</form>
		</div>
		</div>
	);
};

export default Home;
