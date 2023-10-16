const item = document.querySelectorAll("#two");
const options = { threshold: 0.25 };

function addSlideIn(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
        }
    });
};

const observer = new IntersectionObserver(addSlideIn, options);

item.forEach(item => {
    observer.observe(item);
});

/*const observer = new IntersectionObserver(logIntersection);
const element = document.querySelector("#one");
const secondObserverOptions = {threshold: 0.25};
const secondObserver = new IntersectionObserver(logIntersection, secondObserverOptions);
const element2 = document.querySelector("#two");
observer.observe(element);

function logIntersection(entries, observer) {
    entries.forEach(entry => {
        const entryObject = {
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            target: {
                element: entry.target.tagName,
                id: entry.target.id
            }
        }

        if (entry.isIntersecting) {
            console.log(`${entry.target.id} is intersecting`)
        } else {
            console.log(`${entry.target.id} is NOT intersecting`)
        }

        console.log("Entry: ", entryObject)
        console.log("\n")

        observer.unobserve(entry.target)
    });
};

secondObserver.observe(element2);*/
