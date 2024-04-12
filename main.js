// selecting an element to watch for intersections with the root
const target2watch = document.querySelector(".target");

const options = {
	root: document.querySelector(".item-root"),
	rootMargin: "-20px",
	threshold: [0, .25, 0.5, .75, 1]
};

// const nSteps = 20;
// const options = {
// 	root: document.querySelector(".item-root"),
// 	rootMargin: "-20px",
// 	threshold: (new Array(nSteps+1)).fill(null).map((el, i)=>i/nSteps)
// };

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry=>{
		// if intersecting, making it red; else back to green
		if(entry.isIntersecting){
			entry.target.classList.add("red");
		}else{
			entry.target.classList.remove("red");
		}
		// recording the fraction of the target element intersected with the root
		entry.target.innerText = Math.round(entry.intersectionRatio * 1000)/10 + "%";
		// extra effects - opacity
		// entry.target.style.opacity = entry.intersectionRatio;
	})
}, options);

observer.observe(target2watch);


// Rendering a dashed border around the root + its rootMargin
// NOTE: a quick hack: only works with px, not %; also only with a single value for all margins
const bgEl = document.querySelector(".root-bg");
const rootStyles = window.getComputedStyle(options.root);
const margin = parseFloat(options.rootMargin);
bgEl.style.top = (-1 * margin) + "px";
bgEl.style.left = (-1 * margin) + "px";
bgEl.style.width = (parseFloat(rootStyles.width) -4 + 2 * margin) + "px"; // -4 pixels for the 2 border width
bgEl.style.height = (parseFloat(rootStyles.height) -4 + 2 * margin) + "px";
