import { motion } from "framer-motion";
import { QrCode, Smartphone } from "lucide-react";

interface QRCodeProps {
  url?: string;
  size?: number;
}

export default function QRCodeDisplay({
  url = "https://edwinnjogu.dev",
  size = 150,
}: QRCodeProps) {
  // Generate QR code using a free API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    url
  )}&bgcolor=ffffff&color=000000`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4 p-6 bg-card border border-border rounded-2xl"
    >
      <div className="flex items-center gap-2 text-primary">
        <QrCode className="w-5 h-5" />
        <span className="font-semibold">Scan to Visit</span>
      </div>

      <div className="p-3 bg-white rounded-xl shadow-sm">
        <img
          src={qrCodeUrl}
          alt="Portfolio QR Code"
          width={size}
          height={size}
          className="rounded-lg"
        />
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Smartphone className="w-4 h-4" />
        <span>edwinnjogu.dev</span>
      </div>
    </motion.div>
  );
}
