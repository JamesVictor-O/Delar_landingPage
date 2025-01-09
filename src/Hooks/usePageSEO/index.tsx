import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
};

const usePageSEO = ({
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}: SEOProps): void => {
  useEffect(() => {
    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords.join(", "));
    setMetaTag("property", "og:title", ogTitle || title);
    setMetaTag("property", "og:description", ogDescription || description);
    if (ogImage) setMetaTag("property", "og:image", ogImage); 
    setMetaTag("property", "og:url", ogUrl || window.location.href);

    return () => {
      // Cleanup logic if necessary
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

  const setMetaTag = (attr: string, key: string, content: string): void => {
    if (content) {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }
  };
};

export default usePageSEO;
