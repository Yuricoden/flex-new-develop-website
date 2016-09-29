'use strict';

module.exports = function () {
    $.gulp.task('svgSprite', function () {
        var config = {
            mode: {
                symbol: {
                    dest: '.',
                    sprite: 'sprite.svg'
                }
            },
            shape: {
                spacing: {
                    padding: 0,
                    box: 'content'
                }
            }
        };
        return $.gulp.src('./source/sprites/svg/*.svg')
            .pipe($.gp.svgSprite(config))
            .pipe($.rsp.remove({ properties: [$.rsp.PROPS_FILL] }))
            .pipe($.gulp.dest($.config.root + '/assets/icons'))
    });
};
