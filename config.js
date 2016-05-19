import config from 'afrostream-node-config';

config.set('development', 'ip', process.env.IP);
config.set('development', 'port', process.env.PORT || 12000);

export default config.get();