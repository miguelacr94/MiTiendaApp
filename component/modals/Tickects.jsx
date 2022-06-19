import React from 'react';
import { getTotal } from '../../provider/cart/actions';
import { paymethods } from '../../utils/data';
import { aditionalInfo, BancolombiaPayData, CryptoPayData, formatter, NequiPayData } from '../../utils/helpers';

const Tickects = ({ data }) => {


    return (
        <div className="w-6/6 sm:w-80 text-center text-grey-Dark">
            <div className="h-12 bg-red-400 w-full"></div>
            <h2 className="text-center font-bold text-xl">Recibo de pago</h2>
            <h3 className="text-center font-light ">Datos de trasferencia</h3>


            <>
                {data?.pay == "nequi" && (
                    <NequiPaid purchaseId={data.data} total={data.total} />
                )}
                {data?.pay == "bancolombia" && (
                    <BancolombiaPaid purchaseId={data.data} total={data.total} />
                )}
                {/* {data?.pay == "crypto" && (
                    <CryptoPaid purchaseId={data} total={data.total} />
                )} */}
            </>






        </div>
    )
}

export default Tickects


const NequiPaid = ({ purchaseId, total = 0 }) => {
    return (
        <div className="flex flex-col items-start justify-center w-full mt-5 px-2">
            <h2 className="mb-5 text-xl font-bold break-words">
                ID Compra #{purchaseId}
            </h2>
            <div className="flex flex-col items-start justify-center contact">
                <span className="text-xl">Datos de la cuenta de Nequi</span>
                <span>
                    <b>Celular:</b>{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                        href={`https://wa.me/${NequiPayData.wapp}`}
                    >
                        {" "}
                        {NequiPayData.phone}{" "}
                    </a>
                </span>
                <span>
                    <b>Cantidad:</b> {formatter.format(total)} COP
                </span>
                <span>
                    <b>Mensaje:</b> {NequiPayData.message}
                </span>
                <p className="mt-4 break-words">{aditionalInfo}</p>
            </div>
        </div>
    );
};

const BancolombiaPaid = ({ purchaseId, total = 0 }) => {
    return (
        <div className="flex flex-col text-center justify-center w-full mt-5">
            <h2 className="mb-5 text-md font-bold break-words">
                ID Compra #{purchaseId}
            </h2>
            <div className="flex flex-col  justify-center contact">
                <span className="text-md font-bold">Datos de la transferencia</span>
                <span className="text-xs">
                    <b>Valor:</b> {formatter.format(total)} COP
                </span>
                <span className="text-xs">
                    <b >Cuenta N°:</b> {BancolombiaPayData.accountNumber}
                </span>
                <span className="text-xs">
                    <b className="text-xs">Tipo de cuenta:</b> {BancolombiaPayData.accountType}
                </span>
                <span className="text-xs">
                    <b>Titular de la cuenta:</b> {BancolombiaPayData.accountOwner}
                </span>
                <span className="text-xs">
                    <b>N° documento del titular:</b> {BancolombiaPayData.accountDni}
                </span >
                <p className="text-xs mt-4 p-2">{aditionalInfo}</p>
            </div>
        </div>
    );
};

// const CryptoPaid = ({ purchaseId, total = 0 }) => {
//     return (
//         <div className="flex flex-col items-start justify-center w-full mt-5">
//             <h2 className="mb-5 text-xl font-bold break-words">
//                 ID Compra #{purchaseId}
//             </h2>
//             <div className="flex flex-col items-start justify-center contact">
//                 <span className="text-xl">Datos de la transferencia</span>
//                 <span>
//                     <b>Valor:</b> {formatter.format(total)} COP
//                 </span>
//                 <span>
//                     <b>Criptomoneda:</b> {CryptoPayData.moneyType}
//                 </span>
//                 <span>
//                     <b>Monedero:</b> {CryptoPayData.accountWallet}
//                 </span>
//                 <p className="mt-4 break-words">{aditionalInfo}</p>
//             </div>
//         </div>
//     );
// };
