/*
 *  Project: PIMCORE Toolbox
 *  Extension: Google Analytics Opt Out Link
 *  Version: 2.4
 *  Author: DACHCOM.DIGITAL
 *  License: GPL-3.0-or-later
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jQuery));
}(this, (function (exports, $) { 'use strict';

    function ToolboxGoogleOptOutLink(element, options) {
        this.$element = $(element);
        this.options = $.extend(true, $.fn.toolboxVideo.defaults, options);
        this.translations = window['toolboxJsFrontend'] ? window['toolboxJsFrontend']['translations'] : {};
        this.init();
    }

    $.extend(ToolboxGoogleOptOutLink.prototype, {

        editMode: false,

        init: function () {

            var _ = this;
            this.editMode = this.options.editmode;

            if (this.editMode == true) {
                return;
            }

            if (_.readCookie('tb-google-opt-out-link') !== null) {
                _.$element.addClass('disabled');
            }

            _.$element.on('click', function (ev) {
                ev.preventDefault();
                if (_.readCookie('tb-google-opt-out-link') !== null) {
                    _.notify(_.translations['toolbox.goptout_already_opt_out']);
                } else {
                    _.createCookie('tb-google-opt-out-link', $(this).attr('name'), 999);
                     _.notify(_.translations['toolbox.goptout_successfully_opt_out']);
                    $(this).addClass('disabled');
                }
            });
        },

        notify: function (message) {
            if (typeof this.options.notify === 'function') {
                this.options.notify.call(undefined, message);
            } else {
                alert(message);
            }
        },

        readCookie: function (name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        createCookie: function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = '; expires=' + date.toGMTString();
            }
            else var expires = '';
            document.cookie = name + '=' + value + expires + '; path=/';
        }
    });

    $.fn.toolboxGoogleOptOutLink = function (options) {
        var els = [];
        this.each(function (i) {
            if (!$.data(this, 'tb-ext-google-opt-out-link')) {
                $.data(this, 'tb-ext-google-opt-out-link', new ToolboxGoogleOptOutLink(this, options));
            }
        });

        return this;
    };

    $.fn.toolboxGoogleOptOutLink.defaults = {
        editmode: false,
        notify: null
    };

})));

