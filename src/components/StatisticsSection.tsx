export default function StatisticsSection() {
  return (
    <section className="bg-primary-container py-section-gap relative overflow-hidden">
      <div className="texture-overlay absolute inset-0"></div>
      <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
          <div className="p-8 group hover:bg-primary/20 rounded-xl transition-all duration-500 cursor-default">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4 block select-none">
              forest
            </span>
            <div className="font-display-lg text-display-lg text-white mb-2 group-hover:scale-105 transition-transform duration-300">
              560K
            </div>
            <p className="font-label-caps text-label-caps text-primary-fixed-dim tracking-wider">
              Hecta diện tích che phủ
            </p>
            <p className="font-body-md text-body-md text-on-primary-container mt-4 opacity-90">
              Tỷ lệ che phủ rừng lớn nhất khu vực Tây Nguyên.
            </p>
          </div>
          <div className="p-8 group hover:bg-primary/20 rounded-xl transition-all duration-500 cursor-default">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4 block select-none">
              diversity_3
            </span>
            <div className="font-display-lg text-display-lg text-white mb-2 group-hover:scale-105 transition-transform duration-300">
              1,200+
            </div>
            <p className="font-label-caps text-label-caps text-primary-fixed-dim tracking-wider">
              Loài thực vật đặc hữu
            </p>
            <p className="font-body-md text-body-md text-on-primary-container mt-4 opacity-90">
              Nơi bảo tồn nguồn gen quý của đại ngàn Đông Nam Á.
            </p>
          </div>
          <div className="p-8 group hover:bg-primary/20 rounded-xl transition-all duration-500 cursor-default">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4 block select-none">
              volunteer_activism
            </span>
            <div className="font-display-lg text-display-lg text-white mb-2 group-hover:scale-105 transition-transform duration-300">
              24/7
            </div>
            <p className="font-label-caps text-label-caps text-primary-fixed-dim tracking-wider">
              Vigilant Protection
            </p>
            <p className="font-body-md text-body-md text-on-primary-container mt-4 opacity-90">
              Hệ thống giám sát rừng thông minh chống phá rừng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
