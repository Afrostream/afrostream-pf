module.exports = {
  port: 4042,

  basicAuth: {
    user: 'afrostream',
    password: 'r4nd0mt0k3n'
  },

  sequelize: {
    uri: 'mysql://root:s6r3S44576s9Aj2c@localhost:3306/video_encoding',
    options: {
      logging: console.log,
      timestamp: false
    }
  }
};
