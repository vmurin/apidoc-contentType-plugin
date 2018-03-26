var app = {};

module.exports = {

    init: function(_app) {
        app = _app;

        app.parsers.contenttype = {
            parse     : parseContentType,
            path      : 'local',
            method    : 'insert'
        };

    }

};




var trim = require('apidoc-core/lib/utils/trim');

function parseContentType(content) {
    var contentType = trim(content);

    if(contentType.length === 0)
        return null;

    return {
        contentType: contentType.replace(/(\s+)/g, '_')
    };
}

