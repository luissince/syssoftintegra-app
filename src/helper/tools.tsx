import toast from 'react-hot-toast';
import bootstrap from "../assets/js/bootstrap";
import images from './images';

// export function getCurrentDate() {
//   let today = new Date();
//   let formatted_date = today.getFullYear() + "-" + ((today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : '0' + (
//     today.getMonth() + 1)) + "-" + (today.getDate() > 9 ? today.getDate() : '0' + today.getDate());
//   return formatted_date;
// };

// export function getCurrentTime() {
//   let today = new Date();
//   let formatted_time = (today.getHours() > 9 ? today.getHours() : '0' + today.getHours()) + ":" + (today.getMinutes() > 9 ? today.getMinutes() : '0' + today.getMinutes()) + ":" + (today.getSeconds() > 9 ? today.getSeconds() : '0' + today.getSeconds());
//   return formatted_time;
// }

// export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = "") {
//   try {
//     decimalCount = Math.abs(decimalCount);
//     decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

//     const negativeSign = amount < 0 ? "-" : "";

//     let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
//     let j = (i.length > 3) ? i.length % 3 : 0;

//     return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" +
//       thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
//   } catch (e) {
//     return 0;
//   }
// };

// export function dateFormat(value) {
//   var parts = value.split("-");
//   let today = new Date(parts[0], parts[1] - 1, parts[2]);
//   return (
//     (today.getDate() > 9 ? today.getDate() : "0" + today.getDate()) +
//     "/" +
//     (today.getMonth() + 1 > 9
//       ? today.getMonth() + 1
//       : "0" + (today.getMonth() + 1)) +
//     "/" +
//     today.getFullYear()
//   );
// }

// export function timeForma24(value) {
//   var hourEnd = value.indexOf(":");
//   var H = +value.substr(0, hourEnd);
//   var h = H % 12 || 12;
//   var ampm = H < 12 || H === 24 ? "AM" : "PM";
//   return h + value.substr(hourEnd, 3) + ":" + value.substr(6, 2) + " " + ampm;
// }

// export async function imageBase64(data) {
//   const files = data;
//   if (files.length !== 0) {
//     const read = await readDataURL(files);
//     const base64String = read.replace(/^data:.+;base64,/, '');
//     const extension = fileExtension(files[0].name);
//     return { base64String, extension };
//   } else {
//     return false;
//   }
// }

// export function readDataURL(files) {
//   return new Promise((resolve, reject) => {
//     const file = files[0];
//     const blob = file.slice();
//     const reader = new FileReader();
//     reader.onload = () => {
//       resolve(reader.result);
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(blob);
//   })
// }

// export function fileExtension(fileName) {
//   return fileName.split("?")[0].split("#")[0].split(".").pop();
// }

// export function keyUpSearch(event, callback) {
//   if (event.key !== "Tab"
//     && event.key !== "Backspace"
//     && event.key !== "Control"
//     && event.key !== "AltRight"
//     && (event.key !== "Control" && event.key !== "AltRight")
//     && (event.key !== "Control" && event.key !== "c")
//     && event.key !== "Alt"
//     && event.key !== "ArrowRight"
//     && event.key !== "ArrowLeft"
//     && event.key !== "ArrowDown"
//     && event.key !== "ArrowUp") {
//     callback();
//   }
// }

// export function monthName(month) {
//   let months = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Setiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
//   ];
//   return months[month - 1];
// }

export function alertWarning(titulo: string, mensaje: string) {
    toast((t) => (
        <div className="container-fluid">
            <button type="button" className="close" onClick={() => toast.dismiss(t.id)}>
                <span>&times;</span>
            </button>
            <div className="d-flex align-items-center">
                <img src={images.warning} width={36} />
                <h4 className="alert-heading">{titulo}</h4>
            </div>
            <p>{mensaje}</p>
        </div>
    ), {
        position: "top-right",
        className: "pb-0 pl-0 pr-0 m-0"
    })
}

export function porcent(total: number, valor: number) {
    return (valor * 100) / total;
}

export function showModal(element: HTMLDivElement) {
    const myModal = new bootstrap.Modal(element);
    myModal.show();
}

export function hideModal(element: HTMLDivElement) {
    const myModal = bootstrap.Modal.getInstance(element);
    myModal.hide();
}

export function viewModal(id: string, callback = function () { }) {
    // let myModalEl = document.getElementById(id) as HTMLElement;
    // myModalEl.addEventListener("shown.bs.modal", callback);
    const element = document.getElementById(id) as HTMLDivElement;
    element.addEventListener("shown.bs.modal", callback);
}

export function clearModal(id: string, callback = function () { }) {
    const element = document.getElementById(id) as HTMLDivElement;
    element.addEventListener("hidden.bs.modal", callback);
}


