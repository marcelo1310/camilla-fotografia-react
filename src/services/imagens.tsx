import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/libs/firebase";

export const pegarFotosEnsaio = async (nomeEnsaio: string) => {
  const pastaRef = ref(storage, nomeEnsaio);
  const lista = await listAll(pastaRef);

  const urls = await Promise.all(
    lista.items.map(itemRef => getDownloadURL(itemRef))
  );

  return urls;
};