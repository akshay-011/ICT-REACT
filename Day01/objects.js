const person = {
    name:"Akshay Kumar",
    age:19,
    address:{
        houseName:"Parakudy(H)",
        po:"Rayamangalam(po)",
        place:"Kuruppampady"
    },

};
let ad = `${person.address.houseName}\n${person.address.po}\n${person.address.place}`

console.log(ad);