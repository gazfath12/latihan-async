const melamarfulanah = async (santriProfile) => {
  return new Promise((resolve, reject) => {
    if (!santriProfile.sudah_mandiri) {
      reject("fulanah memiinginkan mandiri");
    }
    if (santriProfile.hafalan_juz < 10) {
    return  reject("ditolak maunya  yang hafalananya banyak ");
    }

    console.log("sifulanah lolos kriteria");

    
    let hari = 0;
    const istiqoroh = setInterval(() => {
      hari++;
      console.log("sifulanah istiqoroh hari ke", hari);
      if (hari >= 7) {
        console.log("si fulanah berhasi istiqoroh");
        const keputusan = true;
        if (keputusan) {
          resolve("si fulan di terima");
        } else {
          resolve("si fulan di tolak");
        }
        clearInterval(istiqoroh)
      }
    },1000);
  });
};


    (async () => {
        try {
          let santri = {
            nama: "gaza",
            hafalan_juz: 30,
            sudah_mandiri: true,
          };
          const hasil = await melamarfulanah(santri);
          console.log("hasil",hasil);
        } catch (error) {
          console.log(error);
        }
        
      })()
    

  

