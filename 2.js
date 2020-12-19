const cekNilai = (n) => {
  const rata = n.reduce((a, b) => a + b) / n.length;
  const lulus = n.filter((l) => l >= 65);
  const tidak = n.filter((t) => t < 65);
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= 65) {
      console.log(`Nilai ${n[i]} => Lulus`);
    } else {
      console.log(`Nilai ${n[i]} => Tidak Lulus`);
    }
  }
  console.log("====================================");
  console.log(`Jumlah Nilai yang disubmit : ${n.length}`);
  console.log(`Rata-rata Nilai : ${rata.toFixed(1)}`);
  console.log(`Lulus : ${lulus.length}`);
  console.log(`Tidak Lulus : ${tidak.length}`);
  console.log("====================================");
};

cekNilai([20, 50, 65, 70, 80, 80, 30, 55, 75]);
