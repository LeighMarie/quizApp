if (Meteor.isClient) {
  Template.classroomClient.lines = function () { 
    //css does nice formatting
    //-1 for descending order, (+)1 for ascending order
    //REACTIVITY: always refreshes so automatically displays stuff inserted into Posts
    // FIND IS A FILTER!!! 
    return Posts.find({flagged: true}).fetch();
  }
      
}