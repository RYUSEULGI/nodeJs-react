const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        }
    )
);
// passport.use(
//     new GithubStrategy(
//         {
//             clientID: keys.githubClientID,
//             clientSecret: keys.githubClientSecret,
//             callbackURL: '/auth/github/callback',
//         },
//         (token) => console.log(token)
//     )
// );