var app = new Vue({
  el: '#app',
  data: function() {
    return {
    	userData: {
      	email: '',
        password: '',
        age: 27
      },
      message: 'A new Text',
      sendMail: [],
      gender: 'Male',
      priorities: ['High', 'Medium', 'Low'],
      selectedPriority: 'High'
    }
  }
});