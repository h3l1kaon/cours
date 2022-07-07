import Game from './game.js'

document.addEventListener('DOMContentLoaded', (e) => {
	const musicAudio = new Audio(
		'./assets/sound_effects/Persona 5 - When My Mother Was There (Fourth Palace) - Extended - (128 kbps).mp3'
	)
	musicAudio.volume = 0.1
	const playMusicBtn = document.querySelector('#playMusic')
	const pauseMusicBtn = document.querySelector('#pauseMusic')
	playMusicBtn.addEventListener('click', () => {
		musicAudio.play()
		pauseMusicBtn.style.display = 'block'
		playMusicBtn.style.display = 'none'
	})
	pauseMusicBtn.addEventListener('click', () => {
		musicAudio.pause()
		playMusicBtn.style.display = 'block'
		pauseMusicBtn.style.display = 'none'
	})

	// let highScore = 0

	// if (localStorage.getItem('hightScore') !== null) {
	// 	highScore = localStorage.getItem('hightScore')
	// 	console.log(highScore)
	// } else {
	// 	localStorage.setItem('hightScore', 0)
	// }

	const chances = 7
	const submitBtn = document.querySelector('#submit')
	const card = document.querySelector('.card')
	const guessInput = document.querySelector('#guessInput')
	const textBox = document.querySelector('#text')
	const levelText = document.querySelector('#level h4')
	const chancesText = document.querySelector('#chances_left')
	const reponseDisplay = document.querySelector('#reponse')
	const gameOverBox = document.querySelector('#gameOver')
	const restartBtn = document.querySelector('#restartBtn')

	const game = new Game(
		chances,
		textBox,
		card,
		reponseDisplay,
		guessInput,
		submitBtn,
		chancesText,
		levelText,
		gameOverBox,
		restartBtn
	)
	game.greet()

	restartBtn.addEventListener('click', () => {
		game.reset(7, true)
	})
	restartBtn.addEventListener('keydown', (e) => {
		if (e.keyCode === 13) {
			game.reset(7, true)
		}
	})

	const resetBtn = document.querySelector('#reset')

	resetBtn.addEventListener('click', () => {
		game.reset(7)
	})
})
