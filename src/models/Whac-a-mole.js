window.WhacAMole = {}

WhacAMole.model = function(){
	return {
		result: 0,
		randomPosition: 0,
		currentTime: 60,
		interval: null,
	}
}

WhacAMole.getResult = function(model){
	return "Your score is " + model.result
}

WhacAMole.getRandomPosition = function(model){

	model.randomPosition = Math.floor(Math.random() * 9) + 1 
	model.currentTime--

	if (model.currentTime === 0){
		clearInterval(model.interval)
		alert('GAME OVER!')
	}

	m.redraw()
	console.log("from model -> " + model.randomPosition)

}

WhacAMole.getTimeLeft = function(model){
	return "Time left : " + model.currentTime
}

WhacAMole.moveMole = function(model){

	if (model.interval === null) {
		 model.interval = setInterval( WhacAMole.getRandomPosition
		, 1000, model)
	}
}
	 // model.interval = setInterval(WhacAMole.timer, 3000)

WhacAMole.timer = function(){
	const date = new Date()	
	console.log(date.toLocaleTimeString())
}

WhacAMole.stop = function(model){
	clearInterval(model.interval)
	model.interval = null
}

WhacAMole.reset = function(model){
	model.result = 0
	model.currentTime = 60

	WhacAMole.stop(model)
	WhacAMole.moveMole(model)
	
}
