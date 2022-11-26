let info = [{"id":1,"Name":"Ange","email":"astrand0@nature.com","gender":"Female"},
{"id":2,"Name":"Nichols","email":"nsimione1@cnbc.com","gender":"Male"},
{"id":3,"Name":"Carmelina","email":"ctalbot2@networkadvertising.org","gender":"Female"},
{"id":4,"Name":"Ashley","email":"aleban3@webmd.com","gender":"Non-binary"},
{"id":5,"Name":"Casper","email":"cposselwhite4@topsy.com","gender":"Male"},
{"id":6,"Name":"Frederich","email":"fgorton5@tripadvisor.com","gender":"Male"},
{"id":7,"Name":"Jaclyn","email":"jbiles6@deliciousdays.com","gender":"Female"},
{"id":8,"Name":"Cynthy","email":"cpaterson7@linkedin.com","gender":"Female"},
{"id":9,"Name":"Bradan","email":"bstraine8@google.co.uk","gender":"Male"},
{"id":10,"Name":"Norah","email":"npflieger9@stumbleupon.com","gender":"Female"},
{"id":11,"Name":"Germaine","email":"gmeyshama@drupal.org","gender":"Female"},
{"id":12,"Name":"Fredia","email":"ftaysbilb@businessweek.com","gender":"Female"},
{"id":13,"Name":"Doyle","email":"dduchartc@bizjournals.com","gender":"Male"},
{"id":14,"Name":"Karyl","email":"kchadburnd@virginia.edu","gender":"Female"},
{"id":15,"Name":"Hubie","email":"hphilbine@ucla.edu","gender":"Male"},
{"id":16,"Name":"Fey","email":"fmixonf@cocolog-nifty.com","gender":"Female"},
{"id":17,"Name":"Hadleigh","email":"harthang@ebay.com","gender":"Male"},
{"id":18,"Name":"Staford","email":"slockeyh@photobucket.com","gender":"Male"},
{"id":19,"Name":"Florentia","email":"fhinkleyi@hexun.com","gender":"Female"},
{"id":20,"Name":"Wash","email":"warnej@infoseek.co.jp","gender":"Male"},
{"id":21,"Name":"Petronille","email":"pswaylandk@ameblo.jp","gender":"Female"},
{"id":22,"Name":"Carr","email":"cgullefordl@hud.gov","gender":"Agender"},
{"id":23,"Name":"Sonnie","email":"scallacherm@mayoclinic.com","gender":"Male"},
{"id":24,"Name":"Falito","email":"fbehaggn@hubpages.com","gender":"Male"},
{"id":25,"Name":"Carmel","email":"cfairfoulo@nature.com","gender":"Female"}]

function display_data(){
    let rows = " "
    for( infos of info){
        rows = rows+ `<tr>
        <td>${infos.id}</td>
        <td>${infos.Name}</td>
        <td>${infos.email}</td>
        <td>${infos.gender}</td>
        </tr>`
        
    }
    document.getElementById('abc').innerHTML =rows

}