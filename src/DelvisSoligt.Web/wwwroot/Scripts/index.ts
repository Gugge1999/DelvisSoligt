import $ from "jquery";
import { Hoppsan } from "./hejsan.js";
import { add } from "lodash-es";

console.log("hello from esbuild");

const linkLength = $("a").length;
console.log(`${linkLength} + 1 = ${add(linkLength, 1)}`);

type Item = {
    id: number;
    name: "item-1" | "item-2";
};

const items: Item[] = [
    {
        id: 1,
        name: "item-1",
    },
    {
        id: 2,
        name: "item-2",
    },
];

console.log("hejsan", items);

console.log("enum test", Hoppsan.HejsanNy);

for (const item of items) {
    console.log(`Id: ${item.id}\nName: ${item.name}`);
}
