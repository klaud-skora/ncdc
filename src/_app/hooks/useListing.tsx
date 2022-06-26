import { useEffect, useState } from "react";

import { TILES_PER_PAGE } from "../constants";
import { Item } from "../types";

interface Data {
  results: Item[];
  info: { seed: string; results: number; page: number; version: string };
}

interface UseListing {
  data?: Data;
  page: number;
  batch: number;
  setSeed(value?: string): void;
  setPage(page: number): void;
  setBatch(batch: number): void;
}

export const useListing = (): UseListing => {
  const [data, setData] = useState<Data | undefined>();
  const [page, setPage] = useState(1);
  const [batch, setBatch] = useState(1);
  const [seed, setSeed] = useState<string | undefined>();

  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?page=${page}&results=${TILES_PER_PAGE}&inc=picture,name,nat&seed=${seed}`
    )
      .then((results) => results.json())
      .then((data) => setData(data));
  }, [page, seed]);

  return { data, setSeed, page, setPage, batch, setBatch };
};
