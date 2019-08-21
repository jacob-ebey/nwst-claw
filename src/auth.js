export const createLoginCallback = (success, failure) => (event) => {
	event.preventDefault();

	FB.login(function(response) {
		if (response.authResponse) {
			console.log('Welcome!  Fetching your information.... ');
			FB.api('/me', function(response) {
				success && success(response);
				console.log('Good to see you, ' + response.name + '.');
			});
		} else {
			failure && failure();
			console.log('User cancelled login or did not fully authorize.');
		}
	});
};
