document.addEventListener('DOMContentLoaded', function() {
    // Get all the service elements
    const serviceElements = document.querySelectorAll('.service');

    // Add a click event listener to each service element
    serviceElements.forEach(function(service) {
        service.addEventListener('click', function() {
        // Get the title text within the clicked service element
        const title = service.querySelector('h3').textContent;

        // Print the title to the console
        console.log('Clicked Service Title: ' + title);
        var properties = {
            title: title
        }
        analytics.track("Service Clicked", properties);

        });
    });
});