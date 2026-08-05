import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.PUBLIC_APP_URL??"http://localhost:3000"; return ["","/templates","/pricing","/status","/login","/register"].map((path)=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:0.7})); }
