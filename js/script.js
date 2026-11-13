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
  ownerCred: 'kt3_ownerCred'
};

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
  'Hapus SEMUA data pesanan? Tindakan ini tidak bisa dibatalkan.': 'Delete ALL order data? This action cannot be undone.',
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

function compressImage(file, maxW, callback) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL('image/jpeg', 0.7));
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
}
initDB();

function getStoreName() { return dbGet(KEYS.storeName, 'Kedai Teh Neng'); }
function getRunningText() { return dbGet(KEYS.runningText, ''); }
function getQris() { return dbGet(KEYS.qris, defaultQris()); }
function getSeblakBase() { return Number(dbGet(KEYS.seblakBase, 0)) || 0; }

function applyStoreIdentity() {
  const name = getStoreName();
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
  if (o) { o.status = status; dbSet(KEYS.orders, orders); }
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
function resetOrders() {
  if (confirm('Hapus SEMUA data pesanan? Tindakan ini tidak bisa dibatalkan.')) {
    dbSet(KEYS.orders, []);
    return true;
  }
  return false;
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

function buildReceiptCanvas(o) {
  const model = receiptModel(o);
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
  const c = buildReceiptCanvas(o);
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
}

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
    <p class="small text-secondary mb-0">Pengaturan tersimpan otomatis di perangkat ini.</p>`;
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
    desc: 'Mode terang/gelap dan bahasa antarmuka', render: renderDisplaySettings
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
  applyStoreIdentity();
  applyTheme(getTheme());
  applyLanguage();
});