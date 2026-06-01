interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  current: number;
  target: number;
  unit: string;
}

const projects: Project[] = [
  {
    id: "reforestation",
    title: "Tái tạo rừng thông",
    description: "Trồng mới 10,000 cây thông ba lá tại các khu vực đất trống đồi trọc.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8-2SemjPIXg1RKxm5voRfrYC5gVkESfS9YfyYCMS8tUfQxMA2qbXswu57AuLPNDAZ-FmKXDulvm3rQ-_vZfsjdTnZZi_NaPyR2HkQHzZLZhtIG0tdcHBAWMkjm_thJVq3ZWYCIy2tjG868vmo-UnRTmdqxwsWUWcc4yv6ggoS8AiwC0E23BnIH-rxM1SxlvHRzcpN96vncEENkFKGhQk7ncCOmLwh2qNkyA5w_5DvxQVVk5k8FPwlo6Y3pdt900lnvKQxZSfCCj4",
    current: 6500,
    target: 10000,
    unit: "CÂY"
  },
  {
    id: "wildlife",
    title: "Bảo tồn đa dạng",
    description: "Thiết lập hệ thống camera giám sát động vật hoang dã tại vườn quốc gia.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlI6qa8onN0WxJTV4EbcYVOgyOwf17BjRPBlWjfS6iCZib1HEYPllWD4XEzUHyfCBMOigtN2yfnQzPJ1wsPVH6Ccx4ZySoG3ah8q0oIQW8MHErLqk5_OdQ2rBPXRGMeqBHKPzmgFRpygC9HT4OQJO7hH7vy2Xfze4GBua9tMikeSA-FH8vMXrPTDCC7botecnXTy2fLPr7dmEd3UrETQNKISHxcREfTgdaMNvKv0YLbvtcuTwWSRMpvQlqXbEJOiWVZxYlOjpbAYw",
    current: 42,
    target: 100,
    unit: "TRẠM"
  },
  {
    id: "education",
    title: "Giáo dục cộng đồng",
    description: "Nâng cao nhận thức bảo vệ rừng cho thế hệ trẻ vùng cao.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCazceoneK-yKqhfWXK0ERGMG6ueoi5MMnPZm5EckQhvMl75BGcUabDLllDE2awZjC_4OXL7dQbp4dRA0uREAKyqQYGVpevDpolsJzTRnJVxJMrNIyx6ecFkAuWjuurV0B9vNmT4Su33sWipfJie8Gv4PbRJBLCXyB7PDzTI2coYng9HmEfFtIHvmE7eg5MbPLi8AY1jMaixvgT7Bae3eD3E_8IxgIp3XJZ8dFxyVEEE9ONsRQb-urdUTi0MVC73xrpMYQy_iI4rCU",
    current: 12,
    target: 15,
    unit: "TRƯỜNG"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-section-gap bg-background">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block">
              HÀNH ĐỘNG CÙNG CHÚNG TÔI
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-2">
              Dự án đang triển khai
            </h2>
          </div>
          <a
            className="text-primary font-label-caps text-label-caps flex items-center gap-2 group hover:text-secondary transition-colors"
            href="#"
          >
            XEM TẤT CẢ DỰ ÁN
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 select-none">
              arrow_right_alt
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {projects.map((project) => {
            const percentage = (project.current / project.target) * 100;
            return (
              <div
                key={project.id}
                className="bg-surface-container-low rounded-lg overflow-hidden border-l-4 border-secondary shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.image}
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="w-full bg-primary/10 h-3 rounded-full overflow-hidden mt-auto">
                    <div
                      className="bg-tertiary-fixed-dim h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 font-label-caps text-label-caps text-secondary font-bold select-none">
                    <span>
                      {project.current.toLocaleString()} {project.unit}
                    </span>
                    <span>MỤC TIÊU: {project.target.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
