const od1 = 'https://rain.okta1.com';
const od = 'https://ganeshtest2.trexcloud.com/';

const signIn = new OktaSignIn({
  "baseUrl": od,
  "logoText": "Windico",
  "language": "zh-CN",
  "features": {
    "securityImage": true,
    "router": true,
    "rememberMe": true,
  },
  "idps": [
    { "id": "aaa", "type": "facebook" },
    { "id": "bbb", "type": "google" }
  ],
  "assets": {
    // "baseUrl": "https://globaltrex.oktacdn.com/okta-signin-widget/2.20.1"
    "baseUrl": "https://global.oktacdn.com/okta-signin-widget/2.20.1/"
    // "baseUrl": "https://d1ril57tlz9ev4.cloudfront.net/okta-signin-widget/2.20.1"
  }
});

const successFn = (resp) => {
  console.log(resp);
  if (resp.session && resp.status === 'SUCCESS') {
    resp.session.setCookieAndRedirect(od);
  }
};

signIn.renderEl(
  {el: '#main'},
  successFn,
);
