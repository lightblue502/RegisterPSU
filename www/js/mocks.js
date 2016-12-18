var module = angular.module('app.mocks', [])

module.value('Mock', {
   activities: [
   	{
         id: 1,
         pin : "1234",
   		title: "COM 4 - 5 MAJOR",
   		date: "02-02-2017",
         candidates : [
            {date: moment().format(), code : "5610110206", name : "Thanaporn Nuhwilai"},
            {date: moment().format(), code : "5610110333", name : "Thanaporn Nuhwilai2"},
            {date: moment().format(), code : "5610110444", name : "Thanaporn Nuhwilai3"},
         ],
   		registors :[
   			{code : "5610110206", name : "Thanaporn Nuhwilai"},
   			{code : "5610110456", name : "Lucika Losuvalna"},
   			{code : "5610110123", name : "John Doe"},
   			{code : "5610110222", name : "Micheal Johnson"},
   		] 
   	},
      {  
         id: 2,
         pin : "1234",
         title: "DONGYANG",
         date: "01-02-2017",
         candidates : [],
         registors :[
            {code : "5610110206", name : "Thanaporn Nuhwilai"},
            {code : "5610110456", name : "Lucika Losuvalna"},
            {code : "5610110123", name : "John Doe"},
            {code : "5610110222", name : "Micheal Johnson"},
         ] 
      },
      {
         id: 3,
         pin : "1234",
         title: "COE activity",
         date: "01-02-2017",
         candidates : [],
         registors :[
            {code : "5610110206", name : "Thanaporn Nuhwilai"},
            {code : "5610110456", name : "Lucika Losuvalna"},
            {code : "5610110123", name : "John Doe"},
            {code : "5610110222", name : "Micheal Johnson"},
         ] 
      },
   ]
})