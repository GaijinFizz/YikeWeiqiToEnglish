// ==UserScript==
// @name         YikeWeiqiToEnglish
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Translate YikeWeiqi to English
// @match        https://home.yikeweiqi.com/
// @grant        none
// @require https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
(function() {
    'use strict';
     $(document).ready(function() {
         setTimeout(function(){   // Set 5s timeout because buttons are sometimes not loaded yet, also YikeWeiqi does replace some button texts itself beforehand...

             // Simple buttons across the website
             $('span').each(function() {
                 switch($(this).text().trim()) {
                     case '确定':
                         $(this).text('OK');
                         break;
                     case '取消':
                         $(this).text('Cancel');
                         break;
                     case '执黑':
                         $(this).text('Black');
                         break;
                     case '执白':
                         $(this).text('White');
                         break;
                     case '积分':
                         $(this).text('Rated');
                         break;
                     case '非积分':
                         $(this).text('Non Rated');
                         break;
                 }
             });


             // Navigation - top level
             $('.ivu-menu-item').each(function() {
                 switch($(this).text().trim()) {
                     case '对弈':
                         $(this).text('Games');
                         break;
                     case '直播':
                         $(this).text('Live Broadcast');
                         break;
                     case '赛事':
                         $(this).text('Tournaments');
                         break;
                     case '弈闻':
                         $(this).text('Go news');
                         break;
                     case '鹰眼市场':
                         $(this).text('Hawkeye Market (AI)');
                         break;
                     case '我的棋谱':
                         $(this).text('My Game Records');
                         break;
                     case '线下赛事报名':
                         $(this).text('Offline Events Registration');
                         break;
                     case '下载App':
                         $(this).text('Download App');
                         break;
                     case '智能棋盘':
                         $(this).text('Electronic Board');
                         break;
                     case '购买棋盘':
                         $(this).text('Buy Board');
                         break;
                     case '下载连接器':
                         $(this).text('Download Connector');
                         break;
                 }
             });

             // Custom game menu
             $('div.tiny_title').each(function() {
                 switch($(this).text().trim()) {
                     case '玩法':
                         $(this).text('Game Type');
                         break;
                     case '棋盘路数':
                         $(this).text('Board Size');
                         break;
                     case '休息时间':
                         $(this).text('Pause');
                         break;
                     case '让子规则':
                         $(this).text('Handicap');
                         break;
                     case '时间规则':
                         $(this).text('Timer');
                         break;
                     case '执子颜色':
                         $(this).text('My Color');
                         break;
                     case '是否积分':
                         $(this).text('Rated?');
                         break;
                 }
             });
             $('.ivu-select-selected-value').each(function() {
                 switch($(this).text().trim()) {
                     case '中国规则':
                         $(this).text('Chinese Rules');
                         break;
                     case '天弈规则':
                         $(this).text('Sky Go Rules');
                         break;
                 }
             });
             $('.ivu-select-item').each(function() {
                 switch($(this).text().trim()) {
                     case '中国规则':
                         $(this).text('Chinese Rules');
                         break;
                     case '天弈规则':
                         $(this).text('Sky Go Rules');
                         break;
                 }
             });


             // Game info
             $('.play_info').each(function() {
                 if ($(this).text().indexOf('提子') !== -1)
                     $(this).text($(this).text().replace(/提/g,'').replace(/子/g,'').replace('：','Prisoners:'));
                 if ($(this).text().indexOf('读秒') !== -1)
                     $(this).text($(this).text().replace('读秒','Byo-yomi').replace('次', 'times left'));
                 if ($(this).text().indexOf('时间') !== -1)
                     $(this).text($(this).text().replace('时间','Main Time'));
             });

             // Review / In game screens
             $('.func_btn').each(function() {
                 switch($(this).text().trim()) {
                     case '保存棋谱':
                         $(this).text('Save Game');
                         break;
                     case '形势判断':
                         $(this).text('Basic Estimator');
                         break;
                     case '试下':
                         $(this).text('Try Variations');
                         break;
                     case '手数显示':
                         $(this).text('Move Number');
                         break;
                     case '发起申诉':
                         $(this).text('File an Appeal'); // Moderation ?
                         break;
                     case '校准棋盘':
                         $(this).text('Calibrate Board'); // Test board ?
                         break;
                     default:
                         if ($(this).text().indexOf('胜率判断 ') !== -1 || $(this).text().indexOf('局面判断 ') !== -1) // depending on mode (player/watcher) naming is different?
                             $(this).text($(this).text().replace('胜率判断','AI Estimator').replace('局面判断','AI Estimator')); // 'Advanced' won't fit
                         if ($(this).text().indexOf('支招') !== -1)
                         {
                             $(this).text($(this).text().replace('支招','Hint'));
                             $(this).prepend('<img data-v-9887b93a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFBElEQVRoQ+1YS29bRRT+7ozfiZM475DgktpFBGhxnAUiPNSyZUEpewgrdpAsKBYLYMHCKQtasUHd0Ip9qfgDpApqF2DHAtGI1sE0CY3zaOzE8dv3DprbXskojzvjB6iSrxRZyj135vvOOd+Zc0bBY/4ojzl+tAj83xFsRaAVgTo90EqhOh1Y9+f/SQQSocBpKArT0TJ2bzQc+6tu5I8WaAqB+PmJswphbwLK2wDc+8GyXQDXCLSro+HYXD1kGkpgKRT8HMAMoHQQQlR7v5tanBZQhxUWh1XHWUznUM4UUUplNU1lhAFzVFVnRr+MxWoh0hACjzx+CVC8ti4n2ka64ew/wPFVCLWyiuzqNrLL25xIloF94A9Hr8iSqJvAQ68rn1E71dzH+4hrqEsKg5ovYfvXVbWcLVGm4S3/hch1mQXqIhAPTVxRgHcdve3oGhsCsVKQvgnQ/gmUf798KI78RgaVbAHFdF63sXU4UEjuaJWimiWq+ppMOtVMwADvHOyE59khEM8YtNSi/qs4e6Hen99HIJPYRHYlBa2i6e+ow6L/qoWKYcsYww/+2chZ0SjURGDpfHAaRPmqfaQLHU8Pwvrc+7rXi7c+ASts7du7nMlj+7e/daBcI66hTlSnGtdDYSuD8k4O2fu7IFBHRUutNAFe0zXQH3nadJ8agS0wo3u9+MsXYJnlA8E/WFgBGNA5NnSkuLke1m/9yc+KS77Z6LRIFKQJLIWCy4SS4f5JP7H63oDVd+5Iz3Pw1G5F96lhUKfNFNNW9B5KqXzMNxsZNzUG5AaaeCg4pUD5tmtsUE8Bx5nLKP/x3YH5ztNi8+cEWFlD/6RPF7jIs3snib3VNHzhiJBzhYyMjbn3qd0yPPDyCcL/Zwj3IGBcsJnEA/SOPwmbp00Eu25jfNdwAomPAgGN0gXD+2aIkjfuwOZx6TqReQwCokIWjoBRNgdfPWGaDqVUFlsLKxAlW02waQSWPg7GbB7XC73BY6YONUAMvHRcSLjVCzZNA0uhCWbUfTMGBoEnXn/GzHTfe16FiuncDX84elrkY6EUMvLfPdoD92if6bqp22vIJ3cgS4BXruT83cafA8bhJUqAe1EtlDEw6TclW22wt7yN3fgGiKqOi/ZDYhGYDnRpDpqSIcCBieilmsD6T3eZWqqs+sJRryhzIQJ8MVENGGkgqhcDaG4tjfRiEgzsPZm5QJyAYBUygHieHzYdagzwnPTGzTgfbG77wpGTot7ndjIELkJRPjQrjes34/r+Mvmv9z/pPO9Cz8jOyMIEEqHAUxpo4igdGOVT5gAz6j40NuO7EL0o432pCHDjeCg4Ryl5pSfopVa38197Gacv7/dFxWuUWwZc9YcjU7LgpQnw80CldN7Wbnf2jHup0WHygcVom3uCXtNWg+d8enENha09PibUDF6agB4F/c4H31vb7Wr3yWHKr0l49eDjYe+417R14CLPJDY1taCSWtOmOlLCGqj+iM8FgPI1UdDGGBSLy4beiWOHev7hyLiHXHIHpVSOX8+tEGjvyAr2oBSriQBfSG8vCPkGwIvEQjSbp41Y3XbYPS59n0q+ArVQ0i+xOHj+MIaMwtintYj1MH3UTMBYkLcZKugUGM4pyv5rRA4aCq5Bw3XZOx8RUddNoHoTXmoB8D/9aUSKmJFoKAGzzZrxvkWgGV6VWbMVARlvNcO2FYFmeFVmzVYEZLzVDNt/AEX6SU8iFIcUAAAAAElFTkSuQmCC" class="bean_icon">');
                         }

                 }
             });

             // Game list screen
             $('p').each(function() {
                 switch($(this).text().trim()) {
                     case '快棋':
                         $(this).text('Blitz');
                         break;
                     case '10分 30秒 3次':
                         $(this).text('10min + 3x30s');
                         break;
                     case '慢棋':
                         $(this).text('Correspondence');
                         break;
                     case '一周完赛':
                         $(this).text('1 Week absolute time');
                         break;
                     case '天弈':
                         $(this).text('Sky Go (Start with 2 random stones)');
                         break;
                     case '9路':
                         $(this).text('9x9');
                         break;
                     case '30秒 3次':
                         $(this).text('3x30s');
                         break;
                     case '更多':
                         $(this).text('Other...');
                         break;
                     case '全部匹配规则':
                         $(this).text('All game types...');
                         break;
                     case '自定义':
                         $(this).text('Custom');
                         break;

                 }
             });

         }, 5000);
     });
})();