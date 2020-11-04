import AOS from 'aos';
import { isMobileOnly } from './utils';
import ScrollPanel from './scrollPanel';


function formatInt(int, length = 5) {
	let result = int.toString();
	while (result.length < length) {
		result = '0' + result;
	}

	return result;
}

const ScrollTarget = '.nav-title.nav-background';
if (ScrollTarget && document.querySelector(ScrollTarget)) {
	const images = [];
	for (let i = 0; i < 201; i++) {
		images.push('assets/images/animation/AlfaPolimer_render_' + formatInt(i) + '.jpg');
	}
	// eslint-disable-next-line no-new
	new ScrollPanel({
		images,
		target: ScrollTarget,
		preloadCount: 10,
		step: 5,
		touchStep: 5,
		changePerMS: 5,
	});
}


// accordion
$('.accordion li').click(function(e) {
	e.preventDefault();
	$('.accordion li').removeClass('active');
	$(this).addClass('active');
});
$('.accordion li a').click(function() {
	window.location.href = $(this).attr('href');
});

$('.acc__title').click(function(e) {
	e.preventDefault();
	const dropDown = $(this).next();
	$(this).toggleClass('active');
	$(this).parent().toggleClass('active');

	dropDown.slideToggle();

	setTimeout(() => {
		AOS.refresh({
			offset: 50,
		});
	}, 1000);
});
// accordion

$('.showMoreText-link').click(function() {
	$(this).parent().addClass('active');
	$(this).hide();
});

// filtering
function filterLogic(value, condition, isCharacter, elem) {
	const list = $('.glossary-list .acc__card');
	let counter = 0;

	// filter it
	if (condition) {
		list.velocity({ scaleX: 0, scaleY: 0 }, { display: 'none', duration: 300 });
		$(list).filter(function(index, item) {
			const getTitle = $(item)[0].dataset.title;
			const getSubTitle = $(item)[0].dataset.subtitle;
			const regex = isCharacter
				? getTitle.startsWith(value)
				: getTitle.toLowerCase().includes(value.toLowerCase());
			const regexSub = isCharacter
				? getSubTitle.startsWith(value)
				: getSubTitle.toLowerCase().includes(value.toLowerCase());

			if (regex || regexSub) counter++;
			return regex || regexSub;
		}).velocity({ scaleX: 1, scaleY: 1 }, { display: 'block', duration: 300, delay: 200 });
		$('.abc--js li').removeClass('active');
		if (isCharacter) {
			elem.addClass('active');
		}
		if (!$('.glossary-results').hasClass('active')) {
			$('.glossary-results').addClass('active').velocity('slideDown', { duration: 500, delay: 400 });
		}
		$('.glossary-results-title span').text(counter);
		$('.glossary-results-desc span').text(value);
		$('.more--js').hide();
	} else {
		if (!isCharacter) {
			$('.glossary-results').removeClass('active').velocity('slideUp', { duration: 500 });
			$('.more--js').show();
			showMoreFunc('.acc .acc__card', 9, '.more--js', false);
		}
	}

	if (isMobileOnly) {
		const top = $('.glossary-results').offset().top;
		$('body,html').animate({ scrollTop: top - 70 }, 1000);
	}

	setTimeout(() => {
		const top = $('.glossary-results').offset().top;
		$('body,html').animate({ scrollTop: top - 70 }, 1000);
		sticky();
		AOS.refresh({
			offset: 50,
		});
	}, 700);
}

function getABCCharacters() {
	const abc = $('.abc--js li');
	const array = [];
	abc.each(function(index, item) {
		array.push($(item).data('title'));
	});
	return array;
}

export function getResults() {
	const array = getABCCharacters();
	const item = $('.glossary-list .acc__card');
	item.each(function(index, item) {
		const getFirstCharacter = $(item).data('title')[0];
		const filters = array.filter(v => v === getFirstCharacter);
		filters.map(function(index) {
			$('.abc--js li[data-title=' + index + ']').addClass('activated');
		});
	});
}

$('.abc--js').on('click', 'li.activated', function() {
	const getCharacter = $(this).data('title');
	filterLogic(getCharacter, !$(this).hasClass('active'), true, $(this));
});

$('.search--js').on('click', function() {
	const value = $(this).parent().find('input')[0].value;
	if (!value) return;
	filterLogic(value, value, false);
});

$(document).on('keypress', function(e) {
	if ($('.glossary-search').length && e.which == 13) {
		const value = $('.glossary-search input')[0].value;
		if (!value) return;
		filterLogic(value, value, false);
	}
});
// filtering


$('.input__file-js').change(function() {
	$('.input__file-js').each(function() {
		const name = this.value;
		const reWin = /.*\\(.*)/;
		let fileTitle = name.replace(reWin, '$1');
		const reUnix = /.*\/(.*)/;
		fileTitle = fileTitle.replace(reUnix, '$1');
		$(this).parent().parent().find('.input__name-js').val(fileTitle);
		$('.input__text-js').text(fileTitle);
		$('.input__file-close').addClass('show');
	});
});

$('.input__file-close').on('click', function() {
	$('.input__file-js').val('');
	$('.input__text-js').html('Прикрепить файл <span><i class="icon-dlink"></i></span>');
	$(this).removeClass('show');
});


// sticky
export function sticky() {
	const $window = $(window);
	const $sidebar = $('.sidebar');
	if ($sidebar.length) {
		const $sidebarHeight = $sidebar.innerHeight();
		const $footerOffsetTop = $('.stopper').offset().top;
		const $sidebarOffset = $sidebar.offset();

		$window.scroll(function() {
			const windScroll = $window.scrollTop();

			$('.template__item--js').each(function(i) {
				if ($(this).position().top <= windScroll + 60) {
					$('.equipmentNav li.active').removeClass('active');
					$('.equipmentNav li').eq(i).addClass('active');
				}
			});

			if (windScroll > $sidebarOffset.top) {
				$sidebar.addClass('fixed');
			} else {
				$sidebar.removeClass('fixed');
				// $sidebar.css({ position: 'static' });
			}
			if (windScroll + $sidebarHeight > $footerOffsetTop) {
				$sidebar.css({
					'top': -(
						windScroll + $sidebarHeight - $footerOffsetTop
					)
				});
				// $sidebar.css({"top": 'auto', position: 'absolute', bottom: 0});
			} else {
				$sidebar.css({ 'top': '10px' });
			}
		});
	}
}

// sticky

