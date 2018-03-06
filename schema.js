const Joi = require('joi');

// Schema Configuration
// required:
// * imports.whosonfirst.datapath (string)
//
// optional:
// * imports.whosonfirst.importVenues (boolean) (default: false)
// * imports.whosonfirst.importPostalcodes (boolean) (default: false)
// * imports.whosonfirst.importPlace (string) (default: none)
// * imports.whosonfirst.api_key (string) (default: none)
// * imports.whosonfirst.missingFilesAreFatal (boolean) (default: false)
// * imports.whosonfirst.sqliteDatabases array of objects containing filename (optional)

module.exports = Joi.object().keys({
  imports: Joi.object().keys({
    whosonfirst: Joi.object().keys({
      datapath: Joi.string(),
      importPlace: Joi.number().integer(),
      api_key: Joi.string(),
      importVenues: Joi.boolean().default(false).truthy('yes').falsy('no').insensitive(true),
      importPostalcodes: Joi.boolean().default(false).truthy('yes').falsy('no').insensitive(true),
      missingFilesAreFatal: Joi.boolean().default(false).truthy('yes').falsy('no').insensitive(true),
      sqliteDatabases: Joi.array().items(Joi.object().keys({
        filename: Joi.string()
      }).requiredKeys('filename').unknown(true)),
    }).requiredKeys('datapath').unknown(false)
  }).requiredKeys('whosonfirst').unknown(true)
}).requiredKeys('imports').unknown(true);
