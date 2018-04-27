import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import json from "./test.json";
import {Doctor} from "./doctor-lookup";

$().ready(function(){
  // alert(process.env.exports.apiKey);
  // let firstName = 'Adriana';
  // let lastName = 'ch';
  // let address = "portland";
  // let phoneNumber = "5034810352";
  // let website = "venusgrape.com";
  // let acceptPatient = true;
  

  let doc = new Doctor();

  let url = `https://api.betterdoctor.com/2018-03-01/doctors?user_location=45.512794, -122.679565&user_key=5c1fe9bd45a0674ba70ee0aa3bfb74be&limit=4&query=Toothache`
 


});