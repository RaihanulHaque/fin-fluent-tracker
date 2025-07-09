import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Get footer data from translations
  const productLinks = t("footer.sections.product.links", {
    returnObjects: true,
  }) as string[];
  const supportLinks = t("footer.sections.support.links", {
    returnObjects: true,
  }) as string[];
  const bottomLinks = t("footer.bottom.links", {
    returnObjects: true,
  }) as string[];

  return (
    <footer className="dark:bg-gray-900 bg-gray-50 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h3 className="text-xl dark:text-white text-black font-semibold">
                Hishab
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.brand.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-emerald-600 text-emerald-600 hover:text-gray-50 hover:bg-emerald-600 transition-colors"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-emerald-600 text-emerald-600 hover:text-gray-50 hover:bg-emerald-600 transition-colors"
              >
                <span>t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-emerald-600 text-emerald-600 hover:text-gray-50 hover:bg-emerald-600 transition-colors"
              >
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.sections.product.title")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.sections.support.title")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.sections.contact.title")}
            </h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>{t("footer.sections.contact.email")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>{t("footer.sections.contact.phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>{t("footer.sections.contact.address")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-gray-50 border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">{t("footer.bottom.copyright")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {bottomLinks[0]}
            </button>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {bottomLinks[1]}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {bottomLinks[2]}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
