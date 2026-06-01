"use client";

import React, { useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const DEFAULT_IMAGES = [
  {
    id: "img1",
    name: "Tái tạo / Trồng cây",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8-2SemjPIXg1RKxm5voRfrYC5gVkESfS9YfyYCMS8tUfQxMA2qbXswu57AuLPNDAZ-FmKXDulvm3rQ-_vZfsjdTnZZi_NaPyR2HkQHzZLZhtIG0tdcHBAWMkjm_thJVq3ZWYCIy2tjG868vmo-UnRTmdqxwsWUWcc4yv6ggoS8AiwC0E23BnIH-rxM1SxlvHRzcpN96vncEENkFKGhQk7ncCOmLwh2qNkyA5w_5DvxQVVk5k8FPwlo6Y3pdt900lnvKQxZSfCCj4",
  },
  {
    id: "img2",
    name: "Núi rừng / Hoàng hôn",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlI6qa8onN0WxJTV4EbcYVOgyOwf17BjRPBlWjfS6iCZib1HEYPllWD4XEzUHyfCBMOigtN2yfnQzPJ1wsPVH6Ccx4ZySoG3ah8q0oIQW8MHErLqk5_OdQ2rBPXRGMeqBHKPzmgFRpygC9HT4OQJO7hH7vy2Xfze4GBua9tMikeSA-FH8vMXrPTDCC7botecnXTy2fLPr7dmEd3UrETQNKISHxcREfTgdaMNvKv0YLbvtcuTwWSRMpvQlqXbEJOiWVZxYlOjpbAYw",
  },
  {
    id: "img3",
    name: "Thông xanh / Nắng sớm",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCazceoneK-yKqhfWXK0ERGMG6ueoi5MMnPZm5EckQhvMl75BGcUabDLllDE2awZjC_4OXL7dQbp4dRA0uREAKyqQYGVpevDpolsJzTRnJVxJMrNIyx6ecFkAuWjuurV0B9vNmT4Su33sWipfJie8Gv4PbRJBLCXyB7PDzTI2coYng9HmEfFtIHvmE7eg5MbPLi8AY1jMaixvgT7Bae3eD3E_8IxgIp3XJZ8dFxyVEEE9ONsRQb-urdUTi0MVC73xrpMYQy_iI4rCU",
  },
];

export default function CreateProjectModal({
  isOpen,
  onClose,
  onSuccess,
}: CreateProjectModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState<number>(0);
  const [target, setTarget] = useState<number>(1000);
  const [unit, setUnit] = useState("CÂY");
  const [selectedImage, setSelectedImage] = useState(DEFAULT_IMAGES[0].url);
  const [customImage, setCustomImage] = useState("");
  const [useCustomImage, setUseCustomImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!title.trim()) {
      setErrorMsg("Vui lòng nhập tên dự án.");
      return;
    }
    if (!description.trim()) {
      setErrorMsg("Vui lòng nhập mô tả dự án.");
      return;
    }
    if (target <= 0) {
      setErrorMsg("Mục tiêu phải lớn hơn 0.");
      return;
    }
    if (current < 0) {
      setErrorMsg("Tiến độ hiện tại không được nhỏ hơn 0.");
      return;
    }

    const imageUrl = useCustomImage ? customImage.trim() : selectedImage;
    if (useCustomImage && !imageUrl) {
      setErrorMsg("Vui lòng nhập đường liên kết ảnh tùy chỉnh.");
      return;
    }

    setIsLoading(true);

    try {
      if (!isSupabaseConfigured || !supabase) {
        // Fallback for mock environment
        console.log("Mocking database insert since Supabase is not configured.");
        // We will mock dynamic creation directly in frontend if db not configured
        const mockNewProject = {
          id: `mock-${Date.now()}`,
          title,
          description,
          image: imageUrl || DEFAULT_IMAGES[0].url,
          current,
          target,
          unit: unit.toUpperCase().trim(),
          created_at: new Date().toISOString(),
        };
        
        // Save to local storage for persistence in mock mode
        const existingMocks = localStorage.getItem("mock_projects");
        const mockList = existingMocks ? JSON.parse(existingMocks) : [];
        mockList.push(mockNewProject);
        localStorage.setItem("mock_projects", JSON.stringify(mockList));

        alert("Dự án được tạo thành công! (Lưu trữ cục bộ - Mock Mode)");
        setIsLoading(false);
        resetForm();
        onSuccess();
        onClose();
        return;
      }

      const { error } = await supabase.from("projects").insert([
        {
          title,
          description,
          image: imageUrl,
          current,
          target,
          unit: unit.toUpperCase().trim(),
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }

      alert("Tạo dự án thành công!");
      setIsLoading(false);
      resetForm();
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error("Error creating project:", err);
      setErrorMsg(err.message || "Đã xảy ra lỗi không xác định.");
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCurrent(0);
    setTarget(1000);
    setUnit("CÂY");
    setSelectedImage(DEFAULT_IMAGES[0].url);
    setCustomImage("");
    setUseCustomImage(false);
    setErrorMsg("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest border border-primary/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container-high"
          aria-label="Đóng"
        >
          <span className="material-symbols-outlined select-none text-xl">close</span>
        </button>

        <div className="mb-6">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-1">
            GIA LAI VIGILANT
          </span>
          <h2 className="font-headline-sm text-headline-sm text-primary">Tạo Dự Án Bảo Tồn Mới</h2>
        </div>

        {errorMsg && (
          <div className="bg-error-container text-on-error-container p-4 rounded-lg mb-6 text-sm border-l-4 border-error flex items-center gap-2">
            <span className="material-symbols-outlined select-none text-base">error</span>
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 font-body-md text-body-md">
          {/* Tên dự án */}
          <div>
            <label className="block text-sm font-bold text-primary mb-1 select-none">
              Tên dự án <span className="text-secondary">*</span>
            </label>
            <input
              type="text"
              required
              disabled={isLoading}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="VD: Bảo vệ lưu vực sông Ba"
              className="w-full bg-surface-container-low border border-outline/20 rounded-lg p-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          {/* Mô tả */}
          <div>
            <label className="block text-sm font-bold text-primary mb-1 select-none">
              Mô tả chi tiết <span className="text-secondary">*</span>
            </label>
            <textarea
              required
              disabled={isLoading}
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả mục tiêu của dự án, hành động và tác động môi trường..."
              className="w-full bg-surface-container-low border border-outline/20 rounded-lg p-3 text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>

          {/* Hàng ngang: Mục tiêu, Tiến độ, Đơn vị */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold text-primary mb-1 select-none">
                Mục tiêu <span className="text-secondary">*</span>
              </label>
              <input
                type="number"
                required
                min={1}
                disabled={isLoading}
                value={target}
                onChange={(e) => setTarget(parseInt(e.target.value) || 0)}
                className="w-full bg-surface-container-low border border-outline/20 rounded-lg p-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-1 select-none">
                Hiện tại
              </label>
              <input
                type="number"
                min={0}
                disabled={isLoading}
                value={current}
                onChange={(e) => setCurrent(parseInt(e.target.value) || 0)}
                className="w-full bg-surface-container-low border border-outline/20 rounded-lg p-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-1 select-none">
                Đơn vị <span className="text-secondary">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isLoading}
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="CÂY / TRẠM"
                className="w-full bg-surface-container-low border border-outline/20 rounded-lg p-3 text-on-surface focus:outline-none focus:border-secondary transition-colors placeholder:text-outline/40"
              />
            </div>
          </div>

          {/* Chọn ảnh */}
          <div>
            <label className="block text-sm font-bold text-primary mb-2 select-none">
              Hình ảnh dự án
            </label>
            <div className="flex gap-4 mb-3">
              <button
                type="button"
                onClick={() => setUseCustomImage(false)}
                className={`flex-1 py-2 px-3 border rounded-lg text-sm transition-all cursor-pointer font-bold ${
                  !useCustomImage
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-low text-on-surface border-outline/20 hover:bg-surface-container-high"
                }`}
              >
                Thư viện mẫu
              </button>
              <button
                type="button"
                onClick={() => setUseCustomImage(true)}
                className={`flex-1 py-2 px-3 border rounded-lg text-sm transition-all cursor-pointer font-bold ${
                  useCustomImage
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-low text-on-surface border-outline/20 hover:bg-surface-container-high"
                }`}
              >
                Link ảnh ngoài
              </button>
            </div>

            {!useCustomImage ? (
              <div className="grid grid-cols-3 gap-2">
                {DEFAULT_IMAGES.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    disabled={isLoading}
                    onClick={() => setSelectedImage(img.url)}
                    className={`relative rounded-lg overflow-hidden border-2 aspect-[4/3] cursor-pointer transition-all hover:scale-105 ${
                      selectedImage === img.url
                        ? "border-secondary scale-[1.03] shadow-md"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 py-1 text-[10px] text-white text-center">
                      {img.name}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="url"
                disabled={isLoading}
                value={customImage}
                onChange={(e) => setCustomImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-surface-container-low border border-outline/20 rounded-lg p-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-outline/10 mt-6">
            <button
              type="button"
              disabled={isLoading}
              onClick={onClose}
              className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-caps text-label-caps py-4 rounded-lg transition-all active:scale-[0.98] cursor-pointer font-bold"
            >
              HỦY BỎ
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-secondary hover:bg-secondary-container text-white font-label-caps text-label-caps py-4 rounded-lg shadow-md shadow-secondary/10 hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer font-bold flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  ĐANG LƯU...
                </>
              ) : (
                "TẠO DỰ ÁN"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
