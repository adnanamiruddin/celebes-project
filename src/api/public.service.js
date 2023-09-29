import supabase from ".";

export const getAllCultures = async () => {
  const { data, error } = await supabase.from("cultures").select("*");
  if (error) throw new Error(error.message);
  return data;
};
