
/*
window.Square = {
	view : function(vnode){
		let { id, randomId } = vnode.attrs

		let classList = (id === randomId) ? "square mole" : "square"

		return m("div", {class: classList, id: id}, "")
	}
}
*/

window.Square = function(vnode){
	let { id, randomId } = vnode.attrs
	let classList = (id === randomId) ? "square mole" : "square"

	return {
		view: function(){
			return m("div", {class: classList, id: id}, "")
		}
	}
}

window.Grid = function(){

  const model = WhacAMole.model()

	const arr = [1,2,3,4,5,6,7,8,9]

  // model.randomPosition = Math.floor(Math.random() * 9) + 1

	WhacAMole.moveMole(model) // call setInterval

  // console.log("from Grid -> " + model.randomPosition)

	return {
		view: function(){
			return m("div", [

				m("p"),
				m("button", {
						 onclick(){
							WhacAMole.reset(model)
						}
				}, "Reset"),

				m("p"),
				m("label", WhacAMole.getResult(model)),

				m("p"),
				m("label", WhacAMole.getTimeLeft(model)),

				// m(Square),

				m("p"),
				m("div", {class: "grid"}, [ 

				// m.redraw not work in child component

				/*
				arr.map(function(id){
						// return m(Square)
						return m(Square, {
							id: id,
							randomId: model.randomPosition
						})
				 })
				 */

				 arr.map(function(id){
					return m("div", {
						class: (id === model.randomPosition) ? "square mole" : "square" 
						, id: id
						, onclick(){
							// alert("is clicked")
							if (id === model.randomPosition)
								model.result++ 
						}
						}, "")
				 })
				]),


			])
		},
		
		onremove(){
			WhacAMole.stop(model)
		},
	}
}

// m.mount(document.getElementById('app'), Square)
//m.mount(document.getElementById('app'), Grid)
