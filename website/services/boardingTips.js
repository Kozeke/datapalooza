
function identify(e) {
    e.preventDefault();
    // console.log("cl")/
    // Remove the translucent overlay
    // var id = localStorage.getItem("bid")
    // if (!checkLocalStorageValue()){
    //     id = Math.floor((Math.random() * 1000000) + 1);
    //     // console.log("setting new id=", rn)
    //     localStorage.setItem("bid", id);
    // }else{
    //     console.log(id)
    // }
    document.getElementById('overlay').style.display = 'none';
    // console.log(    localStorage.getItem("lastname")    )
    // Display the hidden content
    document.getElementById('exclusiveContent').style.display = 'block';
    var form = e.target;
    var job = form["job"].value;
    var likeTravelling = form["likeTravelling"].value;
    var maritialStatus = form["maritialStatus"].value;
    var economicSituation = form["economicSituation"].value;
    analytics.identify("12345", {
        job: job,
        leadSource: 'Newsletter',
        is_first_session: 'true',
        clicked_random_link: 'true',
        viewed_product: 'true',
        likeTravelling: likeTravelling,
        category: 'Marketing',
        maritialStatus: maritialStatus,
        economicSituation: economicSituation,
    }, {
        'integrations': {
            'Salesforce': true
        }
    });
    analytics.track('Form Submitted', {
        type: "Lead Generation",
    });

}

