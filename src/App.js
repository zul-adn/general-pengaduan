import logo from './logo.svg';
import './App.css';

import HeaderLogo from './assets/header.png'; 

const jenis_pengaduan = [
  {
    id : 1,
    name : 'Indisipliner'
  },
  {
    id : 2,
    name : 'Pungutuan Liar (Pungli)'
  },
  {
    id : 3,
    name : 'Pengaduan Lainnya' 
  },
  {
    id : 4,
    name : 'Korupsi'
  }
]

function App() {
  return (
    <div className="container">
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
        </div>
      </div>

      <div className="form-body">
        <img src={HeaderLogo}  />
        <input className="input" type="text" placeholder="Nama Anda" />
        <input className="input" type="text" placeholder="Nomor Handphone" />
        <select
          className="input"
          style={{ width: '100%' }}
        >
          <option value="">Pilih jenis Pengaduan</option>
          {jenis_pengaduan.map((opt, i) => 
             <option value={opt.name}>{opt.name}</option>
          )}
        </select>
        <textarea 
          placeholder="Pengaduan anda"
          className="input"
          rows="5"
        />
        <button className="btn">Kirim Laporan</button>
      </div>

    </div>
  );
}

export default App;
