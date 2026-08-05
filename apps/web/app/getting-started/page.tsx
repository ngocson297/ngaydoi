"use client";
import { useCallback, useEffect, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { ApiError } from "../../lib/api";

type Step={key:string;label:string;done:boolean}; type Progress={steps:Step[];completedAt:string|null};
function Content(){const{authRequest}=useAuth();const[data,setData]=useState<Progress|null>(null);const[error,setError]=useState("");const load=useCallback(()=>authRequest<Progress>("/growth/onboarding").then(setData),[authRequest]);useEffect(()=>{void load().catch(e=>setError(e instanceof ApiError?e.message:"Không thể tải hướng dẫn"))},[load]);
async function toggle(key:string){if(!data)return;const steps=data.steps.map(s=>s.key===key?{...s,done:!s.done}:s);setData({...data,steps});try{await authRequest("/growth/onboarding",{method:"PATCH",body:JSON.stringify({steps})})}catch(e){setError(e instanceof ApiError?e.message:"Không thể lưu");await load()}}
const done=data?.steps.filter(s=>s.done).length??0,total=data?.steps.length??5,pct=Math.round(done/total*100);
return <AppShell active="onboarding"><div className="page-heading"><div><p className="eyebrow">BẮT ĐẦU NHANH</p><h1>Đưa thiệp đầu tiên lên online</h1><p>Một lộ trình ngắn, rõ ràng để bạn không bỏ sót bước quan trọng.</p></div><div className="progress-orb"><strong>{pct}%</strong><span>hoàn thành</span></div></div>{error&&<div className="form-alert error">{error}</div>}<section className="panel launch-guide"><div className="launch-progress"><span style={{width:`${pct}%`}}/></div>{data?.steps.map((s,i)=><button type="button" className={`launch-step ${s.done?"done":""}`} onClick={()=>void toggle(s.key)} key={s.key}><span>{s.done?"✓":i+1}</span><div><strong>{s.label}</strong><p>{["Thêm tên và số điện thoại để hỗ trợ thuận tiện hơn.","Tạo workspace và nhập ngày cưới.","Chọn mẫu, màu sắc, ảnh bìa và nội dung.","Nhập khách, tạo link cá nhân và thử RSVP.","Kiểm tra lần cuối rồi xuất bản thiệp."][i]}</p></div></button>)}</section><div className="friendly-actions"><a className="btn btn-primary" href="/weddings/new">Tạo đám cưới</a><a className="btn btn-secondary" href="/support">Cần hỗ trợ</a></div></AppShell>}
export default function Page(){return <AuthGate><Content/></AuthGate>}
