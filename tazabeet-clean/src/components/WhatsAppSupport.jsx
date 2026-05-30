import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { translate, useDashboardLanguage } from "../utils/dashboardI18n";
import "./WhatsAppSupport.css";

const WHATSAPP_NUMBER = "201000570031";
const HIDDEN_PATHS = ["/admin", "/worker-dashboard"];

export default function WhatsAppSupport() {
    const location = useLocation();
    const { language, isArabic } = useDashboardLanguage();
    const isHidden = HIDDEN_PATHS.some((path) => location.pathname.startsWith(path));

    const message = useMemo(() => {
        const text = isArabic
            ? "مرحبا TAZABEET، أحتاج مساعدة في خدمة."
            : "Hello TAZABEET, I need help with a service.";
        return encodeURIComponent(text);
    }, [isArabic]);

    if (isHidden) return null;

    return (
        <a
            className={`whatsappSupport ${isArabic ? "rtl" : ""}`}
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={translate(language, "support.whatsappLabel")}
        >
            <span className="whatsappSupportIcon" aria-hidden="true">☎</span>
            <span className="whatsappSupportText">
                <b>{translate(language, "support.title")}</b>
                <small>{translate(language, "support.subtitle")}</small>
            </span>
        </a>
    );
}
