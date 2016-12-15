var module = angular.module('app.mocks', [])

module.value('Mock', {
   activities: [
   	{
         id: 1,
   		title: "COM 4 - 5 MAJOR",
   		date: "02-02-2017",
         candidates : [],
   		registors :[
   			{code : "5610110206", name : "Thanaporn Nuhwilai"},
   			{code : "5610110456", name : "Lucika Losuvalna"},
   			{code : "5610110123", name : "John Doe"},
   			{code : "5610110222", name : "Micheal Johnson"},
   		] 
   	},
      {  
         id: 2,
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