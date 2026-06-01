export default function ImportanceSection() {
  return (
    <section id="importance" className="py-section-gap relative bg-background">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 space-y-6">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block">
              TẦM QUAN TRỌNG CỐT LÕI
            </span>
            <h2 className="font-headline-md text-headline-md text-primary leading-snug">
              Lá phổi của khu vực, nguồn sống của muôn loài
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Rừng Gia Lai không chỉ là một không gian xanh; đó là hệ thống điều tiết khí hậu tinh vi và là mái nhà của những loài động thực vật quý hiếm bậc nhất Việt Nam. Mỗi gốc thông cổ thụ là một kho lưu trữ carbon khổng lồ, giữ cho bầu không khí trong lành và cân bằng hệ sinh thái.
            </p>
            <div className="pt-4 border-l-4 border-secondary pl-6 italic font-body-md text-on-surface-variant bg-surface-container-lowest/50 py-2 rounded-r-lg shadow-sm">
              &quot;Nếu rừng mất đi, linh hồn của Tây Nguyên cũng sẽ tan biến.&quot;
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg shadow-primary/5 aspect-[3/4] hover:scale-[1.02] transition-transform duration-500">
              <img
                alt="Forest Canopy"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLn4zp3rclSNtv3BJ7jEOiZleU2SPaBsqtKavcq1WAGqNxqYhGfo_Oia5N7ztFMTWwgvLYupFTtEUPionkgVpyzTMxP7Xzy3zGVRHtWqWLuF7GEqGtFd64ilP4F1uHlrqEwURRnAk4c6M9dwh4REmk1bWmgzk8IVQXytokzzZ51CqjTO8-w10gzHLEX_3UGJduPBGpuqj7bolwj8vAcX_xwb9l_1GG6R6ZycYDkZdXL-ppuX7lSVQcnsxtbqaRAKKoWYSW6uGW8rI"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg shadow-primary/5 aspect-[3/4] mt-8 hover:scale-[1.02] transition-transform duration-500">
              <img
                alt="Mountain Waterfall"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr33kJ6mjNba310VAvDnwwIa1QsZxVeAHDyYRQcPL_3dqEHQkb5vDiFxwJbP853yTVtjvZnqCZJFRi-g3hzSZSiGyTnya6P179-XJcrgH6V4jmRr3zEaEteTMk_Em0LUgqhtaOWWhGMqqA4k-kU9Hsvt-aCx3hpL0NEGECUpgFt24zYmZCnKXa0kpXRz3GM-rAQ8EhYs_aokiwnNPyG0hkfJecEZmkeKFsBpSCSOASgBT6Jwrynnq59_MXhHa9vJ2Xpc5ww8eZ-WI"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
