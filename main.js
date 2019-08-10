//Intersection Observer api, 
const headerFeature = document.querySelectorAll(".styled");
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('styled');
        } else {
            entry.target.classList.remove('styled');
        }
    });
    /*console.log('entry: ', entry);
    console.log('observer: ', observer);
    entry.target.classList.add('animate_me');*/
});

headerFeature.forEach(heads => {
    observer.observe(heads);
});