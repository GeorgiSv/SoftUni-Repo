export default function(context){
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        context.username = user.email;
        context.isLogged = true;
        context.userId = user.uid;
        localStorage.setItem('userId', user.uid)
        localStorage.setItem('userEmail',user.email)
        localStorage.setItem('isLogged', true)
      } else {
        // User is signed out.
        context.username = null;
        context.isLogged = false;
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        context.username = null;
        localStorage.setItem('isLogged', false)
      }
    });

    return context.loadPartials({       
      notifications: '../templates/common/notifications.hbs',         
      header: '../templates/common/header.hbs',
      footer: '../templates/common/footer.hbs'
    })
}