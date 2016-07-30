/**
 * Created by winty.chou on 2016/7/6.
 */
angular.module('starter.directives', [])

.directive('emoji',function(){
    return {
        restrict:'AE',
        scope: false,
        scope:{
            messages:'=',
            flag:'=',
            getEmoji:'&getEmoji'
        },
        template:'<div ng-show="flag">'+
        '<ion-slide-box>'+
        '<ion-slide>'+
        ' <div class="emoji-area">'+
        '<span class="emoji-triangle"></span>'+
        '<ul>'+
        '<i ng-repeat="emo in messages.slice(0,34)" ng-click="getEmoji({emo:emo})" ng-bind-html="emo | emoji">'+
        '</i>'+
        '</ul>'+
        '</div>'+
        '</ion-slide>'+
        '<ion-slide>'+
        ' <div class="emoji-area">'+
        '<span class="emoji-triangle"></span>'+
        '<ul>'+
        '<i ng-repeat="moji in messages.slice(35,67)" ng-click="getEmoji({emo:moji})" ng-bind-html="moji | emoji">'+
        '</i>'+
        '</ul>'+
        '</div>'+
        '</ion-slide>'+
        '<ion-slide on-slide-changed="slideHasChanged(index)">'+
        ' <div class="emoji-area">'+
        '<span class="emoji-triangle"></span>'+
        '<ul>'+
        '<i ng-repeat="mojiji in messages.slice(68,83)" ng-click="getEmoji({emo:mojiji})" ng-bind-html="mojiji | emoji">'+
        '</i>'+
        '</ul>'+
        '</div>'+
        '</ion-slide>'+
        '</ion-slide-box>'+
        '</div>',
        replace:true,
        transclude:true
    }
})