import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import json from "./test.json";
import { Doctor } from "./doctor-lookup";


$().ready(function () {
  let output = '';
  let doc = new Doctor();
  let key = process.env.exports.apiKey;
  let googleApiKey = process.env.exports.googleApiKey;

  let url = `https://api.betterdoctor.com/2018-03-01/doctors?user_location=45.512794, -122.679565&user_key=5c1fe9bd45a0674ba70ee0aa3bfb74be&limit=4&query=Toothache`
  doc.getSpecialties(key).then(function (response) {
    let res = JSON.parse(response);
    res.data.forEach(element => {
      $("#specialties").append(`<option value=${element.uid}>${element.uid}</option>`);
    });
  });


  $("#search").submit(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let issue = $("#issue").val();
    let location = $("#location").val();
    let specialties = $("#specialties option:selected").val();

    doc.getGeometry(location, googleApiKey).then(function (data) {
      let response = JSON.parse(data);
      let lat = response.results[0].geometry.location.lat;
      let lng = response.results[0].geometry.location.lng;
      let user_location = `${lat}, ${lng}`;
      return doc.getDoctors(key, issue, user_location, name, specialties);
    }).then(function (response) {
      let dataJ = JSON.parse(response);
      if (dataJ.meta.total < 1) {
        output = 'No such thing exists';
      } else {
        dataJ.data.forEach(function (doc) {
          // console.log(doc.profile);
          // this.acceptPatient = doc.practices.accepts_new_patients;
          // this.address = `${doc.practices.visit_address.street}, ${doc.practices.visit_address.city}, ${doc.practices.visit_address.state}, ${doc.practices.visit_address.zip}`;
          // this.phoneNumber = `${doc.practices.phones.type}: ${doc.practices.phones.phoneNumber}`;
          // this.firstName = doc.profile.first_name;
          // this.lastName = doc.profile.last_name;
          // this.title = doc.profile.title;
          // this.image = doc.profile.image_url;
          // this.bio = doc.profile.bio;
          // this.ratings = doc.ratings;
          // this.specialties = doc.specialties;
          output += `<div class="row">
                      <div class=col-12>
                        <p>Name: ${doc.profile.first_name} ${doc.profile.last_name}<p>
                        <p>Address: ${doc.practices[0].visit_address.street}, ${doc.practices[0].visit_address.city}, ${doc.practices[0].visit_address.state}, ${doc.practices[0].visit_address.zip}<p>
                        <p>Phone: ${doc.practices[0].phones.phoneNumber}<p>
                        <p>Title: ${doc.profile.title}<p>
                        <p>Bio: ${doc.profile.bio}<p>
                      </div>
                    </div><hr>`
       
        });
      }
    });
    $(".output").html(output);
    

  });

});