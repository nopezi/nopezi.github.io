var app = new Vue({
	el: '#app',
	data: {
		authApi: {
			username: 'admin',
			password: 'admin'
		},
		judul: 'Profil Official',
		profil: '',
		gambar: '136461314_10217857138531591_2958038147901187242_n.jpg',
		pendidikan: '',
		pekerjaan: '',
		skill: '',
		loading: '',
		loading2: '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...',
		url_api: 'https://shielded-beyond-23529.herokuapp.com/api/',
	},

	mounted(){

		htmlLoading = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...'
		this.loading = htmlLoading

		this.dataProfile()
		this.riwayatPendidikan()
		this.riwayatPekerjaan()
		this.skillData()
		// var cek = this.allData(url_profil, params_pekerjaan)
		// console.log('cek ', cek)
	},

	methods: {

		allData : async function(url_profil, params) {
			const hasil = await axios({
				method: 'get',
				url: url_profil,
				auth: this.authApi,
				params: params,
				responType: 'json',
				data: Response.data
			})
			.then(data => {
				// console.log('masok')
				return data.data
			})

			return hasil
		},

		async dataProfile () {
			let url_profil = this.url_api+'profil'
			await axios({
				method: 'get',
				url: url_profil,
				auth: this.authApi,
				responType: 'json'
			})
			.then(data => {
				console.log('masok')
				// console.table(data.data.data)
				this.profil = data.data.data
				this.gambar = '136461314_10217857138531591_2958038147901187242_n.jpg'//'<img :src="'+data.data.data.url_gambar+'" class="img-fluid" width="200" height="200" alt="">'
				this.loading = ''
			})
		},

		async riwayatPendidikan () {
			let url_profil = this.url_api+'posting'
			await axios({
				method: 'get',
				url: url_profil,
				auth: this.authApi,
				params: {
					id_kategori: 3
				},
				responType: 'json'
			})
			.then(data => {
				var hasil = data.data.data
				// console.table(hasil)
				this.pendidikan = hasil
			})
		},

		async riwayatPekerjaan(){
			let url_profil = this.url_api+'posting'
			await axios({
				method: 'get',
				url: url_profil,
				auth: this.authApi,
				params: {
					id_kategori: 4
				},
				responType: 'json'
			})
			.then(data => {
				var hasil = data.data.data
				// console.table(hasil)
				this.pekerjaan = hasil
			})
		},

		async skillData(){
			await axios({
				url: this.url_api+'skill',
				method: 'get',
				auth: this.authApi,
				responType: 'json'
			})
			.then(data => {
				var hasil = data.data.data
				console.table(hasil)
				this.skill = hasil
				this.loading2 = ''
			})
		}

	}
})