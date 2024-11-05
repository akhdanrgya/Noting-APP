export interface Activity {
    waktu: string;
    kegiatan: string;
    keterangan: string;
    lokasi?: string;
  }

export interface ScheduleData {
    tanggal: string;
    hari: string;
    bulan: string;
    tahun: string;
    jadwal: Activity[];
  }

export const initialData: ScheduleData = {
    tanggal: "30",
    hari: "Rabu",
    bulan: "Okt",
    tahun: "2024",
    jadwal: [
      {
        waktu: "11:35",
        kegiatan: "Periksa di posyandu",
        keterangan: "Penimbangan berat badan dan pengukuran panjang badan",
        lokasi: "Alamat Posyandu"
      },
      {
        waktu: "12:30",
        kegiatan: "Makan siang",
        keterangan: "Jangan lupa makan siang untuk keluarga"
      },
      {
        waktu: "18:30",
        kegiatan: "Makan Malam",
        keterangan: "Jangan lupa makan malam untuk keluarga"
      }
    ]
  };