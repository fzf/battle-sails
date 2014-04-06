/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
	if(req.isSocket)
	{
		if(req.session &&
		req.session.passport &&
		req.session.passport.user)
		{
			return next();
		}

		res.json(401);
	}
	// HTTP
	else
	{
		if(req.isAuthenticated())
		{
			return next();
		}

                // If you are using a traditional, server-generated UI then uncomment out this code:
                /*
                res.redirect('/login');
                */

                // If you are using a single-page client-side architecture and will login via socket or Ajax, then uncomment out this code:
                /*
                res.status(401);
                res.end();
                */
	}
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
