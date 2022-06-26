//Intersection Observer api,
let invalidClassName = 'invalid';
let inputs = document.querySelectorAll('input');
let msg = document.querySelector('.msg');
console.log(inputs);

inputs.forEach(function (input) {
    // Add a css class on submit when the input is invalid.
    input.addEventListener('invalid', function () {
        input.classList.add(invalidClassName);
        msg.innerHTML = "Provide a valid email";
    })

    // Remove the class when the input becomes valid.
    // 'input' will fire each time the user types
    input.addEventListener('input', function () {
        if (input.validity.valid) {
            input.classList.remove(invalidClassName);
            msg.innerHTML = " ";
        }
    })
})
    
const headerFeature = document.querySelectorAll(".styled");
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('styled');
        } else {
            entry.target.classList.remove('styled');
        }
    });
   
});

headerFeature.forEach(heads => {
    observer.observe(heads);
});

