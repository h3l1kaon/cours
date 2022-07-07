const playerCards = document.querySelectorAll('.player_row .card')
const iaRock = document.querySelector('#ia_rock')
const iaPaper = document.querySelector('#ia_paper')
const iaScissors = document.querySelector('#ia_scissors')

const scoreDiv = document.querySelector('.score_div')
const playerScoreText = document.querySelector('#player_score')
const aiScoreText = document.querySelector('#ia_score')
const tiesText = document.querySelector('#ties')
const winnerText = document.querySelector('#winner')
const totalText = document.querySelector('#total')

playerCards.forEach((card) => {
	card.addEventListener('click', () => {
		play(card)
	})
})

function flipCard(card) {
	card.classList.toggle('is-flipped')
}
const playerStats = {
	rock: 0,
	paper: 0,
	scissors: 0,
}
const score = {
	player: 0,
	ia: 0,
	ties: 0,
	games: 0,
}
let ai_pertes_consecutives = 0

function giveRandom() {
	return Math.floor(Math.random() * 3 + 1)
}

function play(card) {
	switch (card.id) {
		case 'rock':
			playerStats.rock++
			break
		case 'paper':
			playerStats.paper++
			break
		case 'scissors':
			playerStats.scissors++
			break
		default:
			break
	}

	let toFlip
	if (score.games > 10 && ai_pertes_consecutives < 2) {
		let choice = { val: 0, name: '' }
		for (weapon in playerStats) {
			if (playerStats[weapon] > choice.val) {
				choice.val = playerStats[weapon]
				choice.name = weapon
			}
		}
		console.log("ia prevoit que l'adversaire joue " + choice.name)
		switch (choice.name) {
			case 'scissors':
				toFlip = iaRock
				break
			case 'rock':
				toFlip = iaPaper
				break
			case 'paper':
				toFlip = iaScissors
				break
			default:
				break
		}
	} else {
		switch (giveRandom()) {
			case 1:
				toFlip = iaRock
				break
			case 2:
				toFlip = iaPaper
				break
			case 3:
				toFlip = iaScissors
				break

			default:
				break
		}
	}
	flipCard(card)
	flipCard(toFlip)

	playerCards.forEach((card) => {
		card.style.pointerEvents = 'none'
	})

	setTimeout(() => {
		flipCard(card)
		flipCard(toFlip)
		playerCards.forEach((card) => {
			card.style.pointerEvents = 'auto'
		})
	}, 1500)

	let winner = 'nul'
	if (card.id === 'rock') {
		playerStats.rock++
		if (toFlip.id === 'ia_paper') {
			score.ia++
			ai_pertes_consecutives = 0
			winner = 'A.I'
		} else if (toFlip.id === 'ia_scissors') {
			score.player++
			ai_pertes_consecutives++
			winner = 'joueur'
		} else {
			score.ties++
		}
	} else if (card.id === 'paper') {
		playerStats.paper++
		if (toFlip.id === 'ia_scissors') {
			score.ia++
			ai_pertes_consecutives = 0
			winner = 'A.I'
		} else if (toFlip.id === 'ia_rock') {
			score.player++
			ai_pertes_consecutives++
			winner = 'joueur'
		} else {
			score.ties++
		}
	} else if (card.id === 'scissors') {
		playerStats.scissors++
		if (toFlip.id === 'ia_rock') {
			score.ia++
			ai_pertes_consecutives = 0
			winner = 'A.I'
		} else if (toFlip.id === 'ia_paper') {
			score.player++
			ai_pertes_consecutives++
			winner = 'joueur'
		} else {
			score.ties++
		}
	}

	score.games++
	playerScoreText.innerHTML = score.player
	aiScoreText.innerHTML = score.ia
	tiesText.innerHTML = score.ties
	totalText.innerHTML = score.games
	if (winner === 'nul') {
		winnerText.innerHTML = 'Match nul'
		winnerText.style.color = 'white'
		scoreDiv.style.borderColor = 'white'
	} else if (winner === 'joueur') {
		winnerText.innerHTML = 'Le joueur a gagné'
		winnerText.style.color = 'green'
		scoreDiv.style.borderColor = 'green'
	} else {
		winnerText.innerHTML = "L'I.A a gagné"
		winnerText.style.color = 'red'
		scoreDiv.style.borderColor = 'red'
	}
}
