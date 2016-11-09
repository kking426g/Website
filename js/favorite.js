$(function(){
  // ocmsite.game.loadFavGame(0,100,function(data){
  //     if (data) {
  //         console.log(data);
  //         var container = $(".sys_fav_container");
  //         var prefab = $(".sys_fav_item");
  //         data.forEach(function (game) {
  //             console.log('game');
  //             console.log(game);
  //             var newview = prefab.clone();
  //             var pitem = newview.find(".pitem");
  //             var pimg = newview.find('.pimg');
  //             var title = pimg.find('h3');
  //             var img = pimg.find('img');
  //
  //             newview.data("sys-gameid", game.gameInfoId);
  //
  //
  //             $(img).attr('src', game.game_img);
  //             if (game.is_fav ) {
  //
  //             } else {
  //                 newview.find('.btn_fav').addClass('gray');
  //             }
  //
  //             if (game.info.newest) {
  //                 pitem.addClass('new');
  //             }
  //             if (game.info.hot) {
  //                 pitem.addClass('hot');
  //             }
  //             if (game.gamePlatform.gamePlatformId != 1) {
  //                 newview.find('.btn_pfun').hide();
  //             }
  //
  //
  //
  //             pimg.click(function () {
  //                 var vh = $("#gamelist .game").height();
  //                 (vh > 0)? $("#gamelist .game").height(vh):"";
  //                 /*上面二行是防止跑位*/
  //                 $("#gamelist .game .pitem").removeClass("view");
  //                 $(this).parents(".pitem").addClass("view");
  //
  //             });
  //
  //             $(title).html(game.displayName);
  //             newview.show();
  //
  //             $(container).append(newview);
  //             pitem.data('sys-gameid',game.gameInfoId);
  //             $GameShow();
  //         })
  //     }
  // });
})
