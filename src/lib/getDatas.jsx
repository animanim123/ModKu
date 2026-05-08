import React from "react";
import supabase from "../supabase.js";

export const GetDatas = async () => {
  const { data, error } = await supabase
    .from("apkcuy")
    .select(
      `
    id,
    url,
    versi,
    rekomend,
    kat_id,
    kategori:kat_id (
      name,
      icon,
      spesifikasi
    )
  `,
    )
    .order("id", { ascending: false });
  if (error) throw error;
  return data;
};
