import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";
import { VitaObject } from "../components/VitaEntries";

export default function getIds(
  setIds: Dispatch<SetStateAction<VitaObject[]>>
): void {
  client
    .getEntries({ content_type: "vita" })
    .then((entry: any) => {
      //console.log("getIds", entry.items);
      const entryIds = entry.items
        .map((item: any) => {
          if (item) {
            return {
              vitaId: item.sys.id,
              vitaStartDate: item.fields.vitaStartDate.slice(0, 4),
              vitaEndDate: item.fields.vitaEndDate.slice(0, 4),
            };
          }
        })
        .sort(
          (a: any, b: any) =>
            parseInt(b?.vitaEndDate) - parseInt(a?.vitaEndDate)
        );
      //console.log("Sorted list", entryIds);
      setIds(entryIds);
    })
    .catch((err) => console.error("getIds ERROR:", err));
}
