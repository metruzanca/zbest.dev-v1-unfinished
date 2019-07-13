const plan = require('flightplan');
const user = 'metru';
const tmpDir = 'zbest.dev-' + new Date().getTime();
const appName = 'zbest.dev';

// plan.target('staging', {
//   host: 'staging.example.com',
//   username: 'pstadler',
//   agent: process.env.SSH_AUTH_SOCK
// });
 
plan.target('production', [
  {
    host: 'zbest.dev',
    username: user,
    agent: process.env.SSH_AUTH_SOCK
  },
// If you have more servers add here
  // {
  //   host: 'www2.example.com',
  //   username: 'pstadler',
  //   agent: process.env.SSH_AUTH_SOCK
  // }
]);
 
plan.local(local =>  {
  local.log('Building React production build...');
  local.exec('sudo npm run build', {silent: true});
 
  local.log('Copying files to remote host');
  // find build will get all filepaths of anything inside the build folder
  const filesToCopy = local.exec('find build/', {silent: true});
  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, `/tmp/${tmpDir}`);
});
 
plan.remote(remote => {

  remote.log('Move folder to web root');
  remote.sudo(`cp -R /tmp/${tmpDir} ~/`, {user: user, silent: true});
  remote.rm(`-rf /tmp/${tmpDir}`);
 
  // remote.log('Reload application');
  remote.sudo(`ln -snf ~/${tmpDir} zbest.dev/`, {user: user, silent: true});
  // remote.sudo('pm2 reload example-com', {user: user});
});
 
plan.local(local => {
      local.log('Done! http://zbest.dev/');
});
// plan.remote( remote => {});