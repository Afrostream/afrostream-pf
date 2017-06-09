module.exports = {
  port: 4001,

  basicAuth: {
    user: 'afrostream',
    password: 'r4nd0mt0k3n'
  },

  // you cannot connect to p-afsmsch-001.afrostream.tv:3306
  //  because of a firewall.
  // if you want to test the connexion in DEV environment, you should
  //  port forward mysql 3306 port to your local host using SSH.
  // marc@VirtualBox:~$ ssh -L 39201:localhost:3306 ubuntu@p-afsmsch-001.afrostream.tv
  // marc@VirtualBox:~$ telnet localhost 39201
  // Trying 127.0.0.1...
  // Connected to localhost.
  // Escape character is '^]'.
  // [
  // 5.5.44-0ubuntu0.14.04.1(...)mysql_native_password
  sequelize: {
    uri: 'mysql://root:s6r3S44576s9Aj2c@localhost:39201/video_encoding',
    options: {
      logging: console.log,
      timestamp: false
    }
  }
};
