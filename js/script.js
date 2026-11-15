const KEYS = {
  menu: 'kt3_menu',
  karyawan: 'kt3_karyawan',
  orders: 'kt3_orders',
  storeName: 'kt3_storeName',
  runningText: 'kt3_runningText',
  qris: 'kt3_qris',
  seblakBase: 'kt3_seblakBase',
  session: 'kt3_session',
  theme: 'kt3_theme',
  ownerCred: 'kt3_ownerCred',
  logo: 'kt3_logo',
  bg: 'kt3_bg'
};

const LOGO_DEFAULT = { type: 'emoji', value: '🍵' };
const BG_DEFAULT = { mode: 'emerald', image: '', dim: 18 };
const BG_MODES = [
  { id: 'emerald', icon: '💎', title: 'Deep Emerald Luxury', desc: 'Zamrud pekat dengan aksen emas mewah dan partikel berpendar' },
  { id: 'neon', icon: '🌃', title: 'Cyber Neon', desc: 'Aliran neon futuristik dengan grid perspektif' },
  { id: 'matcha', icon: '🍃', title: 'Matcha Mist Flow', desc: 'Kabut matcha terang yang mengalir lembut dan menenangkan' },
  { id: 'espresso', icon: '☕', title: 'Warm Espresso Glass', desc: 'Cokelat espresso hangat dengan kilau kaca dan uap lembut' },
  { id: 'image', icon: '📷', title: 'Wallpaper dari Galeri', desc: 'Foto kustom tajam dengan overlay yang bisa diatur' }
];

const OWNER_DEFAULT = { username: 'admin', password: 'ADMIN' };
const DEFAULT_KARYAWAN = { username: 'Afnan123', password: '12345' };

const SEBLAK_CAT = 'Seblak Prasmanan';
const TOPPING_CAT = 'Topping Seblak';
const DRINK_CAT = 'Minuman';
const MENU_CATEGORIES = [SEBLAK_CAT, 'Aneka Mie Ayam', 'Aneka Lumpia', 'Aneka Kwetiau & Cilok', DRINK_CAT];
const OWNER_CATEGORIES = [TOPPING_CAT, 'Aneka Mie Ayam', 'Aneka Lumpia', 'Aneka Kwetiau & Cilok', DRINK_CAT];
const PEDAS_OPTIONS = ['Original', 'Sedang', 'Pedas', 'Extra Pedas'];
const RASA_OPTIONS = ['Kuah', 'Nyemek', 'Gurih', 'Kering', 'Manis'];
const SUHU_OPTIONS = [
  { v: 'Dingin', label: '🧊 Dingin (Ice)' },
  { v: 'Panas', label: '🔥 Panas (Hot)' }
];
const SERVICE_TYPES = { dinein: 'Makan Di Sini', bungkus: 'Dibungkus', delivery: 'Delivery' };
const LOW_STOCK = 5;

function suhuLabel(v) { return v === 'Panas' ? '🔥 Panas (Hot)' : '🧊 Dingin (Ice)'; }
function suhuText(v) { return v === 'Panas' ? 'Panas (Hot)' : 'Dingin (Ice)'; }

const KEY_LANG = 'kt3_lang';
function getLang() {
  try { return localStorage.getItem(KEY_LANG) || 'id'; } catch (e) { return 'id'; }
}

const I18N_EN = {
  'Pengaturan': 'Settings',
  'Mode Tampilan': 'Display Mode',
  'Mode Gelap': 'Dark Mode',
  'Beralih antara tampilan Terang dan Gelap.': 'Switch between Light and Dark display.',
  'Bahasa': 'Language',
  'Mengatur bahasa teks antarmuka.': 'Sets the interface text language.',
  'Pengaturan tersimpan otomatis di perangkat ini.': 'Settings are saved automatically on this device.',
  'Akses ditolak. Silakan login terlebih dahulu.': 'Access denied. Please log in first.',
  'Penyimpanan penuh! Gunakan gambar dengan ukuran lebih kecil.': 'Storage is full! Please use a smaller image.',
  'File gambar tidak valid.': 'Invalid image file.',
  'Tampilan & Bahasa': 'Display & Language',
  'Mode terang/gelap dan bahasa antarmuka': 'Light/dark mode and interface language',
  'Kembali': 'Back',
  'Riwayat & Struk': 'History & Receipt',
  'Cek Papan Antrean Live': 'Check Live Queue Board',
  'Papan Antrean Live': 'Live Queue Board',
  'Sedang Diproses': 'Being Prepared',
  'Siap / Selesai': 'Ready / Done',
  'Antrean': 'Queue',
  'Belum ada antrean yang sedang diproses.': 'No orders are being prepared right now.',
  'Belum ada pesanan selesai hari ini.': 'No completed orders today.',
  'Data tersinkron otomatis dengan dapur.': 'Data syncs automatically with the kitchen.',
  'Mode, bahasa, background dan animasi halaman utama': 'Mode, language, home page background and animation',
  'Background & Animasi Halaman Utama': 'Home Page Background & Animation',
  'Upload Wallpaper dari Galeri': 'Upload Wallpaper from Gallery',
  'Hapus Wallpaper': 'Delete Wallpaper',
  'Wallpaper tampil tajam; kartu dan tombol memakai kaca gelap agar tetap terbaca. Berlaku di halaman utama.': 'Wallpapers stay sharp; cards and buttons use dark glass to stay readable. Applies to the home page.',
  'Aurora Soft': 'Aurora Soft',
  'Mesh aurora lembut dan partikel emas, bereaksi pada mouse atau sentuhan': 'Soft aurora mesh and golden particles that react to mouse or touch',
  'Cyber Neon': 'Cyber Neon',
  'Aliran neon futuristik dengan grid perspektif': 'Futuristic neon flow with a perspective grid',
  'Minimalist Clean': 'Minimalist Clean',
  'Latar bersih dengan cahaya halus dan partikel ringan': 'Clean background with subtle light and lightweight particles',
  'Static Color': 'Static Color',
  'Warna solid tanpa animasi, hemat baterai': 'Solid color without animation, battery friendly',
  'Background dan animasi halaman utama hanya dapat diubah oleh Owner atau Karyawan setelah login.': 'The home page background and animation can only be changed by the Owner or Staff after logging in.',
  'Wallpaper dari Galeri': 'Gallery Wallpaper',
  'Foto kustom tajam dengan overlay yang bisa diatur': 'Sharp custom photo with an adjustable overlay',
  'Redupkan Wallpaper': 'Dim Wallpaper',
  'Makin kecil makin jernih. Naikkan jika teks kurang kontras.': 'Lower is clearer. Raise it if text lacks contrast.',
  'Unggah wallpaper dari galeri terlebih dahulu.': 'Please upload a wallpaper from the gallery first.',
  'Background halaman utama diperbarui.': 'Home page background updated.',
  'Wallpaper berhasil dipasang.': 'Wallpaper applied successfully.',
  'Wallpaper dihapus.': 'Wallpaper deleted.',
  'Reset Data Pesanan Aman': 'Secure Order Data Reset',
  'Masukkan sandi owner untuk menghapus seluruh data pesanan. Tindakan ini tidak bisa dibatalkan.': 'Enter the owner password to delete all order data. This cannot be undone.',
  'Sandi Owner': 'Owner Password',
  'Isi sandi owner terlebih dahulu.': 'Please enter the owner password first.',
  'Sandi owner salah. Data pesanan tidak dihapus.': 'Wrong owner password. Order data was not deleted.',
  'Hapus SEMUA data pesanan? Tindakan ini tidak bisa dibatalkan.': 'Delete ALL order data? This cannot be undone.',
  'Seluruh data pesanan berhasil direset.': 'All order data has been reset.',
  'Reset Pengaturan ke Semula': 'Reset Settings to Default',
  'Reset Pengaturan Awal': 'Factory Settings Reset',
  'Tanggal Pesanan Selesai': 'Completed Order Date',
  'Semua tanggal (per hari)': 'All dates (per day)',
  'Belum ada pesanan selesai pada tanggal ini.': 'No completed orders on this date.',
  'Detail Pesanan': 'Order Details',
  'Lihat': 'View',
  'Sandi owner salah. Pengaturan tidak diubah.': 'Wrong owner password. Settings were not changed.',
  'Filter periode, ringkasan tunai/QRIS, dan cetak PDF rekap': 'Period filter, cash/QRIS summary, and PDF recap',
  'Angka dalam kurung = sisa stok saat ini. Aman = stok cukup • Menipis = hampir habis • Habis = tidak tersedia': 'The number in brackets is the current remaining stock. Safe = enough stock • Low = almost out • Sold out = unavailable',
  'Mengembalikan tema, bahasa, wallpaper, logo, nama toko, running text, QRIS, dan harga dasar seblak ke kondisi bawaan. Menu, akun, dan pesanan tidak dihapus. Wajib sandi owner.': 'Restores theme, language, wallpaper, logo, store name, running text, QRIS, and seblak base price to defaults. Menu, accounts, and orders are not deleted. Owner password required.',
  'Kembalikan semua pengaturan ke kondisi awal bawaan sistem?': 'Restore all settings to the system defaults?',
  'Pengaturan berhasil dikembalikan ke semula.': 'Settings restored to defaults.',
  'Deep Emerald Luxury': 'Deep Emerald Luxury',
  'Zamrud pekat dengan aksen emas mewah dan partikel berpendar': 'Deep emerald with luxurious gold accents and glowing particles',
  'Matcha Mist Flow': 'Matcha Mist Flow',
  'Kabut matcha terang yang mengalir lembut dan menenangkan': 'Bright matcha mist that flows softly and calmly',
  'Warm Espresso Glass': 'Warm Espresso Glass',
  'Cokelat espresso hangat dengan kilau kaca dan uap lembut': 'Warm espresso brown with glass sheen and soft steam',
  'Periode Laporan': 'Report Period',
  'Per Minggu': 'Weekly',
  'Per Bulan': 'Monthly',
  'Tanggal Spesifik': 'Specific Date',
  'Jam Pesan': 'Order Time',
  'Jam Selesai': 'Done Time',
  'Belum ada pesanan selesai pada periode ini.': 'No completed orders in this period.',
  'Tutup': 'Close',
  'Logo Toko': 'Store Logo',
  'Ikon / Inisial Logo': 'Logo Icon / Initials',
  'Isi emoji atau 1-3 huruf, lalu simpan.': 'Enter an emoji or 1-3 letters, then save.',
  'Simpan Ikon': 'Save Icon',
  'Upload Gambar Logo': 'Upload Logo Image',
  'Logo otomatis tersimpan setelah file dipilih dan tampil di header pembeli serta struk.': 'The logo is saved automatically once a file is chosen and appears in the customer header and on receipts.',
  'Kembalikan Logo Bawaan': 'Restore Default Logo',
  'Logo toko berhasil diperbarui.': 'Store logo updated successfully.',
  'Logo dikembalikan ke bawaan.': 'Logo restored to default.',
  'Isi ikon atau inisial logo terlebih dahulu.': 'Please enter a logo icon or initials first.',

  'Selamat Datang': 'Welcome',
  'Karyawan': 'Staff',
  'Pesan mudah dari meja atau dari rumah — tanpa antre!': 'Order easily from your table or from home — no queue!',
  'Mulai Pesan': 'Start Order',
  'Isi data berikut untuk membuka menu': 'Fill in the details below to open the menu',
  'Nama Pemesan': 'Customer Name',
  'Contoh: Budi': 'e.g. Budi',
  'Nomor WhatsApp (WA)': 'WhatsApp Number (WA)',
  'Contoh: 081234567890': 'e.g. 081234567890',
  'Info pesanan akan dikirim kasir ke WhatsApp Anda.': 'The cashier will send your order info to your WhatsApp.',
  'Tipe Layanan': 'Service Type',
  'Makan Di Sini': 'Dine In',
  'Dibungkus': 'Takeaway',
  'Nomor Meja': 'Table Number',
  'Contoh: 5': 'e.g. 5',
  'Alamat Lengkap Pengiriman': 'Full Delivery Address',
  'Jalan, nomor rumah, RT/RW, patokan, kelurahan': 'Street, house number, neighborhood, landmark, district',
  'Pesanan Delivery wajib dibayar melalui Transfer QRIS.': 'Delivery orders must be paid via QRIS Transfer.',
  'Transfer QRIS': 'QRIS Transfer',
  'Cek Riwayat & Struk Pesanan Saya': 'Check My Order History & Receipt',
  'Login Karyawan': 'Staff Login',
  'Login Owner': 'Owner Login',
  'Username atau password salah.': 'Incorrect username or password.',
  'Masuk': 'Sign In',
  'Sistem Ordering Digital': 'Digital Ordering System',
  'Nomor WhatsApp tidak valid. Gunakan format 08xxxxxxxxxx atau 628xxxxxxxxxx.': 'Invalid WhatsApp number. Use the format 08xxxxxxxxxx or 628xxxxxxxxxx.',
  'Mohon isi alamat pengiriman dengan lengkap.': 'Please enter the complete delivery address.',

  'Pesan Menu': 'Order Menu',
  'Riwayat Saya': 'My History',
  'Keluar': 'Exit',
  'Cari menu atau topping seblak… (contoh: ceker)': 'Search menu or seblak toppings… (e.g. ceker)',
  'Keranjang': 'Cart',
  'Keranjang & Checkout': 'Cart & Checkout',
  'Atur opsi & catatan untuk setiap porsi / gelas secara terpisah.': 'Set options & notes for each portion / glass separately.',
  'Catatan Umum Pesanan (opsional)': 'General Order Notes (optional)',
  'Contoh: tolong disajikan bersamaan': 'e.g. please serve together',
  'Metode Pembayaran': 'Payment Method',
  'Bayar Tunai di Kasir': 'Pay Cash at Cashier',
  'Scan QRIS berikut, lalu upload bukti transfer:': 'Scan the QRIS below, then upload your transfer proof:',
  'Nominal:': 'Amount:',
  'Kirim Pesanan': 'Place Order',
  'Pesanan Terkirim!': 'Order Sent!',
  'Nomor Pesanan:': 'Order Number:',
  'Lihat & Download / Cetak Struk': 'View & Download / Print Receipt',
  'Pesan Lagi': 'Order Again',
  'Bukti transfer diterima. Pesanan akan diantar ke alamat Anda.': 'Transfer proof received. Your order will be delivered to your address.',
  'Silakan lakukan pembayaran tunai di kasir. Pesanan Anda sedang diproses.': 'Please pay cash at the cashier. Your order is being processed.',
  'Bukti transfer diterima. Pesanan Anda sedang diproses.': 'Transfer proof received. Your order is being processed.',
  'Data pemesan belum lengkap. Silakan isi form di halaman utama.': 'Customer details are incomplete. Please fill in the form on the main page.',
  'Keranjang masih kosong!': 'Your cart is empty!',
  'Keranjang masih kosong.': 'Your cart is empty.',
  'Silakan upload foto bukti transfer QRIS.': 'Please upload your QRIS transfer proof photo.',
  'Pilih minimal satu topping seblak.': 'Select at least one seblak topping.',
  'Pilih minimal satu topping.': 'Select at least one topping.',
  'Seblak Prasmanan': 'Seblak Buffet',
  'Topping Seblak': 'Seblak Toppings',
  'Aneka Mie Ayam': 'Assorted Chicken Noodles',
  'Aneka Lumpia': 'Assorted Spring Rolls',
  'Aneka Kwetiau & Cilok': 'Kwetiau & Cilok',
  'Minuman': 'Drinks',
  'Habis': 'Sold Out',
  'Tambah': 'Add',
  'Maks. di keranjang': 'Max in cart',
  'TOPPING SEBLAK PRASMANAN': 'SEBLAK BUFFET TOPPINGS',
  'Topping Seblak Prasmanan': 'Seblak Buffet Toppings',
  'Centang topping favoritmu, lalu tekan "Tambah Seblak". Level pedas, rasa & catatan diatur di keranjang.': 'Tick your favorite toppings, then press "Add Seblak". Spice level, flavor & notes are set in the cart.',
  'Harga dasar (bumbu & kuah):': 'Base price (seasoning & broth):',
  'Harga 1 mangkuk seblak': 'Price per bowl of seblak',
  'Tambah Seblak': 'Add Seblak',
  'Belum ada topping.': 'No toppings yet.',
  'Tidak ada menu yang cocok dengan "': 'No menu matches "',
  'Belum ada menu pada kategori ini.': 'No menu in this category yet.',
  'Catatan minuman (mis: es sedikit, gula dipisah, hangat)': 'Drink note (e.g. less ice, sugar on the side, warm)',
  'Catatan makanan (mis: tanpa daun bawang, kuah banyak, jangan terlalu asin)': 'Food note (e.g. no scallions, extra broth, not too salty)',
  'Level pedas': 'Spice level',
  'Rasa dan tekstur': 'Flavor and texture',
  'Suhu minuman': 'Drink temperature',
  'Original': 'Original',
  'Sedang': 'Medium',
  'Pedas': 'Spicy',
  'Extra Pedas': 'Extra Spicy',
  'Kuah': 'Soupy',
  'Nyemek': 'Moist (Nyemek)',
  'Gurih': 'Savory',
  'Kering': 'Dry',
  'Manis': 'Sweet',
  'Dingin (Ice)': 'Cold (Ice)',
  'Panas (Hot)': 'Hot',
  'Menu tidak ditemukan.': 'Menu not found.',
  'Ada menu yang sudah tidak tersedia. Silakan periksa keranjang.': 'Some menu items are no longer available. Please check your cart.',
  'Gagal menyimpan pesanan.': 'Failed to save the order.',
  'Download Struk (Foto PNG)': 'Download Receipt (PNG Photo)',

  'Riwayat & Struk Pesanan': 'Order History & Receipt',
  'No. WhatsApp atau No. Meja': 'WhatsApp No. or Table No.',
  'Cari': 'Search',
  'Cetak Struk (PDF)': 'Print Receipt (PDF)',
  'Foto PNG dapat langsung disimpan ke galeri HP. Untuk PDF, pilih "Simpan sebagai PDF" di jendela cetak.': 'The PNG photo can be saved straight to your phone gallery. For PDF, choose "Save as PDF" in the print window.',
  'Masukkan nama pemesan dan nomor WhatsApp (atau nomor meja) untuk mencari pesanan Anda.': 'Enter the customer name and WhatsApp number (or table number) to find your orders.',
  'Pesanan tidak ditemukan. Pastikan nama dan nomor WA/meja sama dengan saat memesan.': 'Order not found. Make sure the name and WA/table number match what you used when ordering.',
  'Pesanan tidak ditemukan.': 'Order not found.',
  'Gagal membuat gambar struk.': 'Failed to create the receipt image.',
  'Struk berhasil diunduh.': 'Receipt downloaded.',
  'STRUK PEMBELIAN': 'PURCHASE RECEIPT',
  'Tanggal': 'Date',
  'Pemesan': 'Customer',
  'No. WA': 'WA No.',
  'Layanan': 'Service',
  'Meja': 'Table',
  'ALAMAT PENGIRIMAN': 'DELIVERY ADDRESS',
  'No. HP/WA:': 'Phone/WA:',
  'Bayar': 'Payment',
  'Terima kasih sudah berbelanja!': 'Thank you for shopping!',
  'Selamat menikmati': 'Enjoy your meal',
  'Cat:': 'Note:',
  'Nomor WhatsApp pembeli tidak tersedia / tidak valid.': 'Customer WhatsApp number is unavailable / invalid.',

  'Dapur & Kasir': 'Kitchen & Cashier',
  'Dapur & Kasir —': 'Kitchen & Cashier —',
  'Antrean Pesanan Masuk': 'Incoming Order Queue',
  'Lihat Stok Produk': 'View Product Stock',
  'Cek Stok Produk': 'Check Product Stock',
  'Lihat status ketersediaan stok (hanya lihat)': 'View stock availability status (view only)',
  'Rekap Setoran Kasir Shift': 'Cashier Shift Deposit Summary',
  'Ringkasan tunai/QRIS dan cetak PDF rekap shift': 'Cash/QRIS summary and shift summary PDF',
  'Semua': 'All',
  'Diproses': 'Processing',
  'Selesai': 'Done',
  'Cari menu / topping…': 'Search menu / topping…',
  'Semua kategori': 'All categories',
  'Hanya yang menipis / habis': 'Only low / sold out',
  'Nama': 'Name',
  'Kategori': 'Category',
  'Aman': 'Safe',
  'Menipis': 'Low',
  'Stok hanya dapat diubah oleh Owner.': 'Stock can only be changed by the Owner.',
  'Aman = stok cukup • Menipis = hampir habis • Habis = tidak tersedia': 'Safe = enough stock • Low = almost out • Sold Out = unavailable',
  'Tidak ada item yang cocok.': 'No matching items.',
  'TOTAL SETORAN SHIFT': 'TOTAL SHIFT DEPOSIT',
  'Tunai': 'Cash',
  'Pesanan diproses': 'Orders processing',
  'Pesanan selesai': 'Orders done',
  'Makan di sini': 'Dine in',
  'Cetak PDF Rekap Shift': 'Print PDF Shift Summary',
  'Di jendela cetak, pilih "Simpan sebagai PDF". Struk pembeli dicetak dari tombol pada kartu pesanan.': 'In the print window, choose "Save as PDF". Customer receipts are printed from the button on each order card.',
  'Nomor WA tidak tersedia': 'WA number unavailable',
  'Tandai Selesai': 'Mark as Done',
  'Kirim Pesan ke WA': 'Send WhatsApp Message',
  'Lihat Bukti Bayar QRIS': 'View QRIS Payment Proof',
  'Cetak Struk Pembeli': 'Print Customer Receipt',
  'Struk PNG': 'Receipt PNG',
  'Tunai di Kasir': 'Cash at Cashier',
  'Belum ada pesanan.': 'No orders yet.',
  'Bukti Pembayaran QRIS': 'QRIS Payment Proof',
  'REKAP SETORAN SHIFT': 'SHIFT DEPOSIT SUMMARY',
  'Waktu': 'Time',
  'Item': 'Items',
  'Belum ada pesanan selesai': 'No completed orders yet',
  'TOTAL SETORAN': 'TOTAL DEPOSIT',
  'Metode Pembayaran Shift': 'Payment Methods',

  'Panel Owner': 'Owner Panel',
  'Panel Owner —': 'Owner Panel —',
  'Ringkasan & Laporan Omzet': 'Summary & Revenue Report',
  'Buka pengaturan (ikon roda gigi) untuk mengelola menu, karyawan, dan toko': 'Open settings (gear icon) to manage menu, staff, and store',
  'Kelola Menu, Harga & Stok': 'Manage Menu, Prices & Stock',
  'Tambah, edit, dan atur stok menu & topping': 'Add, edit, and manage stock for menu & toppings',
  'Kelola Akun Karyawan': 'Manage Staff Accounts',
  'Tambah akun, ubah password, dan hapus akun': 'Add accounts, change passwords, and delete accounts',
  'Pengaturan Toko & Keamanan': 'Store Settings & Security',
  'Nama toko, running text, harga dasar seblak, QRIS, dan password owner': 'Store name, running text, seblak base price, QRIS, and owner password',
  'Periode:': 'Period:',
  'Semua Waktu': 'All Time',
  'Hari Ini': 'Today',
  'Kemarin': 'Yesterday',
  'Pilih tanggal': 'Select date',
  'Menampilkan:': 'Showing:',
  'OMZET PERIODE (Pesanan Selesai)': 'PERIOD REVENUE (Completed Orders)',
  'PESANAN MASUK PERIODE': 'INCOMING ORDERS (PERIOD)',
  'TUNAI / QRIS': 'CASH / QRIS',
  'Cetak Laporan Omzet (PDF)': 'Print Revenue Report (PDF)',
  'Reset Data Pesanan': 'Reset Order Data',
  'Perbandingan Harian: Hari Ini vs Kemarin': 'Daily Comparison: Today vs Yesterday',
  'Omzet:': 'Revenue:',
  'Jumlah pesanan:': 'Orders:',
  'Baru': 'New',
  'Sama': 'Same',
  'Riwayat Omzet per Tanggal': 'Revenue History by Date',
  'Pesanan': 'Orders',
  'Omzet': 'Revenue',
  'Belum ada transaksi selesai pada periode ini.': 'No completed transactions in this period.',
  'Top Menu Terlaris': 'Best-Selling Menu',
  'Belum ada data penjualan.': 'No sales data yet.',
  'Topping Seblak Terfavorit': 'Favorite Seblak Toppings',
  'Belum ada data topping.': 'No topping data yet.',
  'Tambah Menu / Topping Baru': 'Add New Menu / Topping',
  'Nama menu / topping': 'Menu / topping name',
  'Harga': 'Price',
  'Stok': 'Stock',
  'URL foto (opsional)': 'Photo URL (optional)',
  'Foto Produk (opsional)': 'Product Photo (optional)',
  'Atau URL Foto': 'Or Photo URL',
  'Daftar Menu, Harga & Stok': 'Menu, Price & Stock List',
  'Foto': 'Photo',
  'Hapus': 'Delete',
  'Edit': 'Edit',
  'Edit Menu / Topping': 'Edit Menu / Topping',
  'Nama Produk': 'Product Name',
  'Jumlah Stok': 'Stock Quantity',
  'Foto Produk': 'Product Photo',
  'Ganti Foto Produk': 'Change Product Photo',
  'Foto saat ini': 'Current photo',
  'Hapus foto (gunakan gambar bawaan)': 'Remove photo (use default image)',
  'Kosongkan jika tidak ingin mengganti foto.': 'Leave empty to keep the current photo.',
  'Simpan': 'Save',
  'Batal': 'Cancel',
  'Menu berhasil diperbarui.': 'Menu updated successfully.',
  'Menu berhasil ditambahkan.': 'Menu added successfully.',
  'Menu dihapus.': 'Menu deleted.',
  'Harga diperbarui.': 'Price updated.',
  'Stok diperbarui.': 'Stock updated.',
  'Nama produk tidak boleh kosong.': 'Product name cannot be empty.',
  'Tambah Akun Karyawan': 'Add Staff Account',
  'Tambah Karyawan': 'Add Staff',
  'Karyawan tidak dapat mengganti password sendiri.': 'Staff cannot change their own password.',
  'Daftar Karyawan': 'Staff List',
  'Ubah Password': 'Change Password',
  'Belum ada karyawan.': 'No staff accounts yet.',
  'Karyawan ditambahkan.': 'Staff account added.',
  'Karyawan dihapus.': 'Staff account deleted.',
  'Password karyawan diperbarui.': 'Staff password updated.',
  'Identitas Toko': 'Store Identity',
  'Nama Toko': 'Store Name',
  'Otomatis berubah di semua halaman, termasuk header pembeli.': 'Updates automatically on all pages, including the customer header.',
  'Running Text Promo': 'Promo Running Text',
  'Harga Dasar Seblak (opsional)': 'Seblak Base Price (optional)',
  'Isi 0 jika seblak hanya dihitung dari harga topping satuan.': 'Enter 0 if seblak is priced only from individual toppings.',
  'Simpan Perubahan': 'Save Changes',
  'Foto QRIS Toko': 'Store QRIS Photo',
  'QRIS otomatis tersimpan setelah file dipilih.': 'QRIS is saved automatically once a file is chosen.',
  'Akun Owner': 'Owner Account',
  'Username saat ini:': 'Current username:',
  'Password Saat Ini': 'Current Password',
  'Username Baru': 'New Username',
  'Password Baru': 'New Password',
  'Ulangi Password Baru': 'Repeat New Password',
  'Simpan Akun Owner': 'Save Owner Account',
  'Harga tidak valid.': 'Invalid price.',
  'Pengaturan toko berhasil disimpan.': 'Store settings saved successfully.',
  'Foto QRIS berhasil diganti.': 'QRIS photo updated successfully.',
  'Username sudah dipakai.': 'Username is already taken.',
  'Password saat ini salah.': 'Current password is incorrect.',
  'Username baru minimal 3 karakter.': 'New username must be at least 3 characters.',
  'Password baru minimal 4 karakter.': 'New password must be at least 4 characters.',
  'Ulangi password baru tidak sama.': 'The repeated password does not match.',
  'Akun Owner berhasil diperbarui. Gunakan username & password baru saat login berikutnya.': 'Owner account updated. Use the new username & password next time you log in.',
  'Hapus akun karyawan ini?': 'Delete this staff account?',
  'Hapus item ini?': 'Delete this item?',
  'Masukkan password baru untuk karyawan ini:': 'Enter a new password for this staff member:',
  'Rekap per Tanggal': 'Summary by Date',
  'Terjual': 'Sold',
  'Pesanan masuk': 'Incoming orders',
  'Omzet tunai': 'Cash revenue',
  'Omzet QRIS': 'QRIS revenue',
  'TOTAL OMZET': 'TOTAL REVENUE',
  'Belum ada transaksi selesai': 'No completed transactions yet'
};

const I18N_RULES = [
  [/^Meja (.+)$/, (m, a) => 'Table ' + a],
  [/^Login: (.*)$/, (m, a) => 'Logged in: ' + a],
  [/^Stok: (\d+)$/, 'Stock: $1'],
  [/^Aman \(Stok: (\d+)\)$/, 'Safe (Stock: $1)'],
  [/^Menipis \(Stok: (\d+)\)$/, 'Low (Stock: $1)'],
  [/^Habis \(Stok: (\d+)\)$/, 'Sold out (Stock: $1)'],
  [/^Selesai • (\d{2}:\d{2})$/, 'Done • $1'],
  [/^(\d+) pesanan$/, '$1 orders'],
  [/^(\d{2}\/\d{2}\/\d{4})( • Hari Ini)? \((\d+) pesanan\)$/, (m, a, b, c) => a + (b ? ' • Today' : '') + ' (' + c + ' orders)'],
  [/^Minggu Ini \((.*)\)$/, 'This Week ($1)'],
  [/^Bulan Ini \((.*)\)$/, 'This Month ($1)'],
  [/^Tanggal (\d{2}\/\d{2}\/\d{4})$/, 'Date $1'],
  [/^Harga (Rp .+)$/, 'Price $1'],
  [/^(\d+) topping dipilih$/, '$1 toppings selected'],
  [/^(\d+) pesanan selesai$/, '$1 orders done'],
  [/^(\d+) masih diproses$/, '$1 still processing'],
  [/^(\d+) item$/, '$1 items'],
  [/^Makan di sini \((\d+)\)$/, 'Dine in ($1)'],
  [/^Dibungkus \((\d+)\)$/, 'Takeaway ($1)'],
  [/^Hari Ini \((.*)\)$/, 'Today ($1)'],
  [/^Kemarin \((.*)\)$/, 'Yesterday ($1)'],
  [/^(Makan Di Sini|Dibungkus) • Meja (.+)$/, (m, a, b) => (a === 'Dibungkus' ? 'Takeaway' : 'Dine In') + ' • Table ' + b],
  [/^(Dine-in|Bungkus) M(.+)$/, (m, a, b) => (a === 'Bungkus' ? 'Takeaway' : 'Dine-in') + ' T' + b],
  [/^(.*) • (Makan Di Sini|Dibungkus|Delivery)$/, (m, a, b) => a + ' • ' + trText(b)],
  [/^Dicetak: (.*) • Kasir: (.*)$/, (m, a, b) => 'Printed: ' + a + ' • Cashier: ' + b],
  [/^Dicetak: (.*)$/, (m, a) => 'Printed: ' + a],
  [/^Dine-in (.+) • Bungkus (.+) • Delivery (.+)$/, 'Dine-in $1 • Takeaway $2 • Delivery $3'],
  [/^porsi • (.*)$/, 'sold • $1'],
  [/^Topping: (.*)$/, 'Toppings: $1'],
  [/^LAPORAN OMZET — (.*)$/, (m, a) => 'REVENUE REPORT — ' + trText(a)],
  [/^Catatan: (.*)$/, 'Notes: $1'],
  [/^Cat: (.*)$/, 'Note: $1'],
  [/^Stok "(.*)" tidak mencukupi \(tersisa (\d+)\)\.$/, 'Stock for "$1" is insufficient ($2 left).'],
  [/^Stok topping "(.*)" tidak mencukupi\.$/, 'Stock for topping "$1" is insufficient.'],
  [/^Stok "(.*)" tidak mencukupi\.$/, 'Stock for "$1" is insufficient.']
];

function trText(s) {
  if (typeof s !== 'string') return s;
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
  const lead = m[1], trail = m[3];
  const core = m[2].replace(/\s+/g, ' ');
  if (!core) return s;
  const has = k => Object.prototype.hasOwnProperty.call(I18N_EN, k);
  if (has(core)) return lead + I18N_EN[core] + trail;
  const p = core.match(/^([^\p{L}\p{N}"]*)([\s\S]*)$/u);
  const prefix = p[1], rest = p[2];
  let out;
  if (rest && has(rest)) {
    out = I18N_EN[rest];
  } else if (rest) {
    for (const r of I18N_RULES) {
      if (r[0].test(rest)) { out = rest.replace(r[0], r[1]); break; }
    }
  }
  return out === undefined ? s : lead + prefix + out + trail;
}
function tr(s) {
  return getLang() === 'en' ? trText(String(s)) : s;
}

(function () {
  const _alert = window.alert.bind(window);
  const _confirm = window.confirm.bind(window);
  const _prompt = window.prompt.bind(window);
  window.alert = function (m) { return _alert(tr(m)); };
  window.confirm = function (m) { return _confirm(tr(m)); };
  window.prompt = function (m, d) { return _prompt(tr(m), d); };
})();

const I18N_ATTRS = ['placeholder', 'title', 'aria-label'];
const _i18nOrig = new WeakMap();
const _i18nApplied = new WeakMap();

function i18nText(node) {
  const par = node.parentNode;
  if (par && par.closest && par.closest('[data-no-i18n]')) return;
  const cur = node.nodeValue;
  let base;
  if (_i18nApplied.has(node) && _i18nApplied.get(node) === cur) base = _i18nOrig.get(node);
  else { base = cur; _i18nOrig.set(node, cur); }
  const out = getLang() === 'en' ? trText(base) : base;
  if (out !== cur) node.nodeValue = out;
  _i18nApplied.set(node, out);
}
function i18nAttr(el) {
  if (!el.hasAttribute) return;
  I18N_ATTRS.forEach(a => {
    if (!el.hasAttribute(a)) return;
    const store = el.__i18n || (el.__i18n = {});
    const cur = el.getAttribute(a);
    const rec = store[a];
    const base = (rec && rec.applied === cur) ? rec.orig : cur;
    const out = getLang() === 'en' ? trText(base) : base;
    if (out !== cur) el.setAttribute(a, out);
    store[a] = { orig: base, applied: out };
  });
}
function i18nWalk(root) {
  if (!root) return;
  if (root.nodeType === 3) { i18nText(root); return; }
  if (root.nodeType !== 1) return;
  const tag = root.tagName;
  if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return;
  if (root.hasAttribute('data-no-i18n')) return;
  i18nAttr(root);
  root.childNodes.forEach(i18nWalk);
}

let _i18nObs = null;
function startI18nObserver() {
  if (_i18nObs || !document.body) return;
  _i18nObs = new MutationObserver(muts => {
    muts.forEach(m => {
      if (m.type === 'childList') m.addedNodes.forEach(i18nWalk);
      else if (m.type === 'characterData') i18nText(m.target);
      else if (m.type === 'attributes') i18nAttr(m.target);
    });
  });
  _i18nObs.observe(document.body, {
    childList: true, subtree: true, characterData: true,
    attributes: true, attributeFilter: I18N_ATTRS
  });
}
function stopI18nObserver() {
  if (_i18nObs) { _i18nObs.disconnect(); _i18nObs = null; }
}

let _titleParts = null;
function applyLanguage() {
  const lang = getLang();
  document.documentElement.setAttribute('lang', lang);
  i18nWalk(document.body);
  if (!_titleParts) {
    const idx = document.title.indexOf(' - ');
    _titleParts = idx > -1
      ? { page: document.title.slice(0, idx), rest: document.title.slice(idx) }
      : { page: document.title, rest: '' };
  }
  document.title = (lang === 'en' ? trText(_titleParts.page) : _titleParts.page) + _titleParts.rest;
  if (lang === 'en') startI18nObserver(); else stopI18nObserver();
  const sel = document.getElementById('langSelect');
  if (sel) sel.value = lang;
}
function setLang(l) {
  try { localStorage.setItem(KEY_LANG, l); } catch (e) {}
  applyLanguage();
}

function getTheme() {
  try { return localStorage.getItem(KEYS.theme) || 'light'; } catch (e) { return 'light'; }
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-bs-theme', t);
  const sw = document.getElementById('themeSwitch');
  if (sw) sw.checked = (t === 'dark');
}
function setTheme(t) {
  try { localStorage.setItem(KEYS.theme, t); } catch (e) {}
  applyTheme(t);
}
document.documentElement.setAttribute('data-bs-theme', getTheme());

function dbGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) { return fallback; }
}
function dbSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    alert('Penyimpanan penuh! Gunakan gambar dengan ukuran lebih kecil.');
    return false;
  }
}
function rupiah(n) {
  return 'Rp ' + Number(n || 0).toLocaleString('id-ID');
}
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function placeholderImg(text) {
  const t = String(text || 'Menu').substring(0, 18)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#d8f0e0'/><text x='50%' y='50%' font-family='Arial' font-size='26' fill='#2d6a4f' text-anchor='middle' dominant-baseline='middle'>${t}</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}
function defaultQris() {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><rect width='100%' height='100%' fill='white' stroke='#333' stroke-width='4'/><rect x='30' y='30' width='70' height='70' fill='#222'/><rect x='200' y='30' width='70' height='70' fill='#222'/><rect x='30' y='200' width='70' height='70' fill='#222'/><rect x='130' y='130' width='40' height='40' fill='#222'/><text x='50%' y='285' font-family='Arial' font-size='14' text-anchor='middle' fill='#555'>QRIS CONTOH - Ganti di Panel Owner</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

document.addEventListener('error', function (e) {
  const el = e.target;
  if (el && el.tagName === 'IMG' && el.dataset && el.dataset.name !== undefined && !el.dataset.fb) {
    el.dataset.fb = '1';
    el.src = placeholderImg(el.dataset.name);
  }
}, true);

function compressImage(file, maxW, callback, quality) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL('image/jpeg', quality || 0.7));
    };
    img.onerror = () => alert('File gambar tidak valid.');
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function toast(msg) {
  let box = document.getElementById('ktToasts');
  if (!box) {
    box = document.createElement('div');
    box.id = 'ktToasts';
    document.body.appendChild(box);
  }
  const d = document.createElement('div');
  d.className = 'kt-toast';
  d.textContent = msg;
  box.appendChild(d);
  setTimeout(function () {
    d.classList.add('hide');
    setTimeout(function () { d.remove(); }, 300);
  }, 2200);
}

function normalizeWa(s) {
  let d = String(s || '').replace(/\D/g, '');
  if (d.startsWith('0')) d = '62' + d.slice(1);
  else if (d.startsWith('8')) d = '62' + d;
  return d;
}
function validWa(s) {
  return /^628\d{7,12}$/.test(normalizeWa(s));
}
function orderWa(o) { return o.wa || o.hp || ''; }

function waMessage(o) {
  const toko = getStoreName();
  const items = o.items.map(i =>
    '• ' + i.qty + '× ' + i.nama +
    (i.toppings && i.toppings.length ? ' (' + i.toppings.join(', ') + ')' : '') +
    (i.pedas ? ' [' + i.pedas + ' / ' + i.rasa + ']' : '') +
    (i.suhu ? ' [' + suhuText(i.suhu) + ']' : '') +
    (i.catatan ? ' – ' + i.catatan : '')
  ).join('\n');

  let info;
  if (o.status === 'selesai') {
    if (o.tipe === SERVICE_TYPES.delivery) {
      info = 'Pesanan Anda sudah siap dan *sedang diantar* ke alamat:\n' + o.alamat;
    } else if (o.tipe === SERVICE_TYPES.bungkus) {
      info = 'Pesanan Anda sudah *siap*. Silakan diambil di kasir ya.';
    } else {
      info = 'Pesanan Anda sudah *siap* dan segera disajikan di Meja ' + o.meja + '.';
    }
  } else {
    info = 'Pesanan Anda sedang *kami proses*. Mohon ditunggu ya.';
  }

  return 'Halo Kak ' + o.nama + ' 👋\n\n' +
    'Terima kasih sudah memesan di *' + toko + '*.\n\n' +
    '🧾 No. Pesanan: #' + String(o.no).padStart(3, '0') + '\n' +
    '📋 Layanan: ' + o.tipe + (o.meja ? ' (Meja ' + o.meja + ')' : '') + '\n\n' +
    '*Daftar Pesanan:*\n' + items + '\n\n' +
    '💰 *Total: ' + rupiah(o.total) + '* (' + (o.metode === 'qris' ? 'Transfer QRIS' : 'Tunai') + ')\n\n' +
    info + '\n\nTerima kasih 🙏';
}
function waLink(o) {
  return 'https://wa.me/' + normalizeWa(orderWa(o)) + '?text=' + encodeURIComponent(waMessage(o));
}
function kirimWa(id) {
  const o = getOrders().find(x => x.id === id);
  if (!o) return;
  if (!validWa(orderWa(o))) { alert('Nomor WhatsApp pembeli tidak tersedia / tidak valid.'); return; }
  window.open(waLink(o), '_blank', 'noopener');
}

function defaultStok(kategori) {
  if (kategori === TOPPING_CAT || kategori === DRINK_CAT) return 50;
  return 30;
}

function initDB() {
  if (!localStorage.getItem(KEYS.menu)) {
    const d = [];
    let id = 1;
    const add = (kategori, nama, harga) =>
      d.push({ id: id++, nama, harga, kategori, foto: '', stok: defaultStok(kategori) });

    const toppings = {
      1000: ['Makaroni', 'Tahu', 'Krupuk Mawar', 'Baso Kecil', 'Krupuk Oren', 'Krupuk Putih',
             'Krupuk Rafael', 'Krupuk Beton', 'Sosis Ayam', 'Kangkung', 'Pakcoy', 'Kol', 'Scalop'],
      2000: ['Cuanki Lidah', 'Cimol Kering', 'Dumpling Keju', 'Chikua', 'Fishroll', 'Sosis Sapi', 'Dumpling Ayam'],
      2500: ['Ceker'],
      3000: ['Kikil', 'Tulang', 'Jamur Salju', 'Jamur Enoki', 'Sosis Cocktail', 'Telur', 'Telur Puyuh', 'Usus'],
      5000: ['Sosis Besar']
    };
    Object.keys(toppings).forEach(h => toppings[h].forEach(n => add(TOPPING_CAT, n, Number(h))));

    add('Aneka Mie Ayam', 'Mie Ayam Biasa', 10000);
    add('Aneka Mie Ayam', 'Mie Ayam Bakso', 13000);
    add('Aneka Mie Ayam', 'Mie Ayam Ceker', 13000);
    add('Aneka Mie Ayam', 'Mie Ayam Ceker Bakso', 15000);

    add('Aneka Lumpia', 'Lumpia Biasa', 8000);
    add('Aneka Lumpia', 'Lumpia Tulang', 10000);
    add('Aneka Lumpia', 'Lumpia Ceker', 10000);
    add('Aneka Lumpia', 'Lumpia Bakso', 10000);

    add('Aneka Kwetiau & Cilok', 'Kwetiau Biasa', 12000);
    add('Aneka Kwetiau & Cilok', 'Kwetiau Tulang', 14000);
    add('Aneka Kwetiau & Cilok', 'Kwetiau Ceker', 14000);
    add('Aneka Kwetiau & Cilok', 'Kwetiau Baso', 14000);
    add('Aneka Kwetiau & Cilok', 'Cilok Tulang', 10000);
    add('Aneka Kwetiau & Cilok', 'Cilok Baso', 10000);
    add('Aneka Kwetiau & Cilok', 'Cilok Ceker', 10000);
    add('Aneka Kwetiau & Cilok', 'Cilok Special', 13000);

    add(DRINK_CAT, 'Teh Neng Original', 5000);
    add(DRINK_CAT, 'Thai Tea Neng', 8000);
    add(DRINK_CAT, 'Es Teh Kampul Solo', 6000);
    add(DRINK_CAT, 'Es Jeruk Segar', 6000);
    add(DRINK_CAT, 'Teh Tarik Special', 9000);

    dbSet(KEYS.menu, d);
  } else {
    const menu = dbGet(KEYS.menu, []);
    let changed = false;
    menu.forEach(m => {
      if (m.stok === undefined || m.stok === null || isNaN(Number(m.stok))) {
        m.stok = defaultStok(m.kategori);
        changed = true;
      }
    });
    if (changed) dbSet(KEYS.menu, menu);
  }

  if (!localStorage.getItem(KEYS.karyawan)) {
    dbSet(KEYS.karyawan, [{ id: 1, username: DEFAULT_KARYAWAN.username, password: DEFAULT_KARYAWAN.password }]);
  } else {
    const kl = dbGet(KEYS.karyawan, []);
    const idx = kl.findIndex(k => k.username === 'Kar123' && k.password === 'adminkar');
    if (idx > -1) {
      kl.splice(idx, 1);
      if (!kl.some(k => k.username === DEFAULT_KARYAWAN.username)) {
        const nid = kl.length ? Math.max(...kl.map(k => k.id)) + 1 : 1;
        kl.push({ id: nid, username: DEFAULT_KARYAWAN.username, password: DEFAULT_KARYAWAN.password });
      }
      dbSet(KEYS.karyawan, kl);
    }
  }

  if (!localStorage.getItem(KEYS.ownerCred)) dbSet(KEYS.ownerCred, OWNER_DEFAULT);
  if (!localStorage.getItem(KEYS.orders)) dbSet(KEYS.orders, []);
  if (!localStorage.getItem(KEYS.storeName)) dbSet(KEYS.storeName, 'Kedai Teh Neng');
  if (!localStorage.getItem(KEYS.runningText)) {
    dbSet(KEYS.runningText, '🎉 PROMO HARI INI: Beli 2 Thai Tea Neng GRATIS 1 Cilok! • Tersedia layanan Delivery — pesan dari rumah! 🍵');
  }
  if (!localStorage.getItem(KEYS.qris)) dbSet(KEYS.qris, defaultQris());
  if (localStorage.getItem(KEYS.seblakBase) === null) dbSet(KEYS.seblakBase, 0);
  if (!localStorage.getItem(KEYS.logo)) dbSet(KEYS.logo, LOGO_DEFAULT);
}
initDB();

function getStoreName() { return dbGet(KEYS.storeName, 'Kedai Teh Neng'); }
function getRunningText() { return dbGet(KEYS.runningText, ''); }
function getQris() { return dbGet(KEYS.qris, defaultQris()); }
function getSeblakBase() { return Number(dbGet(KEYS.seblakBase, 0)) || 0; }

function getBg() {
  const raw = dbGet(KEYS.bg, BG_DEFAULT) || BG_DEFAULT;
  const b = Object.assign({}, BG_DEFAULT, raw);
  const legacy = { wave: 'neon', aurora: 'emerald', minimal: 'matcha', static: 'espresso' };
  if (legacy[b.mode]) b.mode = legacy[b.mode];
  if (!BG_MODES.some(m => m.id === b.mode)) b.mode = BG_DEFAULT.mode;
  if (b.mode === 'image' && !b.image) b.mode = BG_DEFAULT.mode;
  b.dim = Math.max(0, Math.min(60, Number(b.dim)));
  if (isNaN(b.dim)) b.dim = BG_DEFAULT.dim;
  return b;
}
function setBg(patch) {
  const raw = dbGet(KEYS.bg, BG_DEFAULT) || BG_DEFAULT;
  return dbSet(KEYS.bg, Object.assign({}, BG_DEFAULT, raw, patch));
}

let bgEngine = null;
function stopBgEngine() {
  if (!bgEngine) return;
  cancelAnimationFrame(bgEngine.S.raf);
  window.removeEventListener('resize', bgEngine.onResize);
  window.removeEventListener('pointermove', bgEngine.onMove);
  window.removeEventListener('pointerdown', bgEngine.onMove);
  document.removeEventListener('mouseleave', bgEngine.onLeave);
  bgEngine = null;
}
function glowSprite(rgb) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.18, 'rgba(' + rgb + ',.95)');
  grad.addColorStop(0.5, 'rgba(' + rgb + ',.28)');
  grad.addColorStop(1, 'rgba(' + rgb + ',0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}
function startBgEngine(canvas, mode) {
  stopBgEngine();
  const ctx = canvas.getContext('2d');
  const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const S = { w: 0, h: 0, t: 0, last: 0, px: 0.5, py: 0.5, tx: 0.5, ty: 0.5, mx: -999, my: -999, parts: [], raf: 0 };
  const sprites = {
    gold: glowSprite('255,205,100'),
    goldDark: glowSprite('226,150,30'),
    cream: glowSprite('255,226,190'),
    cyan: glowSprite('0,240,255'),
    pink: glowSprite('255,60,214'),
    lime: glowSprite('80,255,150'),
    mint: glowSprite('150,255,215'),
    mintDark: glowSprite('60,170,125')
  };
  const neonColors = [[0, 240, 255], [255, 60, 214], [80, 255, 150], [255, 200, 90]];
  const neonKeys = ['cyan', 'pink', 'lime', 'gold'];

  function seed() {
    const base = { neon: 80, matcha: 40, espresso: 46, emerald: 72 }[mode] || 60;
    const n = Math.max(26, Math.round(base * Math.min(1.2, (S.w * S.h) / (1280 * 720))));
    S.parts = [];
    for (let i = 0; i < n; i++) {
      S.parts.push({
        x: Math.random() * S.w,
        y: Math.random() * S.h,
        r: 0.8 + Math.random() * 2.4,
        ph: Math.random() * 6.28,
        sp: 0.6 + Math.random() * 1.4,
        vy: mode === 'neon' ? (Math.random() - 0.5) * 8 : mode === 'espresso' ? -(4 + Math.random() * 10) : -(6 + Math.random() * 16),
        vx: mode === 'neon' ? 18 + Math.random() * 40 : (Math.random() - 0.5) * 6,
        k: neonKeys[i % 4]
      });
    }
  }
  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    S.w = window.innerWidth;
    S.h = window.innerHeight;
    canvas.width = Math.round(S.w * dpr);
    canvas.height = Math.round(S.h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }
  function updateParts(dt) {
    S.parts.forEach(p => {
      p.ph += p.sp * dt;
      p.x += (p.vx + Math.sin(p.ph) * 6) * dt;
      p.y += p.vy * dt;
      const dx = p.x - S.mx;
      const dy = p.y - S.my;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 150 && d > 0.01) {
        const f = (1 - d / 150) * 90 * dt;
        p.x += (dx / d) * f;
        p.y += (dy / d) * f;
      }
      if (p.y < -12) { p.y = S.h + 12; p.x = Math.random() * S.w; }
      if (p.y > S.h + 12) p.y = -12;
      if (p.x > S.w + 12) p.x = -12;
      if (p.x < -12) p.x = S.w + 12;
    });
  }
  function drawParts() {
    ctx.globalCompositeOperation = mode === 'matcha' ? 'source-over' : 'lighter';
    const keys = { neon: null, matcha: 'mintDark', espresso: 'cream', emerald: 'gold' };
    S.parts.forEach(p => {
      const a = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(p.ph * 2));
      const key = mode === 'neon' ? p.k : keys[mode] || 'gold';
      const s = p.r * (mode === 'espresso' ? 11 : 9);
      ctx.globalAlpha = a * (mode === 'matcha' ? 0.7 : mode === 'espresso' ? 0.6 : 1);
      ctx.drawImage(sprites[key], p.x - s / 2, p.y - s / 2, s, s);
    });
    ctx.globalAlpha = 1;
  }
  function fillBase(c0, c1) {
    const g = ctx.createLinearGradient(0, 0, S.w * 0.3, S.h);
    g.addColorStop(0, c0);
    g.addColorStop(1, c1);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, S.w, S.h);
  }
  function blobs(list, alpha, comp) {
    ctx.globalCompositeOperation = comp;
    list.forEach((b, i) => {
      const cx = S.w * (b.x + b.ax * Math.sin(S.t * b.s + i * 1.7)) + (S.px - 0.5) * S.w * b.par;
      const cy = S.h * (b.y + b.ay * Math.cos(S.t * b.s * 0.8 + i)) + (S.py - 0.5) * S.h * b.par * 0.8;
      const r = Math.max(S.w, S.h) * b.r * (1 + 0.08 * Math.sin(S.t * 0.3 + i));
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, 'rgba(' + b.c + ',' + alpha + ')');
      g.addColorStop(1, 'rgba(' + b.c + ',0)');
      ctx.fillStyle = g;
      ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    });
  }
  function ribbons(count, rgb, aMul, comp) {
    ctx.globalCompositeOperation = comp;
    const rows = [];
    for (let k = 0; k < count; k++) {
      const depth = k / (count - 1);
      const y0 = S.h * (0.3 + 0.55 * depth);
      const amp = 16 + 70 * depth;
      const pts = [];
      for (let x = 0; x <= S.w + 14; x += 14) {
        const y = y0
          + Math.sin(x * 0.0042 * (1 + depth * 0.6) + S.t * 0.55 + k * 0.45 + (S.px - 0.5) * 2.4) * amp
          + Math.sin(x * 0.011 - S.t * 0.32 + k) * amp * 0.32
          + (S.py - 0.5) * 80 * depth;
        pts.push(x, y);
      }
      rows.push(pts);
    }
    rows.forEach((pts, k) => {
      const depth = k / (count - 1);
      ctx.beginPath();
      ctx.moveTo(pts[0], pts[1]);
      for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
      ctx.strokeStyle = 'rgba(' + rgb + ',' + ((0.08 + 0.26 * depth) * aMul).toFixed(3) + ')';
      ctx.lineWidth = 0.6 + 1.6 * depth;
      ctx.stroke();
    });
    ctx.beginPath();
    for (let k = 0; k < count - 1; k++) {
      for (let i = 0; i < rows[k].length; i += 12) {
        ctx.moveTo(rows[k][i], rows[k][i + 1]);
        ctx.lineTo(rows[k + 1][i], rows[k + 1][i + 1]);
      }
    }
    ctx.strokeStyle = 'rgba(' + rgb + ',' + (0.07 * aMul).toFixed(3) + ')';
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }
  function drawEmerald() {
    fillBase('#03130d', '#0a2b22');
    const list = [
      { c: '16,185,129', x: 0.2, y: 0.25, ax: 0.12, ay: 0.1, s: 0.11, r: 0.5, par: 0.16 },
      { c: '4,120,87', x: 0.78, y: 0.3, ax: 0.1, ay: 0.12, s: 0.09, r: 0.5, par: -0.14 },
      { c: '212,175,55', x: 0.55, y: 0.85, ax: 0.14, ay: 0.06, s: 0.13, r: 0.36, par: 0.2 },
      { c: '52,211,153', x: 0.92, y: 0.8, ax: 0.08, ay: 0.08, s: 0.1, r: 0.36, par: -0.18 }
    ];
    blobs(list, 0.42, 'lighter');
    ribbons(12, '226,190,90', 0.75, 'lighter');
    drawParts();
  }
  function drawNeon() {
    fillBase('#04070f', '#0b1024');
    const horizon = S.h * 0.62;
    const vx = S.w * (0.5 + (S.px - 0.5) * 0.25);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      const u = (i + ((S.t * 0.35) % 1)) / 12;
      const y = horizon + (S.h - horizon) * u * u;
      ctx.strokeStyle = 'rgba(0,240,255,' + (0.05 + 0.2 * u).toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(S.w, y);
      ctx.stroke();
    }
    for (let i = -10; i <= 10; i++) {
      ctx.strokeStyle = 'rgba(255,60,214,.13)';
      ctx.beginPath();
      ctx.moveTo(vx + i * S.w * 0.012, horizon);
      ctx.lineTo(vx + i * S.w * 0.11, S.h);
      ctx.stroke();
    }
    const flowY = (x, k) => horizon * (0.18 + 0.12 * k)
      + Math.sin(x * 0.005 + S.t * 0.7 + k * 1.1) * S.h * 0.05
      + Math.sin(x * 0.013 - S.t * 0.5 + k) * S.h * 0.018
      + (S.py - 0.5) * 40 * (k / 6);
    for (let k = 0; k < 7; k++) {
      const c = neonColors[k % 4].join(',');
      ctx.beginPath();
      for (let x = 0; x <= S.w + 10; x += 10) {
        const y = flowY(x, k);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.shadowBlur = 16;
      ctx.shadowColor = 'rgb(' + c + ')';
      ctx.strokeStyle = 'rgba(' + c + ',.75)';
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.shadowBlur = 0;
      const u = (S.t * 0.06 * (1 + k * 0.15) + k * 0.19) % 1;
      const hx = u * S.w;
      ctx.globalAlpha = 0.95;
      ctx.drawImage(sprites[neonKeys[k % 4]], hx - 17, flowY(hx, k) - 17, 34, 34);
      ctx.globalAlpha = 1;
    }
    drawParts();
  }
  function drawMatcha() {
    fillBase('#edf5e4', '#f8f3df');
    const list = [
      { c: '150,190,110', x: 0.22, y: 0.3, ax: 0.12, ay: 0.1, s: 0.1, r: 0.5, par: 0.14 },
      { c: '190,222,150', x: 0.8, y: 0.28, ax: 0.1, ay: 0.12, s: 0.08, r: 0.46, par: -0.12 },
      { c: '236,226,168', x: 0.55, y: 0.85, ax: 0.14, ay: 0.06, s: 0.12, r: 0.44, par: 0.18 },
      { c: '120,180,140', x: 0.95, y: 0.75, ax: 0.08, ay: 0.08, s: 0.09, r: 0.36, par: -0.16 }
    ];
    blobs(list, 0.5, 'source-over');
    ribbons(9, '100,145,80', 0.7, 'source-over');
    drawParts();
  }
  function drawEspresso() {
    fillBase('#120a06', '#2b1a11');
    const list = [
      { c: '201,124,56', x: 0.22, y: 0.3, ax: 0.1, ay: 0.1, s: 0.1, r: 0.48, par: 0.14 },
      { c: '130,66,38', x: 0.8, y: 0.35, ax: 0.1, ay: 0.1, s: 0.08, r: 0.5, par: -0.12 },
      { c: '255,214,170', x: 0.6, y: 0.88, ax: 0.12, ay: 0.05, s: 0.12, r: 0.34, par: 0.18 }
    ];
    blobs(list, 0.38, 'lighter');
    ribbons(9, '235,175,105', 0.5, 'lighter');
    const g = ctx.createLinearGradient(0, 0, S.w, S.h);
    g.addColorStop(0, 'rgba(255,255,255,.07)');
    g.addColorStop(0.5, 'rgba(255,255,255,0)');
    g.addColorStop(1, 'rgba(255,214,170,.06)');
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, S.w, S.h);
    drawParts();
  }
  function draw() {
    if (mode === 'neon') drawNeon();
    else if (mode === 'matcha') drawMatcha();
    else if (mode === 'espresso') drawEspresso();
    else drawEmerald();
  }
  function frame(ts) {
    const dt = Math.min(0.05, (ts - (S.last || ts)) / 1000);
    S.last = ts;
    S.t += dt;
    const k = Math.min(1, dt * 3);
    S.px += (S.tx - S.px) * k;
    S.py += (S.ty - S.py) * k;
    updateParts(dt);
    draw();
    S.raf = requestAnimationFrame(frame);
  }
  const onMove = e => {
    S.tx = e.clientX / S.w;
    S.ty = e.clientY / S.h;
    S.mx = e.clientX;
    S.my = e.clientY;
  };
  const onLeave = () => {
    S.tx = 0.5;
    S.ty = 0.5;
    S.mx = -999;
    S.my = -999;
  };
  const onResize = () => {
    size();
    if (reduce) draw();
  };
  size();
  window.addEventListener('resize', onResize);
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerdown', onMove, { passive: true });
  document.addEventListener('mouseleave', onLeave);
  bgEngine = { S: S, onResize: onResize, onMove: onMove, onLeave: onLeave };
  if (reduce) {
    S.t = 2;
    draw();
  } else {
    S.raf = requestAnimationFrame(frame);
  }
}
function imageLuminance(src) {
  return new Promise(function (resolve) {
    const img = new Image();
    img.onload = function () {
      const c = document.createElement('canvas');
      c.width = 32;
      c.height = 32;
      const g = c.getContext('2d');
      g.drawImage(img, 0, 0, 32, 32);
      let d;
      try { d = g.getImageData(0, 0, 32, 32).data; } catch (e) { resolve(0.4); return; }
      let sum = 0;
      for (let i = 0; i < d.length; i += 4) sum += (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255;
      resolve(sum / (d.length / 4));
    };
    img.onerror = function () { resolve(0.4); };
    img.src = src;
  });
}
function bgTone(b) {
  if (b.mode === 'matcha') return 'light';
  if (b.mode !== 'image') return 'dark';
  const lum = b.lum == null ? 0.4 : Number(b.lum);
  return lum * (1 - (b.dim / 100) * 1.1) > 0.55 ? 'light' : 'dark';
}
function applyTone(b) {
  const cl = document.body.classList;
  cl.remove('bg-glass-dark', 'bg-glass-light');
  const t = bgTone(b);
  if (t === 'dark') cl.add('bg-glass-dark');
  else if (t === 'light') cl.add('bg-glass-light');
}
function bgMarkup(mode, image) {
  if (mode !== 'image') return '<canvas class="bg-canvas"></canvas>';
  if (mode === 'image' && image) return '<div class="wallpaper"></div><div class="wallpaper-dim"></div>';
  return '';
}
function applyBackground() {
  const box = document.querySelector('.bg-anim');
  if (!box) return;
  stopBgEngine();
  const b = getBg();
  ['emerald', 'neon', 'matcha', 'espresso', 'image'].forEach(m => document.body.classList.remove('bg-' + m));
  document.body.classList.add('bg-' + b.mode);
  applyTone(b);
  box.style.setProperty('--wp-dim', (b.dim / 100).toFixed(2));
  box.innerHTML = bgMarkup(b.mode, b.image);
  const canvas = box.querySelector('canvas');
  if (canvas) startBgEngine(canvas, b.mode);
  const wp = box.querySelector('.wallpaper');
  if (wp) wp.style.backgroundImage = 'url("' + b.image + '")';
  if (b.mode === 'image' && b.lum == null) {
    imageLuminance(b.image).then(function (lum) {
      setBg({ lum: lum });
      const cur = getBg();
      if (cur.mode === 'image') applyTone(cur);
    });
  }
}

function getLogo() {
  const l = dbGet(KEYS.logo, LOGO_DEFAULT);
  if (!l || !l.value) return LOGO_DEFAULT;
  return l;
}
function setLogo(type, value) {
  return dbSet(KEYS.logo, { type: type, value: value });
}
function logoHtml(cls) {
  const l = getLogo();
  const c = cls || 'store-logo';
  if (l.type === 'img') return '<img src="' + esc(l.value) + '" alt="Logo" class="' + c + '">';
  return '<span class="' + c + ' store-logo-emoji" aria-hidden="true">' + esc(l.value) + '</span>';
}
function loadLogoImage() {
  const l = getLogo();
  return new Promise(function (resolve) {
    if (l.type !== 'img') { resolve(null); return; }
    const img = new Image();
    img.onload = function () { resolve(img); };
    img.onerror = function () { resolve(null); };
    img.src = l.value;
  });
}
function compressLogo(file, maxSize, callback) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL('image/png'));
    };
    img.onerror = () => alert('File gambar tidak valid.');
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function applyStoreIdentity() {
  const name = getStoreName();
  document.querySelectorAll('[data-store-logo]').forEach(el => { el.innerHTML = logoHtml(el.dataset.storeLogo || 'store-logo'); });
  document.querySelectorAll('[data-store-name]').forEach(el => el.textContent = name);
  document.querySelectorAll('[data-running-text]').forEach(el => el.textContent = getRunningText());
  document.title = document.title.replace('Kedai Teh Neng', name);
}

function getOwnerCred() { return dbGet(KEYS.ownerCred, OWNER_DEFAULT); }
function updateOwnerCred(username, password) {
  return dbSet(KEYS.ownerCred, { username: username, password: password });
}

function login(role, username, password) {
  username = (username || '').trim();
  if (role === 'owner') {
    const c = getOwnerCred();
    if (username === c.username && password === c.password) {
      dbSet(KEYS.session, { role: 'owner', user: username });
      return true;
    }
    return false;
  }
  if (role === 'karyawan') {
    const found = dbGet(KEYS.karyawan, []).find(k => k.username === username && k.password === password);
    if (found) {
      dbSet(KEYS.session, { role: 'karyawan', user: username });
      return true;
    }
  }
  return false;
}
function getSession() { return dbGet(KEYS.session, null); }

function logout() {
  try { localStorage.removeItem(KEYS.session); } catch (e) {}
  try { sessionStorage.clear(); } catch (e) {}
  window.location.replace('index.html');
}

function requireAuth(role) {
  const s = getSession();
  if (!s || s.role !== role) {
    alert('Akses ditolak. Silakan login terlebih dahulu.');
    window.location.replace('index.html');
    return false;
  }
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) window.location.reload();
  });
  return true;
}

function getMenu() { return dbGet(KEYS.menu, []); }
function getMenuByCategory(kat) { return getMenu().filter(m => m.kategori === kat); }
function getStok(m) { return Math.max(0, Number(m && m.stok) || 0); }

function addMenu(nama, harga, kategori, foto, stok) {
  const menu = getMenu();
  const id = menu.length ? Math.max(...menu.map(m => m.id)) + 1 : 1;
  menu.push({
    id, nama, harga: Number(harga), kategori, foto: foto || '',
    stok: stok === undefined || stok === '' ? defaultStok(kategori) : Math.max(0, parseInt(stok, 10) || 0)
  });
  dbSet(KEYS.menu, menu);
}
function updateMenu(id, fields) {
  const menu = getMenu();
  const m = menu.find(x => x.id === id);
  if (m) { Object.assign(m, fields); dbSet(KEYS.menu, menu); }
}
function deleteMenu(id) {
  dbSet(KEYS.menu, getMenu().filter(m => m.id !== id));
}
function canEditStock() {
  const s = getSession();
  return !!s && s.role === 'owner';
}
function setStok(id, n) {
  const m = getMenu().find(x => x.id === id);
  if (!canEditStock()) return getStok(m);
  const v = Math.max(0, parseInt(n, 10) || 0);
  updateMenu(id, { stok: v });
  return v;
}
function addStok(id, delta) {
  const m = getMenu().find(x => x.id === id);
  if (!m) return 0;
  return setStok(id, getStok(m) + delta);
}
function stokStatus(m) {
  const s = getStok(m);
  if (s <= 0) return 'habis';
  if (s <= LOW_STOCK) return 'menipis';
  return 'aman';
}

function getKaryawan() { return dbGet(KEYS.karyawan, []); }
function addKaryawan(username, password) {
  username = username.trim();
  const list = getKaryawan();
  if (list.some(k => k.username.toLowerCase() === username.toLowerCase())) return false;
  const id = list.length ? Math.max(...list.map(k => k.id)) + 1 : 1;
  list.push({ id, username, password });
  dbSet(KEYS.karyawan, list);
  return true;
}
function updateKaryawanPassword(id, password) {
  const list = getKaryawan();
  const k = list.find(x => x.id === id);
  if (k) { k.password = password; dbSet(KEYS.karyawan, list); }
}
function deleteKaryawan(id) {
  dbSet(KEYS.karyawan, getKaryawan().filter(k => k.id !== id));
}

let cart = [];
let uidCounter = 0;
function newUid() { return 'c' + Date.now() + '_' + (++uidCounter); }

function stokRequired(items) {
  const req = {};
  items.forEach(c => {
    if (c.id > 0) req[c.id] = (req[c.id] || 0) + c.qty;
    (c.toppingIds || []).forEach(tid => { req[tid] = (req[tid] || 0) + c.qty; });
  });
  return req;
}
function stokTersisa(id) {
  const m = getMenu().find(x => x.id === id);
  if (!m) return 0;
  return getStok(m) - (stokRequired(cart)[id] || 0);
}

function cartAddMenu(menuId) {
  const item = getMenu().find(m => m.id === menuId);
  if (!item) return 'Menu tidak ditemukan.';
  if (stokTersisa(menuId) <= 0) return 'Stok "' + item.nama + '" tidak mencukupi.';
  const isDrink = item.kategori === DRINK_CAT;
  cart.push({
    uid: newUid(), id: item.id, nama: item.nama, harga: item.harga, qty: 1,
    toppings: [], toppingIds: [], isDrink: isDrink, custom: !isDrink,
    pedas: 'Original', rasa: 'Kuah', suhu: 'Dingin', catatan: ''
  });
  return '';
}

function cartAddSeblak(toppingIds) {
  const all = getMenu();
  const tops = toppingIds.map(id => all.find(m => m.id === id)).filter(Boolean);
  if (!tops.length) return 'Pilih minimal satu topping.';
  for (const t of tops) {
    if (stokTersisa(t.id) <= 0) return 'Stok topping "' + t.nama + '" tidak mencukupi.';
  }
  const harga = getSeblakBase() + tops.reduce((s, t) => s + t.harga, 0);
  cart.push({
    uid: newUid(), id: 0, nama: SEBLAK_CAT, harga, qty: 1,
    toppings: tops.map(t => t.nama), toppingIds: tops.map(t => t.id),
    isDrink: false, custom: true,
    pedas: 'Original', rasa: 'Kuah', suhu: 'Dingin', catatan: ''
  });
  return '';
}
function cartChangeAt(index, delta) {
  const c = cart[index];
  if (!c) return '';
  if (delta > 0) {
    const ids = c.id > 0 ? [c.id] : (c.toppingIds || []);
    const all = getMenu();
    for (const id of ids) {
      if (stokTersisa(id) <= 0) {
        const m = all.find(x => x.id === id);
        return 'Stok "' + (m ? m.nama : 'item') + '" tidak mencukupi.';
      }
    }
  }
  c.qty += delta;
  if (c.qty <= 0) cart.splice(index, 1);
  return '';
}
function cartSetOption(index, field, value) {
  if (cart[index]) cart[index][field] = value;
}
function cartTotal() { return cart.reduce((s, c) => s + c.harga * c.qty, 0); }
function cartCount() { return cart.reduce((s, c) => s + c.qty, 0); }

function getOrders() { return dbGet(KEYS.orders, []); }

function saveOrder(order) {
  const orders = getOrders();
  const num = orders.length ? Math.max(...orders.map(o => o.no || 0)) + 1 : 1;
  const full = Object.assign({
    id: 'ORD-' + Date.now(),
    no: num,
    status: 'diproses',
    waktu: new Date().toLocaleString('id-ID'),
    ts: Date.now()
  }, order);
  orders.push(full);
  return dbSet(KEYS.orders, orders) ? full : null;
}

function placeOrder(order, cartItems) {
  const menu = getMenu();
  const req = stokRequired(cartItems);
  for (const id of Object.keys(req)) {
    const m = menu.find(x => x.id === Number(id));
    if (!m) return { ok: false, error: 'Ada menu yang sudah tidak tersedia. Silakan periksa keranjang.' };
    if (getStok(m) < req[id]) {
      return { ok: false, error: 'Stok "' + m.nama + '" tidak mencukupi (tersisa ' + getStok(m) + ').' };
    }
  }
  const saved = saveOrder(order);
  if (!saved) return { ok: false, error: 'Gagal menyimpan pesanan.' };
  Object.keys(req).forEach(id => {
    const m = menu.find(x => x.id === Number(id));
    if (m) m.stok = getStok(m) - req[id];
  });
  dbSet(KEYS.menu, menu);
  return { ok: true, order: saved };
}

function updateOrderStatus(id, status) {
  const orders = getOrders();
  const o = orders.find(x => x.id === id);
  if (o) {
    o.status = status;
    if (status === 'selesai') o.selesaiTs = Date.now();
    else delete o.selesaiTs;
    dbSet(KEYS.orders, orders);
  }
}
function summarize(orders) {
  const selesai = orders.filter(o => o.status === 'selesai');
  const sumBy = fn => selesai.filter(fn).reduce((s, o) => s + o.total, 0);
  const cnt = fn => selesai.filter(fn).length;
  const tunai = sumBy(o => o.metode === 'tunai');
  const qris = sumBy(o => o.metode === 'qris');
  return {
    tunai, qris, total: tunai + qris,
    jumlahSelesai: selesai.length, jumlahSemua: orders.length,
    dinein: sumBy(o => o.tipe === SERVICE_TYPES.dinein), cDinein: cnt(o => o.tipe === SERVICE_TYPES.dinein),
    bungkus: sumBy(o => o.tipe === SERVICE_TYPES.bungkus), cBungkus: cnt(o => o.tipe === SERVICE_TYPES.bungkus),
    delivery: sumBy(o => o.tipe === SERVICE_TYPES.delivery), cDelivery: cnt(o => o.tipe === SERVICE_TYPES.delivery)
  };
}

function tipeShort(o) {
  if (o.tipe === SERVICE_TYPES.delivery) return 'Delivery';
  const t = o.tipe === SERVICE_TYPES.bungkus ? 'Bungkus' : 'Dine-in';
  return t + ' M' + o.meja;
}
function fmtShort(ts) {
  return new Date(ts).toLocaleString('id-ID', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
}
function itemsShort(o) {
  return o.items.map(i => i.qty + '× ' + i.nama).join(', ');
}

function dateKey(ts) {
  const d = new Date(ts);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function todayKey() { return dateKey(Date.now()); }
function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dateKey(d.getTime());
}
function fmtDateKey(k) {
  const p = k.split('-');
  return p[2] + '/' + p[1] + '/' + p[0];
}
function fmtDateId(ts) {
  const d = new Date(ts);
  return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear();
}
function fmtTimeId(ts) {
  const d = new Date(ts);
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}
function periodRange(mode, dateStr) {
  const s = new Date();
  s.setHours(0, 0, 0, 0);
  let e = new Date(s);
  let label = '';
  if (mode === 'yesterday') {
    s.setDate(s.getDate() - 1);
    e = new Date(s);
    e.setDate(e.getDate() + 1);
    label = 'Kemarin (' + fmtDateId(s) + ')';
  } else if (mode === 'week') {
    s.setDate(s.getDate() - ((s.getDay() + 6) % 7));
    e = new Date(s);
    e.setDate(e.getDate() + 7);
    const last = new Date(e);
    last.setDate(last.getDate() - 1);
    label = 'Minggu Ini (' + fmtDateId(s) + ' - ' + fmtDateId(last) + ')';
  } else if (mode === 'month') {
    s.setDate(1);
    e = new Date(s.getFullYear(), s.getMonth() + 1, 1);
    label = 'Bulan Ini (' + s.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) + ')';
  } else if (mode === 'date') {
    const p = String(dateStr || todayKey()).split('-');
    s.setFullYear(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    e = new Date(s);
    e.setDate(e.getDate() + 1);
    label = 'Tanggal ' + fmtDateId(s);
  } else {
    e.setDate(e.getDate() + 1);
    label = 'Hari Ini (' + fmtDateId(s) + ')';
  }
  return { start: s.getTime(), end: e.getTime(), label: label };
}
function filterOrdersByRange(orders, mode, date) {
  const r = periodRange(mode, date);
  return orders.filter(o => o.ts >= r.start && o.ts < r.end);
}
function filterOrdersByPeriod(orders, mode, date) {
  if (mode === 'all') return orders;
  const key = mode === 'today' ? todayKey() : mode === 'yesterday' ? yesterdayKey() : date;
  return orders.filter(o => dateKey(o.ts) === key);
}
function groupByDate(orders) {
  const map = {};
  orders.filter(o => o.status === 'selesai').forEach(o => {
    const k = dateKey(o.ts);
    const g = map[k] || (map[k] = { tanggal: k, jumlah: 0, tunai: 0, qris: 0, total: 0 });
    g.jumlah++;
    if (o.metode === 'qris') g.qris += o.total; else g.tunai += o.total;
    g.total += o.total;
  });
  return Object.values(map).sort((a, b) => b.tanggal.localeCompare(a.tanggal));
}
function topMenu(orders) {
  const map = {};
  orders.filter(o => o.status === 'selesai').forEach(o => o.items.forEach(i => {
    const m = map[i.nama] || (map[i.nama] = { nama: i.nama, qty: 0, omzet: 0 });
    m.qty += i.qty;
    m.omzet += i.harga * i.qty;
  }));
  return Object.values(map).sort((a, b) => b.qty - a.qty || b.omzet - a.omzet);
}
function topToppings(orders) {
  const map = {};
  orders.filter(o => o.status === 'selesai').forEach(o => o.items.forEach(i => {
    (i.toppings || []).forEach(t => {
      const m = map[t] || (map[t] = { nama: t, qty: 0 });
      m.qty += i.qty;
    });
  }));
  return Object.values(map).sort((a, b) => b.qty - a.qty);
}

function printPage() {
  document.body.classList.remove('print-receipt');
  window.print();
}
function resetSettingsSecure(password) {
  if (!password || password !== getOwnerCred().password) return false;
  [KEYS.theme, KEYS.bg, KEYS.logo, KEYS.storeName, KEYS.runningText, KEYS.qris, KEYS.seblakBase, KEY_LANG].forEach(k => {
    try { localStorage.removeItem(k); } catch (e) {}
  });
  initDB();
  return true;
}
function resetOrdersSecure(password) {
  if (!password || password !== getOwnerCred().password) return false;
  return dbSet(KEYS.orders, []);
}

function receiptHtml(o) {
  const isDel = o.tipe === SERVICE_TYPES.delivery;
  const lines = o.items.map(i => `
    <div class="rrow"><span>${i.qty}× ${esc(i.nama)}</span><span>${rupiah(i.harga * i.qty)}</span></div>
    ${i.toppings && i.toppings.length ? `<div class="sub">+ ${esc(i.toppings.join(', '))}</div>` : ''}
    ${i.pedas ? `<div class="sub">${esc(i.pedas)} / ${esc(i.rasa)}</div>` : ''}
    ${i.suhu ? `<div class="sub">${suhuText(i.suhu)}</div>` : ''}
    ${i.catatan ? `<div class="sub">Cat: ${esc(i.catatan)}</div>` : ''}
    <div class="sub">@ ${rupiah(i.harga)}</div>`).join('');
  const wa = orderWa(o);

  return `
    <div class="receipt">
      <div class="center receipt-logo">${logoHtml('receipt-logo-el')}</div>
      <div class="center"><strong style="font-size:15px">${esc(getStoreName())}</strong></div>
      <div class="center">STRUK PEMBELIAN</div>
      <hr>
      <div class="rrow"><span>No</span><span>#${String(o.no).padStart(3, '0')}</span></div>
      <div class="rrow"><span>Tanggal</span><span>${esc(o.waktu)}</span></div>
      <div class="rrow"><span>Pemesan</span><span>${esc(o.nama)}</span></div>
      ${wa ? `<div class="rrow"><span>No. WA</span><span>${esc(wa)}</span></div>` : ''}
      <div class="rrow"><span>Layanan</span><span>${esc(o.tipe)}</span></div>
      ${isDel ? '' : `<div class="rrow"><span>Meja</span><span>${esc(o.meja)}</span></div>`}
      <div class="rrow"><span>Status</span><span>${o.status === 'selesai' ? 'Selesai' : 'Diproses'}</span></div>
      ${isDel ? `
        <hr>
        <div><strong>ALAMAT PENGIRIMAN</strong></div>
        <div>${esc(o.alamat)}</div>
        <div><strong>No. HP/WA:</strong> ${esc(wa)}</div>` : ''}
      <hr>
      ${lines}
      <hr>
      <div class="rrow" style="font-size:14px"><strong>TOTAL</strong><strong>${rupiah(o.total)}</strong></div>
      <div class="rrow"><span>Bayar</span><span>${o.metode === 'qris' ? 'Transfer QRIS' : 'Tunai'}</span></div>
      ${o.catatan ? `<hr><div>Catatan: ${esc(o.catatan)}</div>` : ''}
      <hr>
      <div class="center">Terima kasih sudah berbelanja!</div>
      <div class="center">Selamat menikmati</div>
    </div>`;
}

function printReceipt(id) {
  const o = getOrders().find(x => x.id === id);
  if (!o) { alert('Pesanan tidak ditemukan.'); return; }
  let area = document.getElementById('receiptArea');
  if (!area) {
    area = document.createElement('div');
    area.id = 'receiptArea';
    area.className = 'print-only';
    document.body.appendChild(area);
  }
  area.innerHTML = receiptHtml(o);
  document.body.classList.add('print-receipt');
  window.addEventListener('afterprint', function () {
    document.body.classList.remove('print-receipt');
  }, { once: true });
  window.print();
}

function receiptModel(o) {
  const isDel = o.tipe === SERVICE_TYPES.delivery;
  const wa = orderWa(o);
  const m = [];
  m.push({ k: 'logo' });
  m.push({ k: 'title', t: getStoreName() });
  m.push({ k: 'center', t: tr('STRUK PEMBELIAN') });
  m.push({ k: 'hr' });
  m.push({ k: 'row', a: tr('No'), b: '#' + String(o.no).padStart(3, '0') });
  m.push({ k: 'row', a: tr('Tanggal'), b: o.waktu });
  m.push({ k: 'row', a: tr('Pemesan'), b: o.nama });
  if (wa) m.push({ k: 'row', a: tr('No. WA'), b: wa });
  m.push({ k: 'row', a: tr('Layanan'), b: tr(o.tipe) });
  if (!isDel) m.push({ k: 'row', a: tr('Meja'), b: String(o.meja) });
  m.push({ k: 'row', a: tr('Status'), b: tr(o.status === 'selesai' ? 'Selesai' : 'Diproses') });
  if (isDel) {
    m.push({ k: 'hr' });
    m.push({ k: 'text', t: tr('ALAMAT PENGIRIMAN'), bold: true });
    m.push({ k: 'text', t: o.alamat });
    m.push({ k: 'text', t: tr('No. HP/WA:') + ' ' + wa });
  }
  m.push({ k: 'hr' });
  o.items.forEach(i => {
    m.push({ k: 'row', a: i.qty + '× ' + i.nama, b: rupiah(i.harga * i.qty) });
    if (i.toppings && i.toppings.length) m.push({ k: 'sub', t: '+ ' + i.toppings.join(', ') });
    if (i.pedas) m.push({ k: 'sub', t: tr(i.pedas) + ' / ' + tr(i.rasa) });
    if (i.suhu) m.push({ k: 'sub', t: tr(suhuText(i.suhu)) });
    if (i.catatan) m.push({ k: 'sub', t: tr('Cat:') + ' ' + i.catatan });
    m.push({ k: 'sub', t: '@ ' + rupiah(i.harga) });
  });
  m.push({ k: 'hr' });
  m.push({ k: 'big', a: tr('TOTAL'), b: rupiah(o.total) });
  m.push({ k: 'row', a: tr('Bayar'), b: tr(o.metode === 'qris' ? 'Transfer QRIS' : 'Tunai') });
  if (o.catatan) {
    m.push({ k: 'hr' });
    m.push({ k: 'text', t: tr('Catatan:') + ' ' + o.catatan });
  }
  m.push({ k: 'hr' });
  m.push({ k: 'center', t: tr('Terima kasih sudah berbelanja!') });
  m.push({ k: 'center', t: tr('Selamat menikmati') });
  return m;
}

function buildReceiptCanvas(o, logoImg) {
  const model = receiptModel(o);
  const logoData = getLogo();
  const scale = 2, W = 480, pad = 28, inner = W - pad * 2;
  const fam = '"Courier New", Courier, monospace';
  const probe = document.createElement('canvas').getContext('2d');
  const fnt = (size, bold) => (bold ? 'bold ' : '') + size + 'px ' + fam;

  const wrap = (text, maxW, f) => {
    probe.font = f;
    const out = [];
    String(text).split('\n').forEach(par => {
      let line = '';
      par.split(' ').forEach(word => {
        let w = word;
        while (probe.measureText(w).width > maxW && w.length > 1) {
          let cut = w.length - 1;
          while (cut > 1 && probe.measureText(w.slice(0, cut)).width > maxW) cut--;
          if (line) { out.push(line); line = ''; }
          out.push(w.slice(0, cut));
          w = w.slice(cut);
        }
        const test = line ? line + ' ' + w : w;
        if (line && probe.measureText(test).width > maxW) { out.push(line); line = w; }
        else line = test;
      });
      out.push(line);
    });
    return out;
  };

  const ops = [];
  let y = pad;
  model.forEach(it => {
    if (it.k === 'hr') {
      ops.push({ t: 'line', y: y + 6 });
      y += 14;
      return;
    }
    if (it.k === 'logo') {
      if (logoImg) {
        const ratio = Math.min(160 / logoImg.width, 72 / logoImg.height, 1);
        const w = Math.max(1, Math.round(logoImg.width * ratio));
        const h = Math.max(1, Math.round(logoImg.height * ratio));
        ops.push({ t: 'img', img: logoImg, x: Math.round((W - w) / 2), y, w, h });
        y += h + 10;
      } else {
        const f = '44px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", Arial, sans-serif';
        ops.push({ t: 'text', s: logoData.value, x: W / 2, y, f, a: 'center' });
        y += 58;
      }
      return;
    }
    if (it.k === 'title') {
      const f = fnt(22, true);
      wrap(it.t, inner, f).forEach(l => {
        ops.push({ t: 'text', s: l, x: W / 2, y, f, a: 'center' });
        y += 28;
      });
      return;
    }
    if (it.k === 'center') {
      const f = fnt(14, false);
      wrap(it.t, inner, f).forEach(l => {
        ops.push({ t: 'text', s: l, x: W / 2, y, f, a: 'center' });
        y += 20;
      });
      return;
    }
    if (it.k === 'text') {
      const f = fnt(14, !!it.bold);
      wrap(it.t, inner, f).forEach(l => {
        ops.push({ t: 'text', s: l, x: pad, y, f, a: 'left' });
        y += 20;
      });
      return;
    }
    if (it.k === 'sub') {
      const f = fnt(13, false);
      wrap(it.t, inner - 18, f).forEach(l => {
        ops.push({ t: 'text', s: l, x: pad + 18, y, f, a: 'left' });
        y += 18;
      });
      return;
    }
    const big = it.k === 'big';
    const f = fnt(big ? 18 : 14, big);
    probe.font = f;
    const rw = probe.measureText(it.b).width;
    wrap(it.a, Math.max(100, inner - rw - 12), f).forEach((l, idx) => {
      ops.push({ t: 'text', s: l, x: pad, y, f, a: 'left' });
      if (idx === 0) ops.push({ t: 'text', s: it.b, x: W - pad, y, f, a: 'right' });
      y += big ? 26 : 20;
    });
  });

  const H = Math.ceil(y + pad);
  const c = document.createElement('canvas');
  c.width = W * scale;
  c.height = H * scale;
  const ctx = c.getContext('2d');
  ctx.scale(scale, scale);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#000000';
  ctx.strokeStyle = '#000000';
  ctx.textBaseline = 'top';
  ops.forEach(op => {
    if (op.t === 'line') {
      ctx.save();
      ctx.setLineDash([5, 4]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad, op.y);
      ctx.lineTo(W - pad, op.y);
      ctx.stroke();
      ctx.restore();
    } else if (op.t === 'img') {
      ctx.drawImage(op.img, op.x, op.y, op.w, op.h);
    } else {
      ctx.font = op.f;
      ctx.textAlign = op.a;
      ctx.fillText(op.s, op.x, op.y);
    }
  });
  return c;
}

function downloadReceiptPng(id) {
  const o = getOrders().find(x => x.id === id);
  if (!o) { alert('Pesanan tidak ditemukan.'); return; }
  const name = 'struk-' + String(o.no).padStart(3, '0') + '.png';
  const save = url => {
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    toast('Struk berhasil diunduh.');
  };
  loadLogoImage().then(function (logoImg) {
    const c = buildReceiptCanvas(o, logoImg);
    if (c.toBlob) {
      c.toBlob(function (b) {
        if (!b) { alert('Gagal membuat gambar struk.'); return; }
        const url = URL.createObjectURL(b);
        save(url);
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      }, 'image/png');
    } else {
      save(c.toDataURL('image/png'));
    }
  });
}

function queueData() {
  const tk = todayKey();
  const today = getOrders().filter(o => dateKey(o.ts) === tk);
  return {
    proses: today.filter(o => o.status !== 'selesai').sort((a, b) => a.no - b.no),
    selesai: getOrders()
      .filter(o => o.status === 'selesai' && dateKey(o.selesaiTs || o.ts) === tk)
      .sort((a, b) => (b.selesaiTs || b.ts) - (a.selesaiTs || a.ts))
  };
}
function queueService(o) {
  if (o.tipe === SERVICE_TYPES.delivery) return '🛵 ' + o.tipe;
  return (o.tipe === SERVICE_TYPES.bungkus ? '🥡 ' : '🍽️ ') + o.tipe + ' • Meja ' + o.meja;
}
function flyToCart(srcEl, label) {
  const cartBtn = document.querySelector('.cart-float');
  if (!cartBtn) return;
  const bounce = () => {
    cartBtn.classList.remove('cart-bounce');
    void cartBtn.offsetWidth;
    cartBtn.classList.add('cart-bounce');
    setTimeout(() => cartBtn.classList.remove('cart-bounce'), 700);
  };
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!srcEl || reduce) { bounce(); return; }
  const a = srcEl.getBoundingClientRect();
  const b = cartBtn.getBoundingClientRect();
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const chip = document.createElement('div');
  chip.className = 'fly-chip';
  chip.textContent = label;
  chip.style.left = a.left + a.width / 2 + 'px';
  chip.style.top = a.top + a.height / 2 + 'px';
  document.body.appendChild(chip);
  if (!chip.animate) { chip.remove(); bounce(); return; }
  const anim = chip.animate([
    { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
    { transform: 'translate(calc(-50% + ' + dx * 0.5 + 'px), calc(-50% + ' + (dy * 0.5 - 90) + 'px)) scale(1.12)', opacity: 1, offset: 0.5 },
    { transform: 'translate(calc(-50% + ' + dx + 'px), calc(-50% + ' + dy + 'px)) scale(0.3)', opacity: 0.3 }
  ], { duration: 780, easing: 'cubic-bezier(.4, .1, .3, 1)' });
  anim.onfinish = function () { chip.remove(); bounce(); };
}
function updateQueueBadge() {
  const n = queueData().proses.length;
  document.querySelectorAll('[data-queue-count]').forEach(el => { el.textContent = n; });
}
function queueRowHtml(o, done) {
  return `
    <div class="queue-row ${done ? 'done' : ''}">
      <div class="queue-no">#${String(o.no).padStart(3, '0')}</div>
      <div class="queue-info">
        <div class="queue-name">${esc(o.nama)}</div>
        <div class="queue-svc">${esc(queueService(o))}</div>
      </div>
      <span class="badge ${done ? 'bg-success' : 'bg-warning text-dark'}">${done ? 'Selesai • ' + fmtTimeId(o.selesaiTs || o.ts) : 'Diproses'}</span>
    </div>`;
}
function renderQueue() {
  const box = document.getElementById('queueBody');
  if (!box) return;
  const q = queueData();
  const proses = q.proses.length
    ? q.proses.map(o => queueRowHtml(o, false)).join('')
    : '<p class="text-center text-secondary my-3">Belum ada antrean yang sedang diproses.</p>';
  const selesai = q.selesai.length
    ? q.selesai.map(o => queueRowHtml(o, true)).join('')
    : '<p class="text-center text-secondary my-3">Belum ada pesanan selesai hari ini.</p>';
  box.innerHTML = `
    <div class="queue-section-title"><span>Sedang Diproses</span><span class="badge bg-warning text-dark">${q.proses.length}</span></div>
    ${proses}
    <div class="queue-section-title mt-3"><span>Siap / Selesai</span><span class="badge bg-success">${q.selesai.length}</span></div>
    ${selesai}`;
  const stamp = document.getElementById('queueStamp');
  if (stamp) stamp.textContent = new Date().toLocaleTimeString('id-ID');
  updateQueueBadge();
}

let queueTimer = null;
function ensureQueueModal() {
  if (document.getElementById('modalAntrean')) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="modal fade" id="modalAntrean" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">📢 <span>Papan Antrean Live</span> <span class="live-dot" aria-hidden="true"></span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" id="queueBody"></div>
          <div class="modal-footer justify-content-between small text-secondary">
            <span>Data tersinkron otomatis dengan dapur.</span>
            <span id="queueStamp"></span>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(wrap.firstElementChild);
  const el = document.getElementById('modalAntrean');
  el.addEventListener('shown.bs.modal', function () {
    clearInterval(queueTimer);
    queueTimer = setInterval(renderQueue, 3000);
  });
  el.addEventListener('hidden.bs.modal', function () { clearInterval(queueTimer); });
}
function openQueueBoard() {
  ensureQueueModal();
  renderQueue();
  bootstrap.Modal.getOrCreateInstance(document.getElementById('modalAntrean')).show();
}
window.addEventListener('storage', function (e) {
  if (e.key === KEYS.bg) applyBackground();
  updateQueueBadge();
  const m = document.getElementById('modalAntrean');
  if (m && m.classList.contains('show')) renderQueue();
});

const hist = { nama: '', kontak: '', locked: false, currentId: null, timer: null };

function findOrdersByBuyer(nama, kontak) {
  const n = (nama || '').trim().toLowerCase();
  const kd = String(kontak || '').replace(/\D/g, '');
  if (!n || !kd) return [];
  const isPhone = kd.length >= 9;
  const waKey = isPhone ? normalizeWa(kd) : '';
  const mejaKey = !isPhone ? String(parseInt(kd, 10)) : '';
  return getOrders().filter(o => {
    if ((o.nama || '').trim().toLowerCase() !== n) return false;
    if (isPhone) return [o.wa, o.hp].some(x => x && normalizeWa(x) === waKey);
    return o.meja && String(parseInt(o.meja, 10)) === mejaKey;
  }).sort((a, b) => b.ts - a.ts);
}

function ensureHistoryModal() {
  if (document.getElementById('modalRiwayat')) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="modal fade" id="modalRiwayat" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="riwayatTitle">Riwayat &amp; Struk Pesanan</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div id="riwayatListPane">
              <form id="riwayatForm" class="row g-2 mb-3" autocomplete="off">
                <div class="col-12 col-sm-5"><input id="riwayatNama" class="form-control form-control-sm" placeholder="Nama Pemesan" required></div>
                <div class="col-12 col-sm-5"><input id="riwayatKontak" class="form-control form-control-sm" placeholder="No. WhatsApp atau No. Meja" required></div>
                <div class="col-12 col-sm-2 d-grid"><button class="btn btn-teh btn-sm">Cari</button></div>
              </form>
              <div id="riwayatList"></div>
            </div>
            <div id="riwayatStrukPane" class="d-none">
              <button type="button" class="btn btn-sm btn-outline-secondary mb-2" id="riwayatBack">← Kembali</button>
              <div class="receipt-paper" id="riwayatStruk"></div>
              <div class="d-grid gap-2 mt-3">
                <button type="button" class="btn btn-teh" id="riwayatPng">📥 Download Struk (Foto PNG)</button>
                <button type="button" class="btn btn-outline-secondary" id="riwayatPrint">🖨️ Cetak Struk (PDF)</button>
              </div>
              <p class="small text-secondary text-center mt-2 mb-0">Foto PNG dapat langsung disimpan ke galeri HP. Untuk PDF, pilih "Simpan sebagai PDF" di jendela cetak.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(wrap.firstElementChild);

  const el = document.getElementById('modalRiwayat');
  document.getElementById('riwayatForm').addEventListener('submit', function (e) {
    e.preventDefault();
    hist.nama = document.getElementById('riwayatNama').value.trim();
    hist.kontak = document.getElementById('riwayatKontak').value.trim();
    renderHistory();
  });
  document.getElementById('riwayatList').addEventListener('click', function (e) {
    const b = e.target.closest('button[data-struk]');
    if (b) showStruk(b.dataset.struk);
  });
  document.getElementById('riwayatBack').addEventListener('click', showHistoryList);
  document.getElementById('riwayatPrint').addEventListener('click', function () {
    if (hist.currentId) printReceipt(hist.currentId);
  });
  document.getElementById('riwayatPng').addEventListener('click', function () {
    if (hist.currentId) downloadReceiptPng(hist.currentId);
  });
  el.addEventListener('shown.bs.modal', function () {
    clearInterval(hist.timer);
    hist.timer = setInterval(function () {
      if (!document.getElementById('riwayatListPane').classList.contains('d-none')) renderHistory();
    }, 3000);
  });
  el.addEventListener('hidden.bs.modal', function () { clearInterval(hist.timer); });
}

function openHistory(opts) {
  opts = opts || {};
  ensureHistoryModal();
  hist.nama = opts.nama || '';
  hist.kontak = opts.kontak || '';
  hist.locked = !!opts.locked;
  document.getElementById('riwayatNama').value = hist.nama;
  document.getElementById('riwayatKontak').value = hist.kontak;
  document.getElementById('riwayatForm').classList.toggle('d-none', hist.locked);
  document.getElementById('riwayatTitle').textContent =
    hist.locked ? 'Riwayat Saya — ' + hist.nama : 'Riwayat & Struk Pesanan';
  showHistoryList();
  renderHistory();
  if (opts.orderId) showStruk(opts.orderId);
  bootstrap.Modal.getOrCreateInstance(document.getElementById('modalRiwayat')).show();
}

function showHistoryList() {
  document.getElementById('riwayatListPane').classList.remove('d-none');
  document.getElementById('riwayatStrukPane').classList.add('d-none');
  hist.currentId = null;
  renderHistory();
}

function renderHistory() {
  const box = document.getElementById('riwayatList');
  if (!box) return;
  if (!hist.nama || !hist.kontak) {
    box.innerHTML = '<p class="text-center text-secondary my-3">Masukkan nama pemesan dan nomor WhatsApp (atau nomor meja) untuk mencari pesanan Anda.</p>';
    return;
  }
  const list = findOrdersByBuyer(hist.nama, hist.kontak).slice(0, 30);
  if (!list.length) {
    box.innerHTML = '<p class="text-center text-secondary my-3">Pesanan tidak ditemukan. Pastikan nama dan nomor WA/meja sama dengan saat memesan.</p>';
    return;
  }
  box.innerHTML = list.map(o => `
    <div class="history-card border rounded p-2 mb-2">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <strong>#${String(o.no).padStart(3, '0')}</strong>
          <span class="badge ${o.status === 'selesai' ? 'bg-success' : 'bg-warning text-dark'} ms-1">
            ${o.status === 'selesai' ? 'Selesai' : 'Diproses'}
          </span>
          <div class="small text-secondary">${esc(o.waktu)} • ${esc(o.tipe)}</div>
        </div>
        <div class="price">${rupiah(o.total)}</div>
      </div>
      <div class="small my-1">${esc(itemsShort(o))}</div>
      <button type="button" class="btn btn-sm btn-outline-teh" data-struk="${esc(o.id)}">🧾 Lihat &amp; Download / Cetak Struk</button>
    </div>`).join('');
}

function showStruk(id) {
  const o = getOrders().find(x => x.id === id);
  if (!o) return;
  hist.currentId = id;
  document.getElementById('riwayatStruk').innerHTML = receiptHtml(o);
  document.getElementById('riwayatListPane').classList.add('d-none');
  document.getElementById('riwayatStrukPane').classList.remove('d-none');
}

const settingsPages = [];
function registerSettingsPages(pages) {
  pages.forEach(p => settingsPages.push(p));
}

function renderDisplaySettings(el) {
  const sess = getSession();
  const canBg = !!sess && (sess.role === 'owner' || sess.role === 'karyawan');
  el.innerHTML = `
    <div class="card p-3 mb-3">
      <label class="form-label fw-semibold d-block">Mode Tampilan</label>
      <div class="form-check form-switch fs-5">
        <input class="form-check-input" type="checkbox" role="switch" id="themeSwitch">
        <label class="form-check-label" for="themeSwitch">🌙 Mode Gelap</label>
      </div>
      <small class="text-secondary">Beralih antara tampilan Terang dan Gelap.</small>
    </div>
    <div class="card p-3 mb-3">
      <label class="form-label fw-semibold" for="langSelect">🌐 Bahasa</label>
      <select id="langSelect" class="form-select" data-no-i18n>
        <option value="id">Bahasa Indonesia</option>
        <option value="en">English</option>
      </select>
      <small class="text-secondary">Mengatur bahasa teks antarmuka.</small>
    </div>
    ${canBg ? `<div class="card p-3 mb-3">
      <label class="form-label fw-semibold d-block">🎞️ Background &amp; Animasi Halaman Utama</label>
      <div class="bg-options" id="bgOptions">
        ${BG_MODES.map(m => `
          <label class="bg-option" data-mode="${m.id}">
            <input type="radio" name="bgMode" value="${m.id}" class="visually-hidden">
            <span class="bg-swatch bg-swatch-${m.id}"></span>
            <span class="bg-text"><strong>${m.icon} ${m.title}</strong><small>${m.desc}</small></span>
          </label>`).join('')}
      </div>
      <div class="bg-upload mt-3">
        <label class="form-label fw-semibold" for="inWallpaper">Upload Wallpaper dari Galeri</label>
        <input type="file" id="inWallpaper" class="form-control" accept="image/*">
        <div class="wallpaper-thumb-wrap d-none" id="wallpaperThumbWrap">
          <img id="wallpaperThumb" class="wallpaper-thumb" alt="Wallpaper">
          <button type="button" class="btn btn-sm btn-outline-danger" id="btnWallpaperDel">Hapus Wallpaper</button>
        </div>
        <small class="text-secondary d-block mt-2">Wallpaper tampil tajam; kartu dan tombol memakai kaca gelap agar tetap terbaca. Berlaku di halaman utama.</small>
        <div class="wp-dim-wrap d-none" id="wpDimWrap">
          <label class="form-label small fw-semibold mb-0" for="wpDim">Redupkan Wallpaper <span id="wpDimVal" data-no-i18n></span></label>
          <input type="range" class="form-range" id="wpDim" min="0" max="60" step="2">
          <small class="text-secondary">Makin kecil makin jernih. Naikkan jika teks kurang kontras.</small>
        </div>
      </div>
    </div>` : `<div class="card p-3 mb-3">
      <label class="form-label fw-semibold d-block">🎞️ Background &amp; Animasi Halaman Utama</label>
      <p class="small text-secondary mb-0">Background dan animasi halaman utama hanya dapat diubah oleh Owner atau Karyawan setelah login.</p>
    </div>`}
    <p class="small text-secondary mb-0">Pengaturan tersimpan otomatis di perangkat ini.</p>`;

  if (canBg) {
  const bgBox = el.querySelector('#bgOptions');
  const thumbWrap = el.querySelector('#wallpaperThumbWrap');
  const thumb = el.querySelector('#wallpaperThumb');
  const dimWrap = el.querySelector('#wpDimWrap');
  const dimInput = el.querySelector('#wpDim');
  const dimVal = el.querySelector('#wpDimVal');
  function syncBg() {
    const raw = dbGet(KEYS.bg, BG_DEFAULT) || BG_DEFAULT;
    const cur = getBg();
    bgBox.querySelectorAll('.bg-option').forEach(l => {
      const on = l.dataset.mode === cur.mode;
      l.classList.toggle('active', on);
      l.querySelector('input').checked = on;
    });
    if (raw.image) {
      thumb.src = raw.image;
      thumbWrap.classList.remove('d-none');
      dimWrap.classList.remove('d-none');
    } else {
      thumbWrap.classList.add('d-none');
      dimWrap.classList.add('d-none');
    }
    dimInput.value = cur.dim;
    dimVal.textContent = cur.dim + '%';
    applyBackground();
  }
  bgBox.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('change', function () {
      const raw = dbGet(KEYS.bg, BG_DEFAULT) || BG_DEFAULT;
      if (this.value === 'image' && !raw.image) {
        toast('Unggah wallpaper dari galeri terlebih dahulu.');
        syncBg();
        return;
      }
      setBg({ mode: this.value });
      syncBg();
      toast('Background halaman utama diperbarui.');
    });
  });
  el.querySelector('#inWallpaper').addEventListener('change', function () {
    const input = this;
    if (!input.files[0]) return;
    compressImage(input.files[0], 1920, function (data) {
      imageLuminance(data).then(function (lum) {
        if (setBg({ mode: 'image', image: data, lum: lum })) {
          input.value = '';
          syncBg();
          toast('Wallpaper berhasil dipasang.');
        }
      });
    }, 0.82);
  });
  el.querySelector('#btnWallpaperDel').addEventListener('click', function () {
    const raw = dbGet(KEYS.bg, BG_DEFAULT) || BG_DEFAULT;
    setBg({ mode: raw.mode === 'image' ? 'emerald' : raw.mode, image: '', lum: null });
    syncBg();
    toast('Wallpaper dihapus.');
  });
  dimInput.addEventListener('input', function () {
    setBg({ dim: Number(this.value) });
    dimVal.textContent = this.value + '%';
    const box = document.querySelector('.bg-anim');
    if (box) box.style.setProperty('--wp-dim', (Number(this.value) / 100).toFixed(2));
    applyTone(getBg());
  });
  syncBg();
  }

  const sw = el.querySelector('#themeSwitch');
  sw.checked = getTheme() === 'dark';
  sw.addEventListener('change', function () { setTheme(this.checked ? 'dark' : 'light'); });
  const sel = el.querySelector('#langSelect');
  sel.value = getLang();
  sel.addEventListener('change', function () { setLang(this.value); });
}

function allSettingsPages() {
  return [{
    id: 'display', icon: '🎨', title: 'Tampilan & Bahasa',
    desc: 'Mode, bahasa, background dan animasi halaman utama', render: renderDisplaySettings
  }].concat(settingsPages);
}

function ensureSettingsDrawer() {
  if (document.getElementById('settingsDrawer')) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="offcanvas offcanvas-end settings-drawer" tabindex="-1" id="settingsDrawer" aria-labelledby="settingsTitle">
      <div class="offcanvas-header border-bottom">
        <button type="button" class="btn btn-sm btn-outline-secondary me-2 d-none" id="settingsBack">← Kembali</button>
        <h5 class="offcanvas-title flex-grow-1" id="settingsTitle">⚙️ Pengaturan</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <div id="settingsMain"></div>
        <div id="settingsSub" class="d-none"></div>
      </div>
    </div>`;
  document.body.appendChild(wrap.firstElementChild);

  const drawer = document.getElementById('settingsDrawer');
  const main = document.getElementById('settingsMain');
  const sub = document.getElementById('settingsSub');
  const back = document.getElementById('settingsBack');
  const title = document.getElementById('settingsTitle');
  const pages = allSettingsPages();

  main.innerHTML = '<div class="settings-list">' + pages.map(p => `
    <button type="button" class="settings-item" data-page="${p.id}">
      <span class="si-icon">${p.icon}</span>
      <span class="si-text"><strong>${p.title}</strong><small>${p.desc}</small></span>
      <span class="si-arrow">›</span>
    </button>`).join('') + '</div>';

  function showMain() {
    main.classList.remove('d-none');
    sub.classList.add('d-none');
    sub.innerHTML = '';
    back.classList.add('d-none');
    title.textContent = '⚙️ Pengaturan';
    drawer.classList.remove('settings-wide');
  }
  function openPage(id) {
    const p = pages.find(x => x.id === id);
    if (!p) return;
    main.classList.add('d-none');
    sub.classList.remove('d-none');
    sub.innerHTML = '';
    p.render(sub);
    back.classList.toggle('d-none', pages.length === 1);
    title.textContent = p.icon + ' ' + p.title;
    drawer.classList.toggle('settings-wide', !!p.wide);
  }

  main.addEventListener('click', function (e) {
    const b = e.target.closest('.settings-item');
    if (b) openPage(b.dataset.page);
  });
  back.addEventListener('click', showMain);
  drawer.addEventListener('show.bs.offcanvas', function () {
    if (pages.length === 1) openPage(pages[0].id); else showMain();
  });
  drawer.addEventListener('hidden.bs.offcanvas', function () {
    sub.innerHTML = '';
  });
}

function bindGearButtons() {
  const el = document.getElementById('settingsDrawer');
  if (!el || typeof bootstrap === 'undefined') return;
  const oc = bootstrap.Offcanvas.getOrCreateInstance(el);
  document.querySelectorAll('.gear-btn').forEach(b => {
    b.addEventListener('click', function () {
      b.classList.add('open');
      oc.show();
    });
  });
  el.addEventListener('hide.bs.offcanvas', function () {
    document.querySelectorAll('.gear-btn').forEach(b => b.classList.remove('open'));
  });
}

document.addEventListener('DOMContentLoaded', function () {
  ensureSettingsDrawer();
  bindGearButtons();
  applyBackground();
  applyStoreIdentity();
  applyTheme(getTheme());
  applyLanguage();
  updateQueueBadge();
  setInterval(updateQueueBadge, 4000);
});