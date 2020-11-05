const defaultOptions = {
	onScroll: null,
	target: null,
	backgroundColor: '#000000',
	images: [],
	onCompleteInit: null,
	preloadCount: 10,
	step: 5,
	touchStep: 1,
	changePerMS: 5,
	onExist: null,
	setScreenMaxHeight: false,
	correctConditionElement: false,
};

class ScrollPanel {
	constructor(options) {
		this.options = Object.assign({}, defaultOptions, options);
		this.workOptions = {
			target: null,
			ctx: null,
			wrapper: null,
			position: 0,
			minPosition: 0,
			maxPosition: 10,
			width: 0,
			height: 0,
			downloaded: false,
			startOn: 0,
		};
		this.currentStep = this.options.step;
		this.images = [];
		this.current = 0;
		this.prev = 0;
		this.loadAll(0, this.options.preloadCount, () => {
			this.init();

			if (this.options.onCompleteInit) {
				this.options.onCompleteInit();
			}
		});

		this.renderQueue = [];
		this.rendererTimeout = null;
	}

	renderer() {
		if (this.renderQueue.length) {
			const index = this.renderQueue.shift();
			const nextSlide = this.renderQueue[0] || index;
			this.drawImage(index, nextSlide);
		} else {
			this.stopRenderer();
		}
	}

	stopRenderer() {
		clearInterval(this.rendererTimeout);
		this.rendererTimeout = null;
	}

	clearRenderer() {
		this.renderQueue = [];
	}

	startRenderer() {
		if (!this.rendererTimeout) {
			this.rendererTimeout = setInterval(this.renderer.bind(this), this.options.changePerMS);
		}
	}

	addToRenderer(i) {
		this.renderQueue.push(i);
		this.startRenderer();
	}

	init() {
		if (this.options.target) {
			this.workOptions.maxPosition = this.options.images.length - 1;
			this.loadAll(this.options.preloadCount, this.options.images.length);
			const wrapper = document.querySelector(this.options.target);
			let onExist = wrapper;
			if (this.options.onExist) {
				onExist = document.querySelector(this.options.onExist);
			}

			if (onExist) {
				this.workOptions.wrapper = wrapper;
				const canvas = document.createElement('canvas');
				this.workOptions.target = canvas;
				canvas.style.position = 'absolute';
				canvas.style.top = 0;
				canvas.style.left = 0;
				const rect = canvas.getBoundingClientRect();
				this.workOptions.startOn = parseInt(rect.top, 10);
				wrapper.append(canvas);
				this.workOptions.ctx = canvas.getContext('2d');
				this.applyStyles();
				this.applyListeners();
				this.render(1);
			}
		}
	}

	loadAll(from = 0, to = 0, onComplete = null) {
		const countNeed = to - from;
		let countLoaded = 0;
		this.options.images.forEach((link, index) => {
			if (from > 0 && index < from) {
				return;
			}
			if (to > 0 && index > to) {
				return;
			}
			if (!this.images[index]) {
				const image = new Image();
				image.onload = () => {
					countLoaded++;
					this.images[index] = image;
					if (
						countLoaded === countNeed
            && to !== 0
            && onComplete
					) {
						setTimeout(onComplete, 100);
					}
					if (this.images.length === this.options.images.length) {
						this.workOptions.downloaded = true;
					}
				};
				image.src = link;
			}
		});
	}

	applyListeners() {
		document.addEventListener('wheel', (e) => {
			this.currentStep = this.options.step;
			return this.onScroll(Math.sign(e.deltaY), this.getScroll()[1], e);
		}, { passive: false });
		window.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowDown') {
				this.currentStep = this.options.step;
				return this.onScroll(1, this.getScroll()[1], e);
			}
			if (e.key === 'ArrowUp') {
				this.currentStep = this.options.step;
				return this.onScroll(-1, this.getScroll()[1], e);
			}
			return false;
		}, { passive: false });
		window.addEventListener('touchstart', (e) => {
			this.touchStartFrom = parseInt(e.changedTouches[0].pageY, 10);
		});
		window.addEventListener('touchmove', (e) => {
			const posNow = e.changedTouches[0].pageY;
			this.currentStep = this.options.touchStep;
			if (this.touchStartFrom > posNow) {
				return this.onScroll(1, this.getScroll()[1], e);
			}
			if (this.touchStartFrom < posNow) {
				return this.onScroll(-1, this.getScroll()[1], e);
			}

			return false;
		}, { passive: false });
		window.addEventListener('resize', () => {
			this.applyStyles();
			this.render(1);
		});
	}

	getScroll() {
		if (window.pageYOffset !== undefined) {
			return [pageXOffset, pageYOffset];
		}
		const d = document.documentElement;
		const b = document.body;
		return [d.scrollLeft || b.scrollLeft || 0, d.scrollTop || b.scrollTop || 0];

	}

	getHeightDocument() {
		return parseInt(window.innerHeight, 10);
	}

	getWidthDocument() {
		return parseInt(window.innerWidth, 10);
	}

	applyStyles() {
		const width = this.getWidthDocument();
		let height = parseInt(this.workOptions.wrapper.offsetHeight, 10);
		if (this.options.setScreenMaxHeight) {
			height = this.getHeightDocument();
		}
		if (this.options.correctConditionElement) {
			const element = document.querySelector(this.options.onExist);
			const top = element.offsetTop;
			const topMargin = parseInt(top, 10);
			element.style.height = (
				height - topMargin
			) + 'px';
		}
		this.workOptions.width = width;
		this.workOptions.height = height;
		this.workOptions.target.setAttribute('width', width);
		this.workOptions.target.setAttribute('height', height);
	}

	slideNext() {
		if (this.images[this.current + 1]) {
			this.prev = this.current;
			this.current += this.currentStep;
			if (this.current > this.images.length - 1) {
				this.current = this.images.length - 1;
			}
		}
	}

	slidePrev() {
		if (this.images[this.current - 1]) {
			this.prev = this.current;
			this.current -= this.currentStep;
			if (this.current < 0) {
				this.current = 0;
			}
		}
	}

	drawImage(index, nextSlide) {
		this.workOptions.ctx.fillStyle = this.options.backgroundColor;
		this.workOptions.ctx.clearRect(0, 0, this.workOptions.width, this.workOptions.height);
		this.workOptions.ctx.fillRect(0, 0, this.workOptions.width, this.workOptions.height);
		const image = this.images[index];
		const imageWidth = image.naturalWidth;
		const imageHeight = image.naturalHeight;
		const calculatedHeight = this.workOptions.width * imageHeight / imageWidth;
		const topPosition = parseInt((
			this.workOptions.height - calculatedHeight
		) / 2, 10);
		console.log(index);
		if (this.options.onScroll) {
			this.options.onScroll(index, nextSlide - index);
		}
		this.workOptions.ctx.drawImage(
			image,
			0,
			0,
			imageWidth,
			imageHeight,
			0,
			topPosition,
			this.workOptions.width,
			calculatedHeight
		);
	}

	render(direction) {
		if (direction > 0) {
			for (let i = this.prev; i <= this.current; i++) {
				this.addToRenderer(i);
			}
		} else {
			for (let i = this.prev; i >= this.current; i--) {
				this.addToRenderer(i);
			}
		}
	}

	onScroll(delta, position, e) {
		if (position < this.workOptions.startOn || position > this.workOptions.startOn) {
			if (this.renderQueue.length) {
				if (e.cancelable !== false) {
					e.preventDefault();
					if (e.stopPropagation) {
						e.stopPropagation();
					}
					if (e.stopImmediatePropagation) {
						e.stopImmediatePropagation();
					}
				}
			}
			return false;
		}
		if (
			this.current >= this.workOptions.minPosition
      && this.current <= this.workOptions.maxPosition
		) {
			if (delta < 0 && this.current > this.workOptions.minPosition) {
				this.slidePrev();
				this.render(-1);
				if (e.cancelable !== false) {
					e.preventDefault();
					if (e.stopPropagation) {
						e.stopPropagation();
					}
					if (e.stopImmediatePropagation) {
						e.stopImmediatePropagation();
					}
				}
				return true;
			}
			if (delta > 0 && this.current < this.workOptions.maxPosition) {
				this.slideNext();
				this.render(1);
				if (e.cancelable !== false) {
					e.preventDefault();
					if (e.stopPropagation) {
						e.stopPropagation();
					}
					if (e.stopImmediatePropagation) {
						e.stopImmediatePropagation();
					}
				}
				return true;
			}
		}

		return false;
	}
}

export default ScrollPanel;
