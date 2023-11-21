function checkLocalStorageValue() {
    return localStorage.getItem('id');
}
// Function to show the hidden content
function showHiddenContent() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('exclusiveContent').style.display = 'block';
}

function identify(e) {
    e.preventDefault();
    var id = localStorage.getItem("id")
    if (!checkLocalStorageValue()){
        id = Math.floor((Math.random() * 1000000) + 1);
        console.log("setting new id=", rn)
        localStorage.setItem("id", id);
    }else{
        console.log(id)
    }
    // Remove the translucent overlay
    document.getElementById('overlay').style.display = 'none';

    // Display the hidden content
    document.getElementById('exclusiveContent').style.display = 'block';
    var form = e.target;
    var age = form["age"].value;
    var weight = form["weight"].value;
    var breed = form["breed"].value;
    var genfactor = form["Genetic Factors"].value;
    // var brPred = form["Breed Predisposition"].value;
    var VaccinationsUpToDate = form["VaccinationsUpToDate"].value;
    var Obesity = form["Obesity"].value;
    
    analytics.identify(id, {
        age: age,
        leadSource: 'Newsletter',
        is_first_session: 'true',
        clicked_random_link: 'true',
        viewed_product: 'true',
        weight: weight,
        category: 'Marketing',
        breed: breed,
        'Genetic Factors': genfactor,
        // 'Breed Predisposition': brPred,
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

