
//Teacher has option to approve all messages before they go in the classroom by clicking button to right of message
if (Meteor.isClient) {
  Template.teacherClient.lines = function () { 
    return Posts.find({}, {sort : {timestamp: 1}}).fetch();
  }
      

  Template.teacherClient.events({
      'click .approveMessage': function(){     
        Posts.update(this._id, {$set:{flagged:true}});   
      }
  
  });
}
