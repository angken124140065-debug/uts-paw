export default function InfoWisata({item}){
    return(
        <dl> 
        <dt>Kategori:</dt>
        <dd>{item.kategori}</dd>
        <dt>Kabupaten:</dt>
        <dd>{item.kabupaten}</dd>
        <dt>Harga Tiket:</dt>
        <dd>{item.hargaTiket}</dd>
        <dt>Jam Buka:</dt>
        <dd>{item.jamBuka}</dd>
        </dl>
    )
}