export default function CTASection() {
  return (
    <section id="action" className="py-section-gap bg-background">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="bg-surface-container-high rounded-3xl p-12 md:p-24 relative overflow-hidden text-center shadow-inner">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              Hãy cùng chúng tôi giữ màu xanh cho mai sau
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Mỗi đóng góp của bạn, dù là nhỏ nhất, đều góp phần xây dựng một rào chắn vững chắc bảo vệ lá phổi xanh của Việt Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-secondary hover:bg-secondary-container text-white font-label-caps text-label-caps px-10 py-5 rounded-lg shadow-lg shadow-secondary/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                QUYÊN GÓP BẢO TỒN
              </button>
              <button className="bg-primary hover:bg-primary-container text-white font-label-caps text-label-caps px-10 py-5 rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                ĐĂNG KÝ TÌNH NGUYỆN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
