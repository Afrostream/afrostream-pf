const express = require('express');
const router = express.Router();
const genericController = require('./generic.controller');

const sqldb = rootRequire('sqldb');

const Q = require('q');

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

router.get('/uploadToBouyguesSFTP', noCache, (req, res) => {
  Q()
    .then(() => {
      if (!req.query.contentId) throw new Error('missing contentId');
      const contentId = parseInt(req.query.contentId);
      if (isNaN(contentId)) throw new Error('contentId should be numeric');
      return sqldb.Content.find({
        where:{contentId: contentId},
        include: [
          {
            model: sqldb.Asset,
            as: 'assets',
            required: false
          }
        ]
      });
    })
    .then(content => {
      if (!content) throw new Error('content not found');
      // bouygues ingrid assets ... hardcoded ... FIXME :(
      // the old method was to handcraft a SQL query :
      // UPDATE assets SET state='scheduled' WHERE presetId IN ('11','16','41','43') AND contentId=(SELECT contentId FROM contents WHERE uuid='$i')
      if (!Array.isArray(content.assets)) throw new Error('content.assets should be an array');
      const assets = content.assets.filter(asset => [11, 16, 41, 43].indexOf(asset.presetId) !== -1);
      if (assets.length > 4) throw new Error('shouldnt have that many assets ??? - security break');
      return Q.all(
        assets.map(asset => {
          console.log(`[INFO]: updating contentId ${req.query.contentId} assetId ${asset.assetId} => state=scheduled`);
          return asset.update({state:'scheduled'});
        })
      );
    })
    .then(assets => res.json(assets))
    .catch(res.handleError());
});

router.get('/updateAssetState', noCache, (req, res) => {
  Q()
    .then(() => {
      if (!req.query.assetId) throw new Error('missing assetId');
      if (!req.query.state) throw new Error('missing state');
      // first, read the asset
      return sqldb.Asset.findOne({where:{assetId: req.query.assetId}});
    })
    .then(asset => {
      if (!asset) throw new Error('asset not found');
      return asset.update({state: req.query.state});
    })
    .then(asset => res.json(asset))
    .catch(res.handleError());
});

router.get('/updateContentState', noCache, (req, res) => {
  Q()
    .then(() => {
      if (!req.query.contentId) throw new Error('missing contentId');
      if (!req.query.state) throw new Error('missing state');
      // first, read the asset
      return sqldb.Content.findOne({where:{contentId: req.query.contentId}});
    })
    .then(content => {
      if (!content) throw new Error('content not found');
      return content.update({state: req.query.state});
    })
    .then(asset => res.json(asset))
    .catch(res.handleError());

});

module.exports = router;
