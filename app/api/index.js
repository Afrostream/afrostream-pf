const express = require('express');
const router = express.Router();
const genericController = require('./generic.controller');

const sqldb = rootRequire('sqldb');

const noCache = (req, res, next) => { res.noCache; next(); };

router.get('/assets', noCache, genericController.index({Model: sqldb.Asset}));
router.get('/assets/:id', noCache, genericController.show({Model: sqldb.Asset}));

router.get('/contents', noCache, genericController.index({Model: sqldb.Content}));
router.get('/contents/:id', noCache, genericController.show({Model: sqldb.Content}));

router.get('/encoders', noCache, genericController.index({Model: sqldb.Encoder}));
router.get('/encoders/:id', noCache, genericController.show({Model: sqldb.Encoder}));

router.get('/presets', noCache, genericController.index({Model: sqldb.Preset}));
router.get('/presets/:id', noCache, genericController.show({Model: sqldb.Preset}));

router.get('/profiles', noCache, genericController.index({Model: sqldb.Profile}));
router.get('/profiles/:id', noCache, genericController.show({Model: sqldb.Profile}));

router.get('/subtitles', noCache, genericController.index({Model: sqldb.Subtitle}));
router.get('/subtitles/:id', noCache, genericController.show({Model: sqldb.Subtitle}));

module.exports = router;
