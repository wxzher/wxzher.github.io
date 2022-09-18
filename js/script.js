// Alternative Versions:
// - CSS @scroll-timeline + Polyfill: https://codepen.io/bramus/pen/ExgOPRw
// - JS ScrollTimeline + Polyfill: https://codepen.io/bramus/pen/VwXMRrW
// - JS Motion One: https://codepen.io/bramus/pen/PoRKORX 👈 = The version you are currently looking at

import { scroll, animate } from "https://cdn.skypack.dev/motion@10.13.1"

// Some elements we'll need
const $header = document.querySelector("#sticky-parallax-header");
const $content = document.querySelector("#content");

// Fixate the header
// @note: We use `position: fixed` instead of `position: sticky` here because
// the latter glitches — https://bugs.chromium.org/p/chromium/issues/detail?id=1167497
$header.style.position = 'fixed';
$header.style.top = 0;

// As we use `position: fixed` above, we also have to make sure the content
// is not underneath the header. With `position: sticky` this would be of no issue.
$content.style.marginTop = `100vh`;

scroll(
	animate(
		$header,
		{
			backgroundPosition: ["50% 0", "50% 100%"], 
			backgroundColor: ['transparent', '#0b1584'],
			height: ['100vh', `10vh`],
			fontSize: ['calc(4vw + 1em)', 'calc(1vw + 1em)'],
		}
	),
	{
		offset: ["0vh", "90vh"] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
	}
)