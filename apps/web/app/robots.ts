import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { const base=process.env.PUBLIC_APP_URL??"http://localhost:3000"; return {rules:[{userAgent:"*",allow:["/","/templates","/pricing","/status","/thiep/","/g/"],disallow:["/admin/","/dashboard","/account","/billing","/weddings/"]}],sitemap:`${base}/sitemap.xml`}; }
