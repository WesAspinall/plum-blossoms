angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function($firebaseRefProvider) {

    var config = {
      apiKey: "AIzaSyDCndJeuy_iDMwR4ztx3oSEzTVaVs-1IXk",
      authDomain: "miami-self-defense.firebaseapp.com",
      databaseURL: "https://miami-self-defense.firebaseio.com",
      storageBucket: "miami-self-defense.appspot.com",
      messagingSenderId: "542493805217"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });

    firebase.initializeApp(config);
  })
  .run(function($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function(state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(function() {
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });