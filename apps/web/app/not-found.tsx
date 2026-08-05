import { EmptyState } from "../components/ui";

export default function NotFound() {
  return <main className="friendly-error"><EmptyState icon="404" title="Không tìm thấy trang này" description="Liên kết có thể đã thay đổi, hết hạn hoặc không còn được chia sẻ." primaryAction={{ label: "Về trang chủ", href: "/" }} secondaryAction={{ label: "Kiểm tra hệ thống", href: "/status" }} /></main>;
}
