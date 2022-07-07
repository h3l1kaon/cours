const hangedSlider = document.querySelector('.hanged_slider')
const keyboard = document.querySelector('.keyboard')
const wordContainer = document.querySelector('.mistery_word')
const resetBtns = document.querySelectorAll('.reset')
const gameOverDiv = document.querySelector('.game_over')
const victoryDiv = document.querySelector('.victory')
const main = document.querySelector('main')
let turn = 0
const word = 'TEST'
// let split = word.split('')
const slides = getSlidePaths()

fillSlider(slides)

function getSlidePaths() {
	let t = []
	for (let i = 1; i <= 9; i++) {
		const d = document.createElement('div')
		d.classList.add('slide')
		d.classList.add('fade')
		d.style.backgroundImage = `url(./hanged_sequence/step${i}.png)`
		t.push(d)
	}
	return t
}

function fillSlider(slides) {
	slides.forEach((slide) => {
		hangedSlider.appendChild(slide)
	})
	hangedSlider.children[0].style.display = 'block'
}

function slide() {
	turn++
	if (turn === slides.length) {
		turn = 0
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}

	slides[turn].style.display = 'block'
	if (turn === 8) {
		gameOver()
	}
}

for (let i = 0; i < 26; i++) {
	const sp = document.createElement('span')
	sp.classList.add('letter')
	sp.textContent = String.fromCharCode(65 + i)
	sp.addEventListener('click', () => play(sp.textContent))
	keyboard.appendChild(sp)
}
let split = word.split('')
function setUpMistery(wordSplit, foundLetters = []) {
	wordContainer.innerHTML = ''
	wordSplit.forEach((letter) => {
		const d = document.createElement('div')
		const l = document.createElement('span')
		const underline = document.createElement('span')

		if (foundLetters.includes(letter)) {
			l.textContent = letter
		} else {
			l.classList.add('mistery_letter')
			l.textContent = '?'
		}
		d.append(l, underline)
		wordContainer.appendChild(d)
	})
}
setUpMistery(split)

let foundLetters = []

function play(answer) {
	if (split.includes(answer)) {
		if (!foundLetters.includes(answer)) {
			split.forEach((letter) => {
				if (letter === answer) {
					foundLetters.push(answer)
				}
			})
			if (foundLetters.length == split.length) {
				setUpMistery(split, foundLetters)
				victory()
			} else {
				setUpMistery(split, foundLetters)
			}
		}
	} else {
		slide()
	}
}

function gameOver() {
	main.style.pointerEvents = 'none'
	gameOverDiv.classList.add('active')
}
function victory() {
	main.style.pointerEvents = 'none'
	wordContainer.style.pointerEvents = 'auto'
	// victoryDiv.classList.add('active')
	wordContainer.classList.add('victorious')
	const google = document.createElement('p')
	google.classList.add('google')
	google.textContent = 'Google it'
	wordContainer.appendChild(google)
	wordContainer.addEventListener('click', () => {
		window.open(
			`https://www.google.com/search?q=${word.toLowerCase()}`,
			'_blank'
		)
	})
	google.style.pointerEvents = 'auto'
}

resetBtns.forEach((btn) =>
	btn.addEventListener('click', () => {
		turn = 0
		fillSlider(slides)
		foundLetters = []
		const encore = 'encore'
		word = encore
		split = encore.toUpperCase().split('')
		setUpMistery(split)
		gameOverDiv.classList.remove('active')
		wordContainer.classList.remove('victorious')
		wordContainer.removeEventListener('click')
		main.style.pointerEvents = 'auto'
	})
)
