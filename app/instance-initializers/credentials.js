export function initialize(applicationInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  applicationInstance.inject('route', 'creds', 'service:credentials');
}

export default {
  name: 'credentials',
  initialize
};
