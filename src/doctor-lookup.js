let Promise = require('es6-promise').Promise;

export class Doctor {
  constructor(firstName='', lastName='', address='portland, oregon', phoneNumber='', website='', acceptPatient=true, title='', image='', bio='', ratings='', specialties='') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.website = website;
    this.acceptPatient = acceptPatient;
    this.title = title;
    this.image = image;
    this.bio = bio;
    this.ratings = ratings;
    this.specialties = specialties;
  }

  getDoctors(key, issue, location, name, specialty) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      
      let url = `https://api.betterdoctor.com/2018-03-01/doctors?user_location=${location}&user_key=${key}&limit=8&query=${issue}`;
      if(name){
        url = `https://api.betterdoctor.com/2018-03-01/doctors?user_location=${location}&user_key=${key}&limit=2&query=${issue}&name=${name}`;
      }else if(specialty){
        url = `https://api.betterdoctor.com/2018-03-01/doctors?user_location=${location}&user_key=${key}&limit=2&query=${issue}&specialty_uid=${specialty}`;
      }else if(name && specialty){
        url = `https://api.betterdoctor.com/2018-03-01/doctors?user_location=${location}&user_key=${key}&limit=2&query=${issue}&name=${name}&specialty_uid=${specialty}`;
      }
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open('GET', url, true);
      request.send();
    });

  }


  // doctorMeta(doc) {
  //   if (doc.length >= 1) {
  //     this.acceptPatient = doc.practices.accepts_new_patients;
  //     this.address = `${doc.practices.visit_address.street}, ${doc.practices.visit_address.city}, ${doc.practices.visit_address.state}, ${doc.practices.visit_address.zip}`;
  //     this.phoneNumber = `${doc.practices.phones.type}: ${doc.practices.phones.phoneNumber}`;
  //     this.firstName = doc.profile.first_name;
  //     this.lastName = doc.profile.last_name;
  //     this.title = doc.profile.title;
  //     this.image = doc.profile.image_url;
  //     this.bio = doc.profile.bio;
  //     this.ratings = doc.ratings;
  //     this.specialties = doc.specialties;
  //   } else {
  //     return 'Your doctor went to Marse.';
  //   }
  // }

  getGeometry(address, googleApiKey) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open('GET', url, true);
      request.send();
    });
  }


  getSpecialties(key) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2018-03-01/specialties?user_key=${key}&limit=10`;

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open('GET', url, true);
      request.send();
    });
  }


}