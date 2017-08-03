function chessBoard(){
  let hash = '# # # #'
  for (var i = 0; i < 8; i++) {
    if (i % 2 == 0) {
      console.log(' '+hash);
    }else {
      console.log(hash+' ');
    }
  }
}

chessBoard()
