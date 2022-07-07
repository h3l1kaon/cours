export default class Game {
	constructor(
		givenChances,
		textBox,
		card,
		cardResponse,
		guessInput,
		submitBtn,
		chancesText,
		levelText,
		gameOverBox
	) {
		this.givenChances = givenChances
		this.correctResponse = this.giveRandom()
		this.textBox = textBox
		this.card = card
		this.cardResponse = cardResponse
		this.guessInput = guessInput
		this.submitBtn = submitBtn
		this.numberOfResponses = 0
		this.chancesText = chancesText
		this.games = 0
		this.level = 1
		this.levelText = levelText
		this.gameOverBox = gameOverBox
		this.chancesLeft = givenChances
		this.restartBtn = restartBtn

		this.guessInput.addEventListener('keydown', (e) => {
			if (e.keyCode === 13) {
				this.play()
			}
		})
		this.submitBtn.addEventListener('click', () => {
			this.play()
		})
	}
	play() {
		if (this.guessInput.value === '') {
			return this.talk("Avec quelque chose c'est mieux :)")
		}
		this.res = parseInt(this.guessInput.value.trim())

		this.chancesTextColor()

		const regExp = /^\d+$/
		const hasNumbers = regExp.test(this.res)

		console.log(this.res)

		this.guessInput.value = ''

		if (this.chancesLeft === 0 && this.res !== this.correctResponse) {
			return this.gameOver()
		}

		if (!hasNumbers) {
			this.talk("J'ai dit des chiffres!")
		} else if (this.res < 1 || this.res > 100) {
			this.talk('Le nombre doit être entre 1 et 100!')
		} else {
			this.numberOfResponses++
			if (this.res > this.correctResponse) {
				this.talk('Plus petit!')
				this.chancesLeft--
			} else if (this.res < this.correctResponse) {
				this.talk('Plus grand!')
				this.chancesLeft--
			} else {
				return this.winner()
			}
		}
	}

	init() {
		this.games++
		this.guessInput.disabled = false
		this.guessInput.focus()
		this.cardResponse.innerHTML = this.correctResponse
		this.chancesText.innerHTML = this.givenChances
		this.chancesTextColor()
	}

	chancesTextColor() {
		this.chancesText.innerHTML = this.chancesLeft
		if (this.chancesLeft >= 5) {
			this.chancesText.style.color = 'green'
		} else if (this.chancesLeft >= 3) {
			this.chancesText.style.color = 'orange'
		} else {
			this.chancesText.style.color = 'red'
		}
	}
	talk(text, clear = true) {
		if (clear) {
			this.textBox.innerHTML = ''
			this.textBox.innerHTML += text
			{
				/*----------------------------------- lettre par lettre -----------------------------------*/
			} // let split = text.split('')
			// for (let i = 0; i < split.length; i++) {
			// 	setTimeout(() => {
			// 		this.textBox.innerHTML += split[i]
			// 		if (i === split.length - 1) {
			// 			this.textBox.innerHTML += '<br>'
			// 		}
			// 	}, 20 * i)
			// }{/*----------------------------------- end lettre par lettre -----------------------------------*/}
		} else {
			this.textBox.innerHTML += text
		}
	}
	greet() {
		this.guessInput.disabled = true
		const welcome = [
			'Bienvenue étranger, dans ce jeu vous devrez deviner le nombre derrière la carte.',
			`Mais attention vous n'avez droit qu'à ${this.givenChances} chances!`,
			'Que la fortune vous sourie!',
		]

		for (let i = 0; i < welcome.length; i++) {
			setTimeout(() => {
				i === welcome.length - 1
					? this.talk(welcome[i], false)
					: this.talk(welcome[i] + '<br>' + '<br>', false)
			}, 2000 * i)
		}
		setTimeout(() => {
			this.init()
		}, 6500)
	}
	cardFlip() {
		this.card.classList.toggle('is-flipped')
		const player = new Audio(
			'./assets/sound_effects/Card flip Sound Effect (128 kbps).mp3'
		)
		player.play()
	}
	winner() {
		this.talk('Gagné!!')
		this.cardFlip()
		setTimeout(() => {
			this.cardFlip()
			this.levelUp()
		}, 3000)
	}
	levelUp() {
		this.level++
		this.levelText.innerHTML = `Niveau ${this.level}`
		// pour laisser le temps à la carte de se retourner sinon on voit la prochaine réponse
		setTimeout(() => {
			this.reset(this.givenChances - 1)
		}, 1000)
		this.guessInput.disabled = true
	}

	giveRandom() {
		return Math.floor(Math.random() * 100) + 1
	}

	reset(givenChances, newGame = false) {
		this.givenChances = givenChances
		this.correctResponse = this.giveRandom()
		this.numberOfResponses = 0
		this.chancesLeft = givenChances
		this.init()
		this.gameOverBox.classList.remove('active')
		newGame ? this.talk('Nouvelle partie') : this.talk('Quel est le nombre?')
	}
	gameOver() {
		this.guessInput.disabled = true
		this.cardFlip()
		this.level = 1
		setTimeout(() => {
			const player = new Audio(
				'./assets/sound_effects/Cod zombies evil laugh.mp3'
			)
			player.volume = 0.3
			player.play()
		}, 1000)

		this.talk('Perdu, reviens demain LOOSER')

		setTimeout(() => {
			this.cardFlip()
			this.gameOverBox.classList.add('active')
			this.restartBtn.focus()
		}, 3000)
	}
}
