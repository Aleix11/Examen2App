import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "_id": "5a09d0c4f805432b7c87008f",
    "name": "EA",
    "quatri": "Tardor",
    "studies": "Telematica",
    "__v": 0,
    "profilePic": "assets/img/speakers/Tardor.jpg",
    "studentId": [
      {
        "_id": "5a0984d57043b831eca19ed9",
        "name": "Aleix",
        "address": "Exemple",
        "__v": 0,
        "phone": {
          "home": "939999999",
          "work": "666666666"
        }
      }
      ]
  };


  constructor() {
    /*let items2 = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/Tardor.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];*/

    let items = [
      {
        "_id": "5a09d0c4f805432b7c87008f",
        "name": "EA",
        "quatri": "Tardor",
        "studies": "Telematica",
        "profilePic": "assets/img/speakers/Tardor.jpg",
        "__v": 0,
        "studentId": [
      {
        "_id": "5a0984d57043b831eca19ed9",
        "name": "Gurkeerat",
        "address": "C/Pesadilla",
        "__v": 0,
        "phone": {
          "home": "666666666",
          "work": "777777777"
        }
      },
      {
        "_id": "5a09872276a76f301c5bfe87",
        "name": "aleix",
        "address": "C/salvacion",
        "__v": 0,
        "phone": {
          "home": "159753456",
          "work": "158236987"
        }
      }
    ]
    },
    {
      "_id": "5a09d49261476d1c04c02a4c",
      "name": "EA",
      "quatri": "Primavera",
      "studies": "Telecomunicacions",
      "profilePic": "assets/img/speakers/Tardor.jpg",
      "__v": 0,
      "studentId": [
      {
        "_id": "5a09d4c361476d1c04c02a4d",
        "name": "Pepito",
        "address": "C/Aragón",
        "__v": 0,
        "phone": {
          "home": "101010101",
          "work": "010101010"
        }
      }
    ]
    },
    {
      "_id": "5a09d4ff61476d1c04c02a4e",
      "name": "IOT",
      "quatri": "Primavera",
      "studies": "Telematica",
      "profilePic": "assets/img/speakers/Tardor.jpg",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09d50c61476d1c04c02a4f",
      "name": "XT",
      "quatri": "Tardor",
      "studies": "Telematica",
      "profilePic": "assets/img/speakers/Tardor.jpg",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09d51861476d1c04c02a50",
      "name": "RF",
      "quatri": "Tardor",
      "profilePic": "assets/img/speakers/Tardor.jpg",
      "studies": "Telecomunicacions",
      "__v": 0,
      "studentId": [
      {
        "_id": "5a09d4c361476d1c04c02a4d",
        "name": "Pepito",
        "address": "C/Aragón",
        "__v": 0,
        "phone": {
          "home": "101010101",
          "work": "010101010"
        }
      }
    ]
    },
    {
      "_id": "5a09d52d61476d1c04c02a51",
      "name": "OESC",
      "quatri": "Primavera",
      "studies": "Telecomunicacions",
      "__v": 0,
      "studentId": [
      {
        "_id": "5a09d4c361476d1c04c02a4d",
        "name": "Pepito",
        "address": "C/Aragón",
        "__v": 0,
        "phone": {
          "home": "101010101",
          "work": "010101010"
        }
      }
    ]
    },
    {
      "_id": "5a09e2e2f4c91f22c8cf6b51",
      "name": "AES",
      "quatri": "Primavera",
      "studies": "Agricultura",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09e2eaf4c91f22c8cf6b52",
      "name": "AES",
      "quatri": "Tardor",
      "studies": "Agricultura",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09e2fff4c91f22c8cf6b53",
      "name": "EF",
      "quatri": "Tardor",
      "studies": "Aeronàutica",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09e304f4c91f22c8cf6b54",
      "name": "EF",
      "quatri": "Primavera",
      "studies": "Aeronàutica",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09e30af4c91f22c8cf6b55",
      "name": "TB",
      "quatri": "Primavera",
      "studies": "Aeronàutica",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09e315f4c91f22c8cf6b56",
      "name": "CF",
      "quatri": "Tardor",
      "studies": "Aeronàutica",
      "__v": 0,
      "studentId": []
    },
    {
      "_id": "5a09e66f7b962920d4834e87",
      "name": "TR",
      "quatri": "primavera",
      "studies": "Telematica",
      "__v": 0,
      "studentId": []
    }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
