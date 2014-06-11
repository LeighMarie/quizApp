Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
  function getCurrentUser () 
  {
    //return Meteor.user().emails[0].address.split("@")[0]; 
      return "Lemur";
  }
  
  function studentSend()
  {
      var currentUser =  getCurrentUser(); 
      //$ means jquery, #(id) of text area
      var currentMessageContentObject = $('#userMessageTextarea');
      var currentMessageContent = currentMessageContentObject.val();
      
      if (true)
      { 
        Posts.insert({messageContent: currentMessageContent, username: currentUser, timestamp: (new Date()).getTime(), flagged: false});
      }
      
      //val() gets and sets
      $('#userMessageTextarea').val("");
  }

  Template.studentClient.events({
    'click #sendMessage': function () {            
      studentSend();
    },
    
    'keydown #userMessageTextarea': function(keypressed)
    {
        //enter is key 13
        if(keypressed.which == 13){
            event.preventDefault();
           //just to check... good to do this with everything
           //console.log('enter'); 
            studentSend();
        }
    }    
  });
}





