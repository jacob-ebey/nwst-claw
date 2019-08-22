export const createLoginCallback = (success, failure) => (event) => {
	event.preventDefault();

	FB.login(
		function(response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');

				Promise.all([
					new Promise((resolve) =>
						FB.api('/me', function(response) {
							if (!response || response.errors) {
								resolve();
							} else {
								resolve(response);
							}
							console.log('Good to see you, ' + response.name + '.');
						})
					),

					new Promise((resolve) =>
						FB.api('/me/groups', function(response) {
							if (!response || response.errors) {
								resolve();
							} else {
								resolve(response && response.data);
							}
						})
          ),
          
          new Promise((resolve) =>
						FB.api('/308324679348785/events', function(response) {
							if (!response || response.errors) {
								resolve();
							} else {
								resolve(response && response.data);
							}
						})
					)
				])
					.then(([ me, groups, events ]) => {
						const nwst = groups.find((group) => group.id === '308324679348785');
						if (me && nwst) {
							return success({
                ...me,
                nwst: {
                  ...nwst,
                  events
                }
              });
						}
					})
					.catch(() => failure && failure());
			} else {
				failure && failure();
				console.log('User cancelled login or did not fully authorize.');
			}
		},
		{
			scopes: 'groups_access_member_info'
		}
	);
};
