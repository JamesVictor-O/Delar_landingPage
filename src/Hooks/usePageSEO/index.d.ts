declare module "./index.tsx" {
  type SEOProps = {
    title: string;
    description: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
  };

  const usePageSEO: (props: SEOProps) => void;
  export default usePageSEO;
}
