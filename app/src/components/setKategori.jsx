export default function SetKategori({daftarKategori, kategori, setKategori}) {
    return(
        <select aria-label="Kategori" value={kategori}  onChange={(e) => setKategori(e.target.value)} >
            {daftarKategori.map((k) => (<option key={k}>{k}</option>))}
            </select>
    )
}