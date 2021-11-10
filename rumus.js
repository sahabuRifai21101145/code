alert('selamat ddatang di program menghitung luas dan keliling persegi panjang')


	var p = prompt('masukkan panjang ')
	document.write(' panjang = ',p)
	document.write('<br>')

	var l = prompt('masukkan lebar ')
	document.write(' lebar = ',l)
	document.write('<br>')
	

	var luas = p * l 
	document.write('luas persegi panjang adalah : ',luas) 
	document.write('<br>')	
	var keliling = (parseInt (p) + parseInt (l))*2
	
	document.write('keliling persegi panjang adalah : ',parseInt(keliling))