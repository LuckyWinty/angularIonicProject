angular.module('starter.services', [])

.factory('getData', function ($http,$cacheFactory, $q,$ionicLoading) {
    function showTip() {
        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles" class="spinner-vipRed"></ion-spinner>',
            noBackdrop:true
        });
    }
    function hideTip(){
        $ionicLoading.hide();
    }
    /*获取后台数据服务*/
    return {
        get: function (url, options) {
            var deferred = $q.defer();
            showTip();
            $http.get(url, options).success(function (data) {
                hideTip();
                //$httpDefaultCache.removeAll();
                if (data.Success) {
                    deferred.resolve(data);
                } else {
                    deferred.reject(data.Message);
                }
            }).error(function (data) {
                hideTip();
                deferred.reject(data);
            });
            return deferred.promise;
        },
        formatTime: function (value) {
            if (value != "" && value != undefined) {
                return new Date(parseInt(value.replace("/Date(", "").replace(")/", "").split("+")[0]));
            } return "";
        }
    }
})
.factory('PostData', function ($http, $q) {
    /*前台传数据给后台*/
    return {
        post: function (url, options) {
            var deferred = $q.defer();
            $http.post(url, options).success(function (data) {
                if (data.Result||data.Success) {
                    deferred.resolve(data);
                } else {
                    deferred.reject(data);
                }
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
})
.factory('emojiData',function(){
    var messages = [
        ':angry:',':anguished:',':astonished:',':disappointed:',':blush:',':bowtie:',':cold_sweat:',':confounded:',':confused:' +
        ':cry:',':crying_cat_face:',':relieved:',':satisfied:',':point_up_2:',':relaxed:',':scream:',':scream_cat:',':see_no_evil: ' +
        ':dizzy_face:',':expressionless:',':fearful:',':flushed:',':frowning:',':full_moon_with_face:',':grin:',':grinning:' +
        ':heart_eyes:',':heart_eyes_cat:',':hushed:',':innocent:',':joy:',':joy_cat:',':kissing:',':kissing_cat:',':kissing_heart: ' +
        ':neutral_face:',':open_mouth:',':pensive:',':persevere:',':rage:',':pouting_cat:',':sleeping:',':sleepy:',':smile:' +
        ':kissing_smiling_eyes:',':laughing:',':mask:',':smile_cat:',':smiling_imp:',':smirk:',':smiley:',':smirk_cat:',':sob: ' +
        ' :stuck_out_tongue:',':v:',':weary:',':wink:',':worried:',':yum:',':sweat_smile:',':sweat:',':triumph:',':unamused:',':heart: ' +
        ' :heavy_exclamation_mark:',':stuck_out_tongue_closed_eyes:',':stuck_out_tongue_winking_eye:',':sun_with_face:' +
        ':sunglasses:',':tired_face:',':pill:',':point_up:',':point_down:',':point_left:',':point_right:',':poop:',':pray:',':raised_hands: ' +
        ':tada:',':+1:',':-1:',':balloon:',':bicyclist:',':beer:',':bomb:',':bouquet:',':broken_heart:',':clap:',':crown:',':fire:',':ghost:' +
        ':gift:',':gift_heart: '
    ];
    var service={
        messages:messages
    };
    return service;
})
.factory('serviceURL',function(){
        return serviceUrls={
            "signalRUrl":"http://dev.corp.contoso.com:8012/signalR",
            "messageGroupId" : "646E336F-AC57-4510-AAA9-D31B07D14FC5",
            "pubAccountUrl":"vipoa://rightHeaderMenuImg?Url=http://winty-chou-4.corp.vipshop.com:8787/App/img/portrait.png",
            "servicesCenterUrl":"vipoa://rightHeaderMenuImg?Url=http://winty-chou-4.corp.vipshop.com:8787/App/img/add.png",
            "preURL":""
        }
    })
.factory('tips',function($ionicPopup){
    return {
        showAlert:function(title,template) {
            var alertPopup = $ionicPopup.alert({
                'title':title,
                'template':template
            });
        }
    }
})
;
