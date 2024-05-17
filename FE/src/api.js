import axios from 'axios'

// const urlMaster = 'https://dev.qtasnim.donasi-nusantara.my.id'
const urlMaster = 'http://127.0.0.1:8000'

// ================================ CATATAN =================
// ketika saya mengubah urlmaster dengan backend yang ada di hosting
// ada beberapa error yang tidak dapat saya selesaikan, jadi untuk sementara
// backendnya dapat menggunakan localhost saja

const getBarang = async () => {
  try {
    const response = await axios.get(`${urlMaster}/api/barang`)
    return response.data.barang
  } catch (error) {
    console.error('error fetch data', error)
  }
}

const getJenisBarang = async () => {
  try {
    const response = await axios.get(`${urlMaster}/api/jenis`)
    return response.data.jenisBarang
  } catch (error) {
    console.error('error fetch data jenis barang')
  }
}

const getShowJenis = async (id) => {
  try {
    const response = await axios.get(`${urlMaster}/api/jenis/${id}`)
    return response.data.jenisBarang
  } catch (error) {
    console.error('error get data :', error)
  }
}

const getShowBarang = async (id) => {
  try {
    const response = await axios.get(`${urlMaster}/api/barang/${id}`)
    return response.data.barang
  } catch (error) {
    console.error('errorr', error)
  }
}

const postJenisBarang = `${urlMaster}/api/jenis`
const postBarang = `${urlMaster}/api/barang`
export {
  getBarang,
  getJenisBarang,
  getShowJenis,
  getShowBarang,
  postJenisBarang,
  postBarang,
  urlMaster,
}
