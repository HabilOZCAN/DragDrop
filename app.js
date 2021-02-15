/**
 * Bu calısmada programın kendi bunyesınde bulunan kelımeler 3 parcaya ayrılarak
 * random bir bıcımde ılgılı kutucuklarına yerleştırılırler. Random button'u bu maksat
 * la kullanılmaktadır. Check butonuna basıldığında sonucun doğruluğu kontrol edilier.
 * Tekrar Random butununa basılmadan yeni bir kelime gelmemektedir. 
 */
const randomButton = document.getElementById('make-random');
const controlButton = document.getElementById('control');
randomButton.addEventListener('click',fillBoxes);
controlButton.addEventListener('click',controlBoxes);