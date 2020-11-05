import ScrollPanel from './scrollPanel';

function formatInt(int, length = 5) {
	let result = int.toString();
	while (result.length < length) {
		result = '0' + result;
	}

	return result;
}

const header = document.querySelector('header');
const nav = document.querySelector('.seqvencii > .nav-title');
const description = document.querySelector('.container.seqvencii-container > .description');
const stage1 = document.querySelector('.container.seqvencii-container > .stage1');
const stage2 = document.querySelector('.container.seqvencii-container > .stage2');
const stage3 = document.querySelector('.container.seqvencii-container > .stage3');

const stages = [
	{
		step: 52,
		directionUp: () => {
			header.classList.add('a-showIn');
			header.classList.remove('a-showOut');
			nav.classList.add('a-showIn');
			nav.classList.remove('a-showOut');
			description.classList.add('a-showIn');
			description.classList.remove('a-showOut');
		},
		directionDown: () => {
			header.classList.add('a-showOut');
			header.classList.remove('a-showIn');
			nav.classList.add('a-showOut');
			nav.classList.remove('a-showIn');
			description.classList.add('a-showOut');
			description.classList.remove('a-showIn');
		}
	},
	{
		step: 53,
		directionUp: () => {
			stage1.classList.add('a-showOut');
			stage1.classList.remove('a-showIn');
		},
		directionDown: () => {
			stage1.classList.add('a-showIn');
			stage1.classList.remove('a-showOut');
		}
	},
	{
		step: 118,
		directionUp: () => {
			stage1.classList.add('a-showIn');
			stage1.classList.remove('a-showOut');
		},
		directionDown: () => {
			stage1.classList.add('a-showOut');
			stage1.classList.remove('a-showIn');
		}
	},
	{
		step: 122,
		directionUp: () => {
			stage2.classList.add('a-showOut');
			stage2.classList.remove('a-showIn');
		},
		directionDown: () => {
			stage2.classList.add('a-showIn');
			stage2.classList.remove('a-showOut');
		}
	},
	{
		step: 168,
		directionUp: () => {
			stage2.classList.add('a-showIn');
			stage2.classList.remove('a-showOut');
		},
		directionDown: () => {
			stage2.classList.add('a-showOut');
			stage2.classList.remove('a-showIn');
		}
	},
	{
		step: 172,
		directionUp: () => {
			stage3.classList.add('a-showOut');
			stage3.classList.remove('a-showIn');
		},
		directionDown: () => {
			stage3.classList.add('a-showIn');
			stage3.classList.remove('a-showOut');
		}
	}
];

function doOnScroll(index, direction) {
	stages.forEach((stage) => {
		if (parseInt(index, 10) === parseInt(stage.step, 10)) {
			if (direction > 0) {
				stage.directionDown();
			} else {
				stage.directionUp();
			}
		}
	});
}

const ScrollTarget = '.main__section';
const onExist = 'main.seqvencii';

function init() {
	if (ScrollTarget && document.querySelector(ScrollTarget)) {
		const images = [];
		for (let i = 0; i < 201; i++) {
			images.push('assets/images/animation/AlfaPolimer_render_' + formatInt(i) + '.jpg');
		}
		// eslint-disable-next-line no-new
		new ScrollPanel({
			images,
			target: ScrollTarget,
			onExist,
			preloadCount: 10,
			step: 5,
			touchStep: 5,
			changePerMS: 5,
			setScreenMaxHeight: true,
			correctConditionElement: true,
			onScroll: doOnScroll
		});
	}
}

export default init;
