function identify(e) {
    e.preventDefault();
    console.log("cl")
    // Remove the translucent overlay
    document.getElementById('overlay').style.display = 'none';

    // Display the hidden content
    document.getElementById('exclusiveContent').style.display = 'block';
    var form = e.target;
    var age = form["age"].value;
    var weight = form["weight"].value;
    var breed = form["breed"].value;
    var genfactor = form["Genetic Factors"].value;
    var brPred = form["Breed Predisposition"].value;
    var VaccinationsUpToDate = form["VaccinationsUpToDate"].value;
    var Obesity = form["Obesity"].value;
    analytics.identify(12345, {
        age: age,
        leadSource: 'Newsletter',
        is_first_session: 'true',
        clicked_random_link: 'true',
        viewed_product: 'true',
        weight: weight,
        category: 'Marketing',
        breed: breed,
        'Genetic Factors': genfactor,
        'Breed Predisposition': brPred,
        VaccinationsUpToDate: VaccinationsUpToDate,
        Obesity: Obesity    

    }, {
        'integrations': {
            'Salesforce': true
        }
    });

    analytics.track('Form Submitted', {
        type: "Lead Generation",
    });

}

