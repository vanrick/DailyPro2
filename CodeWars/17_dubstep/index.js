function dubStep(song){
  let splitSong = song.split(' ')
  let remix = ''
  for (var i = 0; i < splitSong.length; i++) {
    if (i === 0) {
      remix += 'WUBWUB'+splitSong[i]
    }else if(i == splitSong.length-1) {
      remix += 'WUBWUB'+splitSong[i]
    }else {
      remix += "WUB"+splitSong[i]
    }
  }
  console.log(remix);
  return remix
}

dubStep('I AM X AND I LOVE GIRLS')
