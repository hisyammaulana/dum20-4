const cetakPola = (angka) => {
  for(i= 1; i <= angka; i++){
    for(j = 1; j < i; j++){
      process.stdout.write('*')
    }
    for(k = angka; k > i ; k--){
        process.stdout.write(' ')
    }
    for(l = angka; l > i  ; l--){
        process.stdout.write(' ')
    }
    for(m = 0; m < i; m++){
        process.stdout.write('*')
      }

    process.stdout.write("\n")
  }
}

cetakPola(10)