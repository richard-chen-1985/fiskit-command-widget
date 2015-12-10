/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

exports.name = 'widget';
exports.desc = 'create a widget';
exports.register = function(commander){
    commander
        .option('-c, --create <name>', 'create a widget', String)
        .action(function(){

            var options = arguments[arguments.length - 1];

            if(options.create) {
                createWidget(options.create);
            }
        });
};

function createWidget(widgetName) {
    var util = fis.util;
    var log = fis.log;
    var root = fis.project.getProjectPath();
    var dir = root + '/' + widgetName;
    var files = [
        dir + '/' + widgetName + '.vm',
        dir + '/' + widgetName + '.js',
        dir + '/' + widgetName + '.css',
        dir + '/' + widgetName + '.mock'
    ];
    if(util.exists(dir)) {
        log.warn('widget [' + widgetName + '] is exist.');
    } else {
        for(var i = 0; i < files.length; i++) {
            util.write(files[i], '');
        }
        log.info('widget [' + widgetName + '] is created.');
    }
}