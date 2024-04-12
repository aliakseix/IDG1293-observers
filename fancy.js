const sectionEls = document.querySelectorAll("[data-hidden]");

const options = {
	rootMargin: "-10%",
};

const observer = new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.classList.remove(entry.target.dataset.hidden);
		}else{
			entry.target.classList.add(entry.target.dataset.hidden);
		}
	});
}, options);

sectionEls.forEach(el=>observer.observe(el));
