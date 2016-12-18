var module = angular.module('app.mocks', [])

module.value('Mock', {
   activities: [
   	{
         id: 1,
         pin : "1234",
   		title: "กิจกรรมปีใหม่",
   		date: moment('25-02-2016', 'DD-MM-yy').format(),
         candidates : [
            {date: moment().format(), code : "5610110206", name : "Thanaporn Nuhwilai"},
            {date: moment().format(), code : "5610110456", name : "Lacika Losuvalna"},
            {date: moment().format(), code : "5610110444", name : "Tossapol Tonglim"},
         ],
   		registors :[
   			{code : "5610110206", name : "Thanaporn Nuhwilai"},
   			{code : "5610110456", name : "Lucika Losuvalna"},
   			{code : "5610110123", name : "John Doe"},
   			{code : "5610110222", name : "Micheal Johnson"},
            {code : "5610110392", name : "Pharanyu Changsan"},
            {code : "5610110534", name : "Suphanan Raksasri"}
   		] 
   	},
      {  
         id: 2,
         pin : "1234",
         title: "ศรีตรังเกมส์",
         date: moment('24-02-2016', 'DD-MM-yy').format(),
         candidates : [],
         registors :[
            {code : "5610110110", name : "Chananshita Sakulphan"},
            {code : "5610110119", name : "Tossapol Tonglim"},
            {code : "5610110206", name : "Thanaporn Nuhwilai"},
            {code : "5610110456", name : "Lucika Losuvalna"},
            {code : "5610110123", name : "John Doe"},
            {code : "5610110222", name : "Micheal Johnson"}
         ] 
      },
      {
         id: 3,
         pin : "1234",
         title: "กิจกรรมไหว้ครู",
         date:  moment('01-02-2016', 'DD-MM-yy').format(),
         candidates : [],
         registors :[
            {code : "5610110070", name : "Jaturong Reungsak"},
            {code : "5610110392", name : "Pharanyu Changsan"},
            {code : "5610110534", name : "Suphanan Raksasri"},
            {code : "5610110206", name : "Thanaporn Nuhwilai"},
            {code : "5610110456", name : "Lucika Losuvalna"},
         ] 
      },
      {
         id: 4,
         pin : "1234",
         title: "กิจกรรมกีฬาสี",
         date:  moment('01-02-2016', 'DD-MM-yy').format(),
         candidates : [],
         registors :[
            {code : "5610110355", name : "Plawit Palasak"},
            {code : "5610110534", name : "Suphanan Raksasri"},
            {code : "5610110206", name : "Thanaporn Nuhwilai"},
            {code : "5610110456", name : "Lucika Losuvalna"},
            {code : "5610110123", name : "John Doe"},
            {code : "5610110222", name : "Micheal Johnson"},
         ] 
      },
      {
         id: 5,
         pin : "1234",
         title: "กิจกรรมทำความสะอาด",
         date:  moment('01-02-2016', 'DD-MM-yy').format(),
         candidates : [],
         registors :[
            {code : "5610110076", name : "Jariwat Hiranwiriya"},
            {code : "5610110355", name : "Plawit Palasak"},
            {code : "5610110534", name : "Suphanan Raksasri"},
            {code : "5610110206", name : "Thanaporn Nuhwilai"},
            {code : "5610110456", name : "Lucika Losuvalna"},
            {code : "5610110539", name : "Chairat Sukaphan"},
            {code : "5610110679", name : "Anchan Sripanurak"},
         ] 
      },
   ]
})