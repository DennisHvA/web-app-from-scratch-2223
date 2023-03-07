import { renderDetail } from "./renderData.js";

export function router() {
    routie({
        '': () => {
            // console.log("hallo")
        },
        ':id': id => {
            renderDetail(id);
        }
    })
}